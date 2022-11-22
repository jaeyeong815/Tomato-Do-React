import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { localStorageFunc } from '../../utils/localStorage';

export default function User() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const keyDownHandle = ({ key }: { key: string }) => {
    if (key === 'Enter' && userName) {
      localStorageFunc.setItem('name', userName);
      setIsEditing(false);
    }
    return;
  };

  useEffect(() => {
    const userData = localStorageFunc.getItem('name');
    if (userData) {
      setUserName(userData);
      return;
    }
    setIsEditing(true);
  }, []);

  return (
    <UserWrapper>
      {/* <StImg /> */}
      {isEditing ? (
        <div style={{ display: 'block' }}>
          <StInput
            placeholder="당신의 이름은?"
            name="name"
            value={userName}
            onChange={onChangeHandle}
            onKeyDown={keyDownHandle}
          />
          <p>이름 입력 후 엔터</p>
        </div>
      ) : (
        <StSpan>🍅 {userName}님 안녕하세요!</StSpan>
      )}
    </UserWrapper>
  );
}

const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 20px 0;
`;
const StImg = styled.div`
  margin-right: 10px;
  width: 70px;
  height: 70px;

  border-radius: 50px;

  background-color: white;
`;

const StSpan = styled.span`
  font-size: 25px;
  font-weight: 500;
`;

const StInput = styled.input`
  border: none;
  border-bottom: 2px solid;
  outline: none;
  background-color: transparent;

  padding: 5px 5px;

  font-size: 25px;
`;
