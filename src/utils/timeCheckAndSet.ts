import { SetterOrUpdater } from 'recoil';

/**
 * 현재 시간 설정에 따라 타이머 리셋 시 되돌아갈 시간을 구하는 함수
 * @param timerTime 현재 설정 된 타이머 집중, 휴식 시간
 * @param timeInfo 상수화 된 타이머 별 시간
 * @param setFocus 집중시간 설정하는 함수
 * @param setRest 휴식시간 설정하는 함수
 * @returns void
 */
export const timeCheckAndSet = (
  timerTime: { twentyFive: boolean; fifty: boolean },
  timeInfo: {
    twentyFive: { focusTime: number; restTime: number };
    fifty: { focusTime: number; restTime: number };
  },
  setFocus: SetterOrUpdater<number>,
  setRest: SetterOrUpdater<number>
) => {
  if (timerTime.twentyFive) {
    setFocus(timeInfo.twentyFive.focusTime);
    setRest(timeInfo.twentyFive.restTime);
    return;
  }
  setFocus(timeInfo.fifty.focusTime);
  setRest(timeInfo.fifty.restTime);
};
