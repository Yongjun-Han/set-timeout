// console.log("a")

// setTimeout(() => {
//   console.log("b");
  
// }, 0);
// console.log("c")


console.log("a")

setTimeout(() => {
  console.log("b");
}, 10);

setTimeout(() => {
  console.log("c");
}, 0);

//a c b 
// 자바스크립트는 eventloop(이벤트루프) setTimeout과 setInterval을 만나면 별도로 관리하고 이벤트 루프는 먼저 실행된 것을 찾는다 . (비동기)