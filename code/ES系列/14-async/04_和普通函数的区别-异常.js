async function foo() {
  console.log("foo function start~");

  console.log("中间代码~");

  // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
  throw new Error("error message");

}

// 异步函数的返回值一定是一个Promise
// const p=foo()
foo().catch((err) => {
  console.log("coderwhy err:", err);
});
// console.log(p)

console.log("后续还有代码~~~~~");
