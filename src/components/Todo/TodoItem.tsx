import styled from 'styled-components';
import { localStorageFunc } from '../../utils/localStorage';
import { type Todos } from '../../types/type';

export default function TodoItem({ todos }: { todos: Todos[] }) {
  const onCheckedHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const checkedIndex = parseInt(id);

    todos.forEach((todo, index) => {
      if (index === checkedIndex) todo.checked = checked;
    });
    localStorageFunc.setItem('todos', todos);
  };

  return (
    <ul>
      {todos &&
        todos.map((todo, idx) => (
          <StList key={idx}>
            <div className="input">
              <StCheckbox
                type="checkbox"
                id={String(idx)}
                onChange={onCheckedHandle}
              />
              <label htmlFor={String(idx)}>{todo.todo}</label>
            </div>
            <div className="button">
              <StSubmitBtn>수정</StSubmitBtn>
              <StSubmitBtn>삭제</StSubmitBtn>
            </div>
          </StList>
        ))}
    </ul>
  );
}

const StList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
  }

  label {
    cursor: pointer;
  }

  button {
    margin-left: 5px;
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

const StSubmitBtn = styled.button`
  padding: 10px 10px;
  border: none;
  border-radius: 5px;

  word-break: keep-all;
`;
