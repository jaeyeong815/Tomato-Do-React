import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { editTodoItemState, todoListState } from '../../recoil/todoState';

function TodoItemEdit() {
  const [editTodoItem, setEditTodoItem] = useRecoilState(editTodoItemState);
  const [todos, setTodos] = useRecoilState(todoListState);
  const [editTodoText, setEditTodoText] = useState<string>('');

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodoText(e.target.value);
  };

  const todoEditHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (editTodoText.length === 0) {
      alert('할 일을 작성해주세요!');
      return;
    }
    const editTodos = todos.map((todo, index) => {
      if (index === editTodoItem.editIndex) {
        return { ...todo, todo: editTodoText };
      }
      return { ...todo };
    });

    setTodos(editTodos);
    setEditTodoItem({
      isEditing: false,
      editIndex: null,
      todo: { todo: '', checked: false },
    });
  };

  const editCancleHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditTodoItem({
      isEditing: false,
      editIndex: null,
      todo: { todo: '', checked: false },
    });
  };

  return (
    <TodoItemEditWrapper>
      <StInput
        type="text"
        placeholder={editTodoItem.todo?.todo}
        value={editTodoText}
        onChange={onChangeHandle}
      />
      <div className="button">
        <StSubmitBtn
          type="button"
          id={String(editTodoItem.editIndex)}
          onClick={todoEditHandle}
        >
          수정
        </StSubmitBtn>
        <StSubmitBtn
          type="button"
          id={String(editTodoItem.editIndex)}
          onClick={editCancleHandle}
        >
          취소
        </StSubmitBtn>
      </div>
    </TodoItemEditWrapper>
  );
}

export default TodoItemEdit;

const TodoItemEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StInput = styled.input`
  border: 2px solid grey;
  border-radius: 5px;
  outline: none;

  padding: 5px 5px;
  width: 400px;
  height: 40px;

  font-size: 20px;
`;

const StSubmitBtn = styled.button`
  padding: 10px 10px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;

  word-break: keep-all;
`;
