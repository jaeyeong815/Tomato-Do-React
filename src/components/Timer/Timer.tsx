import styled from 'styled-components';
import Today from './Today';
import TimerTimeSet from './TimerTimeSet';
import TimerTime from './TimerTime';
import TimerProgress from './TimerProgress';

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
      <TimerTime />
      <TimerTimeSet />
      <TimerProgress />
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
