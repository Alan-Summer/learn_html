'use strict';

var  xiaoming={
    name:'李明',
    age:12
};


function a1(a,b,...rest) {
    console.log('a: '+a)
    console.log("b: "+b)
    console.log(rest)

}


function add(x, y, f) {
    return f(x) + f(y);
}
var x = add(-5, 6, Math.abs); // 11
console.log(x);