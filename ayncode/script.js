console.log("hi");

// setTimeout(() => {
//   console.log("timeout");
// }, 500);
// let result = 0;
// for (let index = 0; index < 100000000; index++) {
//   result += index;
// }

// console.log(result);
track();
console.log("bye");

function track() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      console.log(posData);
    },
    (error) => {
      console.log(error);
    }
  );
  console.log("Getting position...");
}
