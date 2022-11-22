import { atom } from 'recoil';
import { Todos } from '../types/type';

export const todoListState = atom<Todos[]>({
  key: 'todoListState',
  default: [],
});
