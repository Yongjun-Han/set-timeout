let num = 0;
const a = setInterval(() => {
  num++
  console.log(num);
  if(num === 60) {
    clearInterval(a);
  }
}, 16);