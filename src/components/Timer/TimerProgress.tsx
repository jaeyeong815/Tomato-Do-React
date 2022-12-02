import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  focusTimerState,
  restTimerState,
  timerTimeState,
} from '../../recoil/timerState';
import styled from 'styled-components';
import { timeInfo } from '../../utils/timerTime';
import { timeCheckAndSet } from '../../utils/timeCheckAndSet';

function TimerProgress() {
  const [timerIng, setTimerIng] = useState(false);
  const timerTime = useRecoilValue(timerTimeState);
  const [focusTime, setFocusTime] = useRecoilState(focusTimerState);
  const [restTime, setRestTime] = useRecoilState(restTimerState);

  const timerStartHandle = () => {
    setTimerIng(true);
  };

  const timerPauseHandle = () => {
    setTimerIng(false);
  };

  const timerResetHandle = () => {
    setTimerIng(false);
    timeCheckAndSet(timerTime, timeInfo, setFocusTime, setRestTime);
  };

  function Timer() {
    useEffect(() => {
      const timer = setInterval(() => {
        if (focusTime !== 0) {
          setFocusTime((prev) => (prev -= 1));
        }
        if (focusTime === 0 && restTime !== 0) {
          setRestTime((prev) => (prev -= 1));
        }
        if (restTime === 0) {
          setTimerIng(false);
          timeCheckAndSet(timerTime, timeInfo, setFocusTime, setRestTime);
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return (
      <BtnWrapper>
        <ProgressBtn onClick={timerPauseHandle}>일시정지</ProgressBtn>
        <ProgressBtn onClick={timerResetHandle}>처음으로</ProgressBtn>
      </BtnWrapper>
    );
  }

  return (
    <>
      {timerIng ? (
        <Timer />
      ) : (
        <ProgressBtn onClick={timerStartHandle}>시작하기</ProgressBtn>
      )}
    </>
  );
}

export default TimerProgress;

const ProgressBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;

  font-size: 30px;
  font-weight: 500;

  color: white;
  background-color: #3aa694;
`;

const BtnWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;
