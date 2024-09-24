function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Hello ' + name);
      // resolve(name);
      reject('There is a error');
    }, 1500);
  });
}

function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('BLABLBLABLALBAL');
      resolve(name);
    }, 1000);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('good bye ', name);
      resolve();
    }, 1000);
  });
}

function conversation(name, times, callback) {
  if (times > 0) {
    speak(function () {
      conversation(name, --times, callback);
    });
  } else {
    bye(name, callback);
  }
}

console.log('Process is starting');

hello('Carlos')
  .then(speak)
  .then(speak)
  .then(speak)
  .then(bye)
  .then((name) => {
    console.log('Process is done');
  })
  .catch((err) => console.log(err));

// });
