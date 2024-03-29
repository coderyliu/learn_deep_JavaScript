function throttle(fn, interval) {
  let lastTime = 0;

  function _throttle() {
    const nowTime = new Date().getTime();
    let remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      fn();
      lastTime = nowTime;
    }
  }

  return _throttle;
}
