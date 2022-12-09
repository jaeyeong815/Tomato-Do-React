import styled from 'styled-components';

function Help() {
  return (
    <StTogle>
      <p>뽀모도로🍅 란?</p>
      <br />
      <p>
        타이머를 이용하여 25분간 집중해 일을 한 다음 <br />
        5분간 휴식하는 시간 관리 방법입니다.
      </p>
      <br />
      <p>
        Tomato-do는 50분-10분 타이머도 있어요 😄 <br />
        본인에게 맞는 타이머로 소중한 시간을 관리해보세요!
      </p>
    </StTogle>
  );
}

export default Help;

export const StTogle = styled.div`
  padding: 20px 30px;
  background-color: white;
  border-radius: 5px;

  box-shadow: 2px 2px 10px 1px gray;
`;
