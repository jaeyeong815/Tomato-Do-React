import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Todos } from '../types/type';

const { persistAtom } = recoilPersist({
  key: 'todoList',
  storage: localStorage,
});

export const todoListState = atom<Todos[]>({
  key: 'todoListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
