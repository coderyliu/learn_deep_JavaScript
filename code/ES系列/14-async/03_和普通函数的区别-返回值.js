console.log("----start----");
async function foo() {
  console.log("foo function start~");

  console.log("中间代码~");

  console.log("foo function end~");

  // 1.返回一个值
  // return 11

  // 2.返回thenable
  // return {
  //   then: function(resolve, reject) {
  //     resolve("hahahah")
  //   }
  // }

  // 3.返回Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("hehehehe");
    }, 2000);
  });
}
// 异步函数的返回值一定是一个Promise
const promise = foo();

console.log("----end----");
console.log(promise);
promise.then((res) => {
  console.log("promise then function exec:", res);
});

// const p=new Promise((resolve,reject)=>{

// })
// console.log(p)
