function hello(name, myCallback) {
  setTimeout(() => {
    console.log('Hello ' + name);
    myCallback(name);
  }, 1500);
}

function speak(callbackSpeak) {
  setTimeout(() => {
    console.log('BLABLBLABLALBAL');
    callbackSpeak();
  }, 1000);
}

function goodBye(name, otherCallback) {
  setTimeout(() => {
    console.log('good bye ', name);
    otherCallback();
  }, 1000);
}

function conversation(name, times, callback) {
  if (times > 0) {
    speak(function () {
      conversation(name, --times, callback);
    });
  } else {
    goodBye(name, callback);
  }
}

console.log('Process starting...');
hello('Pedro', function (name) {
  conversation(name, 10, function () {
    console.log('process ending...');
  });
});
// hello('Carlos', function (name) {
//   goodBye(name, function () {
//     console.log('Done');
//   });
// });
// hello('Alejandro', function (name) {
//   speak(function () {
//     speak(function () {
//       speak(function () {
//         goodBye(name, function () {
//           console.log('Process ending');
//         });
//       });
//     });
//   });
// });
