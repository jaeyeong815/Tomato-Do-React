import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Todos } from '../types/type';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const todoListState = atom<Todos[]>({
  key: 'todoListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const editTodoItemState = atom<{
  isEditing: boolean;
  editIndex: null | number;
  todo: Todos | null;
}>({
  key: 'editTodoItemState',
  default: {
    isEditing: false,
    editIndex: null,
    todo: { todo: '', checked: false },
  },
});
