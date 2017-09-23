"use strict";

// 화살표 함수

// 세 경우 모두 동일한 값
var test1 = function test1(a, b) {
  return a + b;
};

var test2 = function test2(a, b) {
  return a + b;
};

var test3 = function test3(a, b) {
  return a + b;
};

// 기존의 함수 사용 시

function Person(name, yearCount) {
  this.name = name;
  this.age = 0;
  var incrAge = function incrAge() {
    this.age++;
  };

  // this.age는 0이 출력 
  // for (var i = 1; i <= yearCount; i++) {
  //   incrAge();
  // }

  // this.age는 20이 출력 (메소드 빌려쓰기 - apply)
  // for (var i = 1; i <= yearCount; i++) {
  //   incrAge.apply(this);
  // }

  // 바깥영역 this를 변수에 할당
  var outerThis = this;
  var incrAge = function incrAge() {
    outerThis.age++;
  };
  for (var i = 1; i <= yearCount; i++) {
    incrAge();
  }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age);