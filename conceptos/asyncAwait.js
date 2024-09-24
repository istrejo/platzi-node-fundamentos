async function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Hello ' + name);
      resolve(name);
      // reject('There is a error');
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

async function main() {
  const name = await hello('Carlos');
  await speak(name);
  await speak(name);
  await speak(name);
  await speak(name);
  await bye(name);
  console.log('Ending process');
}

main();
