async function createRandomValuePromise(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random());
      }, delay * 1000);
    });
  }
  
  async function runPromises() {
    const promises = [
      createRandomValuePromise(1),
      createRandomValuePromise(2),
      createRandomValuePromise(3),
      createRandomValuePromise(4),
    ];
  
    const resolvedValues = await Promise.all(promises);
  
    resolvedValues.forEach((value, index) => {
      console.log(`Promise ${index + 1} resolved with value: ${value}`);
    });
  }
  
  runPromises();

  const axios = require('axios');

const githubUsernames = ['user1', 'user2', 'user3', 'user4', 'user5'];

function getUserData(username) {
  const apiUrl = `https://api.github.com/users/${username}`;
  return axios.get(apiUrl);
}

async function getFollowersCount(usernames) {
  try {
    const promises = usernames.map(username => getUserData(username));
    const responses = await Promise.all(promises);

    responses.forEach(response => {
      const username = response.data.login;
      const followersCount = response.data.followers;
      console.log(`${username} has ${followersCount} followers.`);
    });
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
}

getFollowersCount(githubUsernames);

const axios = require('axios');

const urls = [
  'https://random.dog/woof.json',
  'https://aws.random.cat/meow'
];

function fetchData(url) {
  return axios.get(url);
}

async function raceToFetchData(urls) {
  try {
    const promises = urls.map(url => fetchData(url));
    const fastestResponse = await Promise.race(promises);

    console.log('The fastest response:', fastestResponse.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

raceToFetchData(urls);

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

// Using Promise.allSettled to log the value of each promise
Promise.allSettled([one, two, three])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Fulfilled:', result.value);
      } else {
        console.log('Rejected:', result.reason.message);
      }
    });
  })
  .catch(error => {
    console.error('Error in Promise.allSettled:', error.message);
  });

// Using Promise.all to check if it works with one, two, and three
Promise.all([one, two, three])
  .then(values => {
    console.log('Promise.all resolved:', values);
  })
  .catch(error => {
    console.error('Error in Promise.all:', error.message);
  });

  [ 'Arya', 'Sam', { name: 'John' } ]