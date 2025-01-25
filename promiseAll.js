//using fetch(file fetch.js)
var button = document.getElementById("btn");

button.onclick = () => {
  console.log("Requesting 1....");
Promise.all([
    myFetch("https://jsonplaceholder.typicode.com/todos/1"),
    myFetch("https://jsonplaceholder.typicode.com/todos/2"),
    myFetch("https://jsonplaceholder.typicode.com/todos/3")
])
    .then((data) => {
      console.log('ll',data);
    })
    .catch((data) => {
        console.log('ll',data);
      })

      Promise.race([
        myFetch("https://jsonplaceholder.typicode.com/todos/1"),
        myFetch("https://jsonplaceholder.typicode.com/todos/2"),
        myFetch("https://jsonplaceholder.typicode.com/todos/3")
    ])
        .then((data) => {
          console.log('ll',data);
        })
        .catch((data) => {
            console.log('ll',data);
          })
};
