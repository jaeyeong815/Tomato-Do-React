import { atom } from 'recoil';
import { timeInfo } from '../utils/timerTime';

export const timerTimeState = atom({
  key: 'timerTimeState',
  default: {
    twentyFive: true,
    fifty: false,
  },
});

export const focusTimerState = atom({
  key: 'focusTimerState',
  default: timeInfo.twentyFive.focusTime,
});

export const restTimerState = atom({
  key: 'restTimerState',
  default: timeInfo.twentyFive.restTime,
});
