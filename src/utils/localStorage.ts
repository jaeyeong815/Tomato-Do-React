export const localStorageFunc = {
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key: string): string | undefined => {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return undefined;
  },
};
