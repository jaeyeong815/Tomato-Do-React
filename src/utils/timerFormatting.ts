export const timerFormatting = (time: number) => {
  return {
    min: String(Math.floor(time / 60)).padStart(2, '0'),
    sec: String(time % 60).padStart(2, '0'),
  };
};
