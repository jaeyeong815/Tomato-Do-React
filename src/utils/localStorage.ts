import { type Todos } from '../types/type';

export const localStorageFunc = {
  setItem: (key: string, value: string | Todos[]) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key: string): string | Todos[] | null => {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  },
  clear: () => {
    localStorage.clear;
  },
};
