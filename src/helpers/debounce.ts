export const debounce = (func: Function, time: number = 500) => {
  let timer: any;
  return function <T>(...args: T[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(null, args);
    }, time);
  };
};
