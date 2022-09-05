// //첫번째 파라미터는 콜백함수
// setTimeout(()=> {
//   console.log("a");

//   setTimeout(()=> {
//     console.log("b");

//     setTimeout(()=> {
//       console.log("c");
//     }, 1000);

//   }, 1000);

// }, 1000);

setTimeout(()=> {
  console.log("a");
  
  setTimeout(()=> {
    console.log("b");
    
    setTimeout(()=> {
      console.log("c");

      setTimeout(()=> {
        console.log("d");
      }, 2000);

    }, 2000);

  }, 1000);


}, 3000);





