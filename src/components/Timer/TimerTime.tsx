import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { focusTimerState, restTimerState } from '../../recoil/timerState';
import styled from 'styled-components';
import { timerFormatting } from '../../utils/timerFormatting';

interface Timer {
  min: string;
  sec: string;
}

function TimerTime() {
  const focusTime = useRecoilValue(focusTimerState);
  const restTime = useRecoilValue(restTimerState);
  const [focusTimeFormat, setFocusTimeFormat] = useState<Timer>({
    min: '25',
    sec: '00',
  });
  const [restTimeFormat, setRestTimeFormat] = useState<Timer>({
    min: '05',
    sec: '00',
  });

  useEffect(() => {
    setFocusTimeFormat(timerFormatting(focusTime));
    setRestTimeFormat(timerFormatting(restTime));
  }, [focusTime]);
  return (
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
  );
}

export default TimerTime;

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
