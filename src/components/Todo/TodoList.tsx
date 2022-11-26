import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoListState, toDoState } from '../../recoil/todoState';
import { localStorageFunc } from '../../utils/localStorage';
import TodoItem from './TodoItem';
import { type Todos } from '../../types/type';

export default function TodoList() {
  const [todo, setTodo] = useState<Todos>({ todo: '', checked: false });
  const [todos, setTodos] = useRecoilState(toDoState);

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.todo.length === 0) {
      alert('할 일을 작성해주세요.');
      return;
    }

    setTodos((prev) => [...prev, todo]);
    localStorageFunc.setItem('todos', todos);
    setTodo({ todo: '', checked: false });
  };

  useEffect(() => {
    const todoList = localStorageFunc.getItem('todos');
    if (todoList && typeof todoList === 'object') {
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
      {todos.length !== 0 ? (
        <TodoItem />
      ) : (
        <StSpan>등록된 To-do가 없습니다!</StSpan>
      )}
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

const StSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: white;
  background-color: #3aa694;

  padding: 5px 5px;
`;
