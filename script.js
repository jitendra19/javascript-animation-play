function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(()=>resolve(), ms);
  });  
}
delay(1000).then(() => console.log('runs after delay 1 seconds'));

// another form of settimeout
function delay1(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));  
}
delay1(1000).then(() => console.log('runs after same 1 seconds'));


// ASYNC AND AWAIT practice
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
async function loadJson(url) {
  const response = await fetch(url);    
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}
async function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  let user;
  try{ 
    user = await loadJson(`https://api.github.com/users/${name}`);
  } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
  }
  alert(`Full name: ${user.name}.`);
}

demoGithubUser();