"use strict";

// 템플릿 리터럴
var d1 = new Date();
var name = "홍길동";
var r1 = name + " \uB2D8\uC5D0\uAC8C " + d1.toDateString() + "\uC5D0 \uC5F0\uB77D\uD588\uB2E4.";
console.log(r1);

var product = "아이폰 X";
var price = 1090000;
var str = product + "\uC758 \uAC00\uACA9\uC740 \n          " + price + "\uC6D0 \uC785\uB2C8\uB2E4.";
console.log(str);