import styled from 'styled-components';
import TodoList from './TodoList';
import User from './User';

export default function Todo() {
  return (
    <TodoWrapper>
      <User />
      <TodoList />
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #3aa694;
`;
