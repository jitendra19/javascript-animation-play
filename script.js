function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(()=>{
      console.log('asdf')
      resolve();
    }, ms);
  });
  // your code
}

delay(1000).then(() => alert('runs after 1 seconds'));