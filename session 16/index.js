// function order() {
//   check();
//   prepare();
//   serve();
// }

// const { setBlockTracking } = require("vue");

// function prepare() {
//   setTimeout(() => {
//     console.log("Preparing your ice cream");
//   }, 2000);
// }

// function check() {
//   setTimeout(() => {
//     console.log("Checking stock");
//   }, 3000);
// }

// function serve() {
//   setTimeout(() => {
//     console.log("Get your ice cream");
//   }, 1000);
// }

// CallBacks methods that lead to callback hell
// function order() {
//   setTimeout(() => {
//     console.log("checking stock");
//     setTimeout(() => {
//       console.log("preparing");
//       setTimeout(() => {
//         console.log("serve");
//       }, 1000);
//     }, 2000);
//   }, 3000);
// }
// order();

// Promise

// const SHOPOPEN = true;

// function PromiseMaker(time, action) {
//   return new Promise((resolve, reject) => {
//     if (SHOPOPEN) {
//       setTimeout(action, time);
//     } else {
//       reject("Shop is close");
//     }
//   });

// function order() {
//   PromiseMaker(3000, () => {
//     return console.log("checking stock");
//   })
//     .then(() => {
//       return PromiseMaker(2000, () => {
//         console.log("preparing");
//       });
//     })
//     .then(() => {
//       return PromiseMaker(1000, () => {
//         console.log("get your ice cream");
//       });
//     })
//     .catch((error) => console.log(error))
//     .finally(() => console.log("thanks for visiting"));
// }

// order();

// fetch("https://ap.quotable.io/random")
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonresponse) => {
//     document.write(`<h1>${jsonresponse.content}</h1>`);
//   })
//   .catch((error) => {
//     console.log(error);
//     alert(error);
//   });

// function promise(action, time = 1000) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(action());
//     }, time);
//   });
// }

// promise(() => {
//   console.log("Checking stock ...");
// }, 2000)
//   .then(() => {
//     promise(() => {
//       console.log("step 2");
//     }, 3000);
//   })
//   .then(() => {
//     return promise(() => {
//       console.log("step 3");
//     }, 2000);
//   });

async function getData() {
  try {
    const response = await fetch("https://ai.quotable.io/random");
    console.log(response);
    if (response.statusText == "OK") {
      const data = await response.json();
      document.write(`<h1>${data.content}</h1>`);
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

getData();
