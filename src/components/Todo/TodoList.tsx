import styled from 'styled-components';

export default function TodoList() {
  return (
    <TodoListWrapper>
      <StTitle>할 일 목록</StTitle>
      <StInputWrapper>
        <StInput type="text" placeholder="할 일을 입력해주세요." />
        <StSubmitBtn type="submit" value="등록" />
      </StInputWrapper>
      <ul>
        <StList>
          <StCheckbox type="checkbox" id="todo_1" />
          <label htmlFor="todo_1">자바스크립트 공부</label>
        </StList>
        <StList>
          <StCheckbox type="checkbox" id="todo_2" />
          <label htmlFor="todo_2">리액트 공부</label>
        </StList>
        <StList>
          <StCheckbox type="checkbox" id="todo_3" />
          <label htmlFor="todo_3">타입스크립트 공부</label>
        </StList>
      </ul>
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.div`
  padding: 20px 20px;
  width: 90%;
  min-height: 200px;
  border-radius: 10px;

  background-color: white;
`;

const StTitle = styled.p`
  font-size: 30px;
  font-weight: 500;

  margin-bottom: 10px;
`;

const StInputWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 50px;
`;

const StInput = styled.input`
  border: none;
  border-bottom: 2px solid grey;

  margin-right: 10px;
  padding: 5px 5px;
  width: 500px;
  height: 40px;

  font-size: 20px;
`;

const StSubmitBtn = styled.input`
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
`;

const StList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    cursor: pointer;
  }
`;

const StCheckbox = styled.input`
  appearance: none;
  border: grey 2px solid;
  border-radius: 5px;
  padding: 10px 10px;
  margin-right: 10px;

  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;
