import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { localStorageFunc } from '../../utils/localStorage';
import { type Todos } from '../../types/type';

export default function TodoList() {
  const [todo, setTodo] = useState<Todos>({ todo: '', checked: false });
  const [todos, setTodos] = useState<Todos[]>([]);

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onCheckedHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const checkedIndex = parseInt(id);

    todos.forEach((todo, index) => {
      if (index === checkedIndex) todo.checked = checked;
    });
    localStorageFunc.setItem('todos', todos);
  };

  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const copyTodos = [...todos];
    copyTodos.push(todo);

    setTodos(copyTodos);
    localStorageFunc.setItem('todos', copyTodos);

    setTodo({ todo: '', checked: false });
  };

  useEffect(() => {
    const todoList = localStorageFunc.getItem('todos');
    if (typeof todoList === 'object') {
      setTodos(todoList);
    }
  }, []);

  return (
    <TodoListWrapper>
      <StTitle>할 일 목록</StTitle>
      <StInputWrapper onSubmit={onSubmitHandle}>
        <StInput
          type="text"
          placeholder="할 일을 입력해주세요."
          name="todo"
          value={todo?.todo}
          onChange={onChangeHandle}
        />
        <StSubmitBtn type="submit">등록</StSubmitBtn>
      </StInputWrapper>
      <ul>
        {todos &&
          todos.map((todo, idx) => (
            <StList key={idx}>
              <StCheckbox
                type="checkbox"
                id={String(idx)}
                onChange={onCheckedHandle}
              />
              <label htmlFor={String(idx)}>{todo.todo}</label>
            </StList>
          ))}
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
  font-weight: 800;
  color: #3aa694;

  margin-bottom: 10px;
`;

const StInputWrapper = styled.form`
  display: flex;
  align-items: center;

  margin-bottom: 50px;
`;

const StInput = styled.input`
  border: none;
  border-bottom: 2px solid grey;
  outline: none;

  margin-right: 10px;
  padding: 5px 5px;
  width: 500px;
  height: 40px;

  font-size: 20px;
`;

const StSubmitBtn = styled.button`
  padding: 10px 10px;
  border: none;
  border-radius: 5px;

  word-break: keep-all;
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
