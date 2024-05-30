function mockAPI() {
  const randomIndex = Math.floor(Math.random() * 16);
  const delay = (randomIndex + 1) * 100;
  const randomNumber = Math.random();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomNumber);
    }, delay);
  });
}

// Function to create an array of N functions like mockAPI
function createMockAPIArray(N) {
  const apiArray = [];

  for (let i = 0; i < N; i++) {
    apiArray.push(mockAPI);
  }

  return apiArray;
}

// Usage example:
const N = 1000; // Number of functions you want in the array
const apiArray = createMockAPIArray(N);

apiArray.forEach((apiFunction, index) => {
  const limit = 10;

  apiFunction().then((number) => {
    console.log(`Function ${index + 1}: Random number = ${number}`);
  });
});
