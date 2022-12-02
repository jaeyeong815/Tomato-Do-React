import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  focusTimerState,
  restTimerState,
  timerTimeState,
} from '../../recoil/timerState';
import { timeInfo } from '../../utils/timerTime';
import styled from 'styled-components';

enum FocusTime {
  twentyFive = '25분 - 5분',
  fifty = '50분 - 10분',
}

function FocusTimeSet() {
  const setFocusTime = useSetRecoilState(focusTimerState);
  const setRestTime = useSetRecoilState(restTimerState);
  const [clickedBtn, setClickedBtn] = useRecoilState(timerTimeState);

  const focusTimeHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name === FocusTime.twentyFive) {
      setFocusTime(timeInfo.twentyFive.focusTime);
      setRestTime(timeInfo.twentyFive.restTime);
      setClickedBtn({ twentyFive: true, fifty: false });
      return;
    }
    setFocusTime(timeInfo.fifty.focusTime);
    setRestTime(timeInfo.fifty.restTime);
    setClickedBtn({ twentyFive: false, fifty: true });
  };

  return (
    <TimeSetWrapper>
      <TimeSetBtn
        name={FocusTime.twentyFive}
        time={clickedBtn.twentyFive}
        onClick={focusTimeHandle}
      >
        {FocusTime.twentyFive}
      </TimeSetBtn>
      <TimeSetBtn
        name={FocusTime.fifty}
        time={clickedBtn.fifty}
        onClick={focusTimeHandle}
      >
        {FocusTime.fifty}
      </TimeSetBtn>
    </TimeSetWrapper>
  );
}

export default FocusTimeSet;

const TimeSetWrapper = styled.div`
  display: flex;
  column-gap: 20px;

  margin-bottom: 30px;
`;

const TimeSetBtn = styled.button<{ time: boolean }>`
  border: none;
  border-radius: 5px;
  padding: 10px 10px;

  font-size: 20px;

  background-color: ${(props) => (props.time ? 'grey' : '#ffffff')};
  color: ${(props) => (props.time ? 'white' : null)};
`;
