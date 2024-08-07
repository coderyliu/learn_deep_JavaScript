var obj = {
  // 私有属性(js里面是没有严格意义的私有属性)
  _age: 18,
  _eating: function () {}
  // set age(value) {
  //   this._age = value
  // },
  // get age() {
  //   return this._age
  // }
};

// Object.defineProperties()会返回该对象
Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "why"
  },
  age: {
    // configurable: true,
    // enumerable: true,
    // get: function() {
    //   return this._age
    // },
    // set: function(value) {
    //   this._age = value
    // }
  }
});

// obj.age = 19
// console.log(obj.age)
obj.name = "liu";
Object.defineProperty(obj, "name", {
  configurable: true
});
delete obj.name;
console.log(obj);
