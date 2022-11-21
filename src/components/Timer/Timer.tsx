import styled from 'styled-components';
import Today from './Today';

export default function Timer() {
  return (
    <TimerWrapper>
      <Today />
      {/* 토마토 색상 변하는 것 대신
      토마토가 점점 오른쪽으로 이동하여
      골인 지점에 도착하도록 하기 */}
      <img
        src="/logo.png"
        alt="임시로고"
        style={{ width: '300px', margin: '50px 0px' }}
      />
      <ClockWrapper>
        <MinuteWrapper>
          <p>25:00</p>
          <span>집중시간</span>
        </MinuteWrapper>
        <MinuteWrapper>
          <p>05:00</p>
          <span>휴식시간</span>
        </MinuteWrapper>
      </ClockWrapper>
      <TimeSetWrapper>
        <TimeSetBtn>25분 - 5분</TimeSetBtn>
        <TimeSetBtn>50분 - 10분</TimeSetBtn>
      </TimeSetWrapper>
      <ProgressBtn>시작하기</ProgressBtn>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #e9e9e9;
`;

const ClockWrapper = styled.div`
  display: flex;
  column-gap: 50px;
  margin: 30px 0;
`;

const MinuteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  p {
    font-size: 80px;
    font-weight: 800;
  }
  span {
    font-size: 50px;
    font-weight: 800;
  }
`;

const TimeSetWrapper = styled.div`
  display: flex;
  column-gap: 20px;

  margin-bottom: 30px;
`;

const TimeSetBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 10px;

  font-size: 20px;

  color: white;
  background-color: grey;
`;

const ProgressBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;

  font-size: 30px;
  font-weight: 500;

  color: white;
  background-color: #3aa694;
`;
