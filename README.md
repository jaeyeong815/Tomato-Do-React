# π Tomato-Do React + TypeScript ver.
[1. ποΈ νλ‘μ νΈ μ€λͺ](#description) <br>
[2. π νλ‘μ νΈ μκ°](#about-project) <br>
[3. π« νΈλ¬λΈ μν](#trouble-shotting) <br>
[4. π₯οΈ κ΅¬ν νλ©΄](#results)

## Description

**λ½λͺ¨λλ‘ νμ΄λ¨Έ + Todo κ΄λ¦¬**  <br>
Vanilla JSλ‘ κ°λ°νλ ν¬λλ¦¬μ€νΈ+λ½λͺ¨λλ‘ νμ΄λ¨Έ νλ‘μ νΈλ₯Ό React+TSλ‘ κ°μ νμμ΅λλ€.

> 2022λ 11μ (μ½ 3μ£Ό) <br>
> κ°μΈ νλ‘μ νΈ <br>
> μλΉμ€ λ§ν¬ : [λ°λ‘κ°κΈ°]()

<img width="600" alt="main" src="https://user-images.githubusercontent.com/85178602/210236089-69482a72-6f5a-4a90-9877-140b3b94b32e.png">


## About Project

### Skill

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">  <img src="https://img.shields.io/badge/Recoil-3578e5?style=for-the-badge&logo=Revolut&logoColor=white">  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

### Function

- **Todo**
    - `Recoil`μ μ¬μ©νμ¬ μ¬μ©μκ° μλ ₯ν ν  μΌμ `Local Storage`μ μ μ₯νμ¬ κ΄λ¦¬ <br>

      - ν  μΌ λ±λ‘/μμ /μ­μ /μλ£μ¬λΆ μ²΄ν¬

    - `recoil-persist` λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νμ¬ μλ‘κ³ μΉ¨ μ `Local Storage`μ μ μ₯λμ΄μλ ν  μΌλ€μ λΆλ¬μ¬ μ μλλ‘ κ΅¬ν
    - μ¬μ©μμ μ΄λ¦μ μλ ₯λ°μ `Local Storage`μ μ μ₯ ν μΈμΏλ§ μΆλ ₯

- **Timer**
    - νμ΄λ¨Έ μμ μ  λ²νΌμ ν΄λ¦­νμ¬ μ§μ€μκ°, ν΄μμκ° μ¬μ΄ν΄ μ€μ  <br>

      - μ§μ€μκ° 25λΆ - ν΄μμκ° 5λΆ / μ§μ€μκ° 50λΆ - ν΄μμκ° 10λΆ

    - νμ΄λ¨Έ μμ/μΌμμ μ§/μ΄κΈ°ν κΈ°λ₯ κ΅¬ν
    - μλ¨μ νμ¬ λ μ§ νμ

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

### 1) TypeScript Type μλ¬

[ν¬μ€ν νμΈνκΈ°]()

**μμ½** <br>
λ‘μ»¬μ€ν λ¦¬μ§μ μ μ₯ λ ν  μΌμ λΆλ¬μ νλ©΄μ λ λλ§νλ μ€ `type` μλ¬ λ°μ <br>
`νμ κ°λ`λ₯Ό νμ©νμ¬ μλ¬ ν΄κ²°

**μμ  μ **<br>
```jsx
export interface Todos {
  todo: string;
  checked: boolean;
}

const [todoItem, setTodoItem] = useState<string>('')
const [Todos, setTodos] = useState<Todos[] | undefined>(); // μμΈ

useEffect(() => {
  const todoList = localStorageFunc.getItem('todo');
  setTodos(todoList); // errorλ°μ 1
}, []);

// λ‘μ»¬μ€ν λ¦¬μ§ utilν¨μ νμΌ
getItem: (key: string): string | Todos[] | undefined => {
  return JSON.parse(localStorage.getItem(key));
}
```

**μμ  ν**<br>
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

// λ‘μ»¬μ€ν λ¦¬μ§ utilν¨μ νμΌ
getItem: (key: string): string | Todos[] | undefined => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
}
```

### 2) window λ©μλ μ΄λ¦μΌλ‘ ν¨μ μ΄λ¦μ μ§μ νμ¬ λ°μν μλ¬

[ν¬μ€ν νμΈνκΈ°](https://velog.io/@jaeyeong815/ν¨μ-μ΄λ¦μ-μκ°νκ³ -μ-μ§μPlease)

**μμ½** <br>
`useEffect`λ₯Ό μ¬μ©νμ¬ μ±μ΄ μ²μ λ‘λ©λμ λ λ‘μ»¬μ€ν λ¦¬μ§μ μ μ₯λμ΄μλ λ°μ΄ν°λ₯Ό λΆλ¬μ λ λλ§ νλ €κ³  νλ μ€ <br>
`Maximum call stack size exceeded` μλ¬ λ°μ <br>
μ½λμ `debugger`λ₯Ό μΆκ°νμ¬ νμΈν΄λ³Έ κ²°κ³Ό μκΈ° μμ μ νΈμΆνλ©° λ¬΄ν λ£¨νμ λΉ μ§κ³  μλ€λ κ²μ μκ²λ¨ <br>
`localStorage`λΌλ μ΄λ¦μ κ°μ§ κ°μ²΄λ₯Ό `localStorageFunc`λ‘ λ³κ²½νμ¬ ν΄κ²° <br>

**μμ  μ **<br>
```jsx
export const localStorage = {
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: ...
};
```

**μμ  ν**<br>
```jsx
export const localStorageFunc = {
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: ...
};
```

## Results

### 1) ν  μΌ λ±λ‘/μμ /μ­μ 
<br>

**λ±λ‘**<br>
<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239034-35baf30e-9fe2-418e-9b45-21bd0f3c4e93.gif">

**μμ **<br>
<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239150-76a7c608-b9de-434d-be7e-aea26b83be96.gif">

**μ­μ **<br>
<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239388-733c0f9c-34dc-4195-bc5e-c942f8accc06.gif">


### 2) ν  μΌ μλ£μ¬λΆ μ²΄ν¬
<br>

<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239433-22a4c51c-dfa1-4826-ab9b-d76beaeaab9d.gif">


### 3) μ¬μ©μ μ΄λ¦ μλ ₯
<br>

<img width="500" alt="todo1" src="https://user-images.githubusercontent.com/85178602/210239489-1ae1dc22-47ef-4668-bf53-801cc9e90e0a.gif">


### 4) νμ΄λ¨Έ μκ° λ³κ²½
<br>

<img width="500" alt="timer1" src="https://user-images.githubusercontent.com/85178602/210240278-4e9278d4-f866-4172-a06a-7d9b86fc3330.gif">


### 5) νμ΄λ¨Έ μμ/μΌμμ μ§/μ΄κΈ°ν
<br>

<img width="500" alt="timer1" src="https://user-images.githubusercontent.com/85178602/210240291-7b3958f7-bb8b-4868-9e10-c84cfa771df2.gif">

