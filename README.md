# 🍅 Tomato-Do React + TypeScript ver.
[1. 🗒️ 프로젝트 설명](#description) <br>
[2. 🌎 프로젝트 소개](#about-project) <br>
[3. 🔫 트러블 슈팅](#trouble-shotting) <br>
[4. 🖥️ 구현 화면](#results)

## Description

**뽀모도로 타이머 + Todo 관리**  <br>
Vanilla JS로 개발했던 투두리스트+뽀모도로 타이머 프로젝트를 React+TS로 개선하였습니다.

> 2022년 11월 (약 3주) <br>
> 개인 프로젝트 <br>


<img width="600" alt="main" src="https://user-images.githubusercontent.com/85178602/210236089-69482a72-6f5a-4a90-9877-140b3b94b32e.png">


## About Project

### Skill

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">  <img src="https://img.shields.io/badge/Recoil-3578e5?style=for-the-badge&logo=Revolut&logoColor=white">  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

### Function

- **Todo**
    - `Recoil`을 사용하여 사용자가 입력한 할 일을 `Local Storage`에 저장하여 관리 <br>

      - 할 일 등록/수정/삭제/완료여부 체크

    - `recoil-persist` 라이브러리를 사용하여 새로고침 시 `Local Storage`에 저장되어있는 할 일들을 불러올 수 있도록 구현
    - 사용자의 이름을 입력받아 `Local Storage`에 저장 후 인삿말 출력

- **Timer**
    - 타이머 시작 전 버튼을 클릭하여 집중시간, 휴식시간 사이클 설정 <br>

      - 집중시간 25분 - 휴식시간 5분 / 집중시간 50분 - 휴식시간 10분

    - 타이머 시작/일시정지/초기화 기능 구현
    - 상단에 현재 날짜 표시

### To run a project

1. package install

```
npm install
```

2. project execution

```
npm run dev
```

## Trouble Shotting

### 1) TypeScript Type 에러

[포스팅 확인하기]()

**요약** <br>
로컬스토리지에 저장 된 할 일을 불러와 화면에 렌더링하는 중 `type` 에러 발생 <br>
`타입 가드`를 활용하여 에러 해결

**수정 전**<br>
```jsx
export interface Todos {
  todo: string;
  checked: boolean;
}

const [todoItem, setTodoItem] = useState<string>('')
const [Todos, setTodos] = useState<Todos[] | undefined>(); // 원인

useEffect(() => {
  const todoList = localStorageFunc.getItem('todo');
  setTodos(todoList); // error발생 1
}, []);

// 로컬스토리지 util함수 파일
getItem: (key: string): string | Todos[] | undefined => {
  return JSON.parse(localStorage.getItem(key));
}
```

**수정 후**<br>
```jsx
export interface Todos {
  todo: string;
  checked: boolean;
}

const [todos, setTodos] = useState<Todos[]>([]);

useEffect(() => {
  const todoList = localStorageFunc.getItem('todos');
  if (typeof todoList === 'object') {
    setTodos(todoList);
  }
}, []);

// 로컬스토리지 util함수 파일
getItem: (key: string): string | Todos[] | undefined => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
}
```

### 2) window 메서드 이름으로 함수 이름을 지정하여 발생한 에러

[포스팅 확인하기](https://velog.io/@jaeyeong815/함수-이름을-생각하고-잘-짓자Please)

**요약** <br>
`useEffect`를 사용하여 앱이 처음 로딩됐을 때 로컬스토리지에 저장되어있는 데이터를 불러와 렌더링 하려고 하는 중 <br>
`Maximum call stack size exceeded` 에러 발생 <br>
코드에 `debugger`를 추가하여 확인해본 결과 자기 자신을 호출하며 무한 루프에 빠지고 있다는 것을 알게됨 <br>
`localStorage`라는 이름을 가진 객체를 `localStorageFunc`로 변경하여 해결 <br>

**수정 전**<br>
```jsx
export const localStorage = {
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: ...
};
```

**수정 후**<br>
```jsx
export const localStorageFunc = {
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: ...
};
```

## Results

### 1) 할 일 등록/수정/삭제
<br>

**등록**<br>
<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239034-35baf30e-9fe2-418e-9b45-21bd0f3c4e93.gif">

**수정**<br>
<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239150-76a7c608-b9de-434d-be7e-aea26b83be96.gif">

**삭제**<br>
<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239388-733c0f9c-34dc-4195-bc5e-c942f8accc06.gif">


### 2) 할 일 완료여부 체크
<br>

<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239433-22a4c51c-dfa1-4826-ab9b-d76beaeaab9d.gif">


### 3) 사용자 이름 입력
<br>

<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239489-1ae1dc22-47ef-4668-bf53-801cc9e90e0a.gif">


### 4) 타이머 시간 변경
<br>

<img width="500" alt="timer1" src="https://user-images.githubusercontent.com/85178602/210240278-4e9278d4-f866-4172-a06a-7d9b86fc3330.gif">


### 5) 타이머 시작/일시정지/초기화
<br>

<img width="500" alt="timer1" src="https://user-images.githubusercontent.com/85178602/210240291-7b3958f7-bb8b-4868-9e10-c84cfa771df2.gif">

