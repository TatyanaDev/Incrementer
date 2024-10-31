export const data = {
  maxValue: 10,
  currentValue: 0,
};

let changeDataCallback = function () {};

export function setChangeDataCallback(newCallback) {
  changeDataCallback = newCallback;
}

export function increment() {
  if (data.currentValue < data.maxValue) {
    data.currentValue += 1;
  }

  changeDataCallback();
}

export function reset() {
  data.currentValue = 0;

  changeDataCallback();
}
