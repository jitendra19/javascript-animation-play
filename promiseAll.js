let names = ['iliakan', 'remy', 'jitendra19'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
  .then(responses => {
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // shows 200 for every url
    }
    return responses;
  }).then(responses => {
    console.log(responses)
    document.getElementById('githubData').innerHTML = responses[0].json().name; 
    return Promise.all(responses.map(r => r.json()))
  })
  .then(users => users.forEach(user => console.log(user.name)));