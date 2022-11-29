import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { todoListState, editTodoItemState } from '../../recoil/todoState';
import TodoItemEdit from './TodoItemEdit';
import { localStorageFunc } from '../../utils/localStorage';

export default function TodoItem() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [editTodoItem, setEditTodoItem] = useRecoilState(editTodoItemState);

  const onCheckedHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const checkedIndex = parseInt(id);

    const updatedCheckedTodos = todos.map((todo, index) => {
      if (index === checkedIndex) {
        return { ...todo, checked: checked };
      }
      return { ...todo };
    });
    setTodos(updatedCheckedTodos);
    localStorageFunc.setItem('todos', updatedCheckedTodos);
  };

  const todoEditHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const editTodoIndex = parseInt(e.currentTarget.id);
    setEditTodoItem({
      isEditing: true,
      editIndex: editTodoIndex,
      todo: todos[editTodoIndex],
    });
  };

  const todoDeleteHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteTodoIndex = parseInt(e.currentTarget.id);
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const deletedTodos = todos.filter(
        (_, index) => index !== deleteTodoIndex
      );
      setTodos(deletedTodos);
      localStorageFunc.setItem('todos', deletedTodos);
    }
  };

  return editTodoItem.isEditing ? (
    <TodoItemEdit />
  ) : (
    <ul>
      {todos &&
        todos.map((todo, idx) => (
          <StList key={idx}>
            <div className="input">
              <StCheckbox
                type="checkbox"
                id={String(idx)}
                checked={todo.checked}
                onChange={onCheckedHandle}
              />
              <label htmlFor={String(idx)}>{todo.content}</label>
            </div>
            <div className="button">
              <StSubmitBtn
                type="button"
                bgColor="edit"
                id={String(idx)}
                onClick={todoEditHandle}
              >
                수정
              </StSubmitBtn>
              <StSubmitBtn
                type="button"
                bgColor="del"
                id={String(idx)}
                onClick={todoDeleteHandle}
              >
                삭제
              </StSubmitBtn>
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

const StSubmitBtn = styled.button<{ bgColor: string }>`
  padding: 10px 10px;
  border: none;
  border-radius: 5px;

  background-color: ${(prop) =>
    prop.bgColor === 'edit' ? '#ffae00' : '#EB6440'};
  color: white;
  word-break: keep-all;
`;
