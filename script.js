function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(()=>resolve(), ms);
  });  
}

delay(1000).then(() => alert('runs after delay 1 seconds'));


// another form of settimeout
function delay1(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));  
}
delay1(1000).then(() => alert('runs after same 1 seconds'));