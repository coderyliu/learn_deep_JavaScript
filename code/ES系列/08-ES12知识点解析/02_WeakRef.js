// ES12: WeakRef类
// WeakRef.prototype.deref:
// > 如果原对象没有销毁, 那么可以获取到原对象
// > 如果原对象已经销毁, 那么获取到的是undefined
const finalRegistry = new FinalizationRegistry((value) => {
  console.log("注册在finalRegistry的对象, 某一个被销毁", value);
});

let obj = { name: "liu" };
let info = new WeakRef(obj);

finalRegistry.register(obj, "obj");

// ?FinalizationRegistry的回调函数会执行
obj = null;

setTimeout(() => {
  console.log(info.deref());
  console.log(info.deref()?.name);
  console.log(info.deref() && info.deref().name);
}, 10000);
