import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { focusTimerState, restTimerState } from '../../recoil/timerState';
import styled from 'styled-components';
import Today from './Today';
import TimerTimeSet from './TimerTimeSet';
import { timerFormatting } from '../../utils/timerFormatting';

export default function Timer() {
  const focusTime = useRecoilValue(focusTimerState);
  const restTime = useRecoilValue(restTimerState);
  const [focusTimeFormat, setFocusTimeFormat] = useState<{
    min: string;
    sec: string;
  }>({
    min: '25',
    sec: '00',
  });
  const [restTimeFormat, setRestTimeFormat] = useState<{
    min: string;
    sec: string;
  }>({
    min: '05',
    sec: '00',
  });

  useEffect(() => {
    setFocusTimeFormat(timerFormatting(focusTime));
    setRestTimeFormat(timerFormatting(restTime));
  }, [focusTime]);

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
          <p>
            {focusTimeFormat.min}:{focusTimeFormat.sec}
          </p>
          <span>집중시간</span>
        </MinuteWrapper>
        <MinuteWrapper>
          <p>
            {restTimeFormat.min}:{restTimeFormat.sec}
          </p>
          <span>휴식시간</span>
        </MinuteWrapper>
      </ClockWrapper>
      <TimerTimeSet />
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

const ProgressBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;

  font-size: 30px;
  font-weight: 500;

  color: white;
  background-color: #3aa694;
`;
