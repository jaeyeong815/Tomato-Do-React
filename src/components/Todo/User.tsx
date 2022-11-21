import styled from 'styled-components';

export default function User() {
  return (
    <UserWrapper>
      <StImg />
      <StSpan>000님 안녕하세요!</StSpan>
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
