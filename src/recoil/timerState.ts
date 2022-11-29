import { atom } from 'recoil';

export const focusTimerState = atom({
  key: 'focusTimerState',
  default: 1500,
});

export const restTimerState = atom({
  key: 'restTimerState',
  default: 300,
});
