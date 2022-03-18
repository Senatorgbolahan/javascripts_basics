const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve('There is a count value.');
  } else {
    reject('There is no count value');
  }
});

// console.log(countValue);
countValue
  .then((a) => {
    console.log(a);
  })
  .catch((a) => {
    console.log(a);
  });
