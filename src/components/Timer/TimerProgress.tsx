import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  focusTimerState,
  restTimerState,
  timerTimeState,
} from '../../recoil/timerState';
import { useEffect, useState } from 'react';
import { timeInfo } from '../../utils/timerTime';

function TimerProgress() {
  const [timerIng, setTimerIng] = useState(false);
  const timerTime = useRecoilValue(timerTimeState);
  const setFocusTime = useSetRecoilState(focusTimerState);
  const setRestTime = useSetRecoilState(restTimerState);

  const timerStartHandle = () => {
    setTimerIng(true);
  };

  const timerPauseHandle = () => {
    setTimerIng(false);
  };

  const timerResetHandle = () => {
    setTimerIng(false);
    if (timerTime.twentyFive) {
      setFocusTime(timeInfo.twentyFive.focusTime);
      setRestTime(timeInfo.twentyFive.restTime);
      return;
    }
    setFocusTime(timeInfo.fifty.focusTime);
    setRestTime(timeInfo.fifty.restTime);
  };

  function Timer() {
    useEffect(() => {
      const timer = setInterval(() => {
        setFocusTime((prev) => (prev -= 1));
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
