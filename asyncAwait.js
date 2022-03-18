// async function example and promise

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Promise resolved');
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log('Just passing');
}

// calling the async function
asyncFunc();
