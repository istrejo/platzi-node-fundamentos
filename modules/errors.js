function otherFunction() {
  breack();
}

function breack() {
  return 3 + z;
}

function braeckAsync(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error in my async function');
      cb(error);
    }
  });
}

try {
  // breack();

  braeckAsync(console.log);
} catch (error) {
  console.error('Upppsssss, this is creshed');
  console.error(error);
}

console.log('This is in the final');
