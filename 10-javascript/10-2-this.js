// 부르는 곳에 따라서 this는 달라진다.
console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
// const caller = counter.increase.bind(counter);
caller();

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
