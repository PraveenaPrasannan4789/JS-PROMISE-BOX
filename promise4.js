//using fetch(file fetch.js)
var button = document.getElementById("btn");

button.onclick = () => {
  console.log("Requesting 1....");

  myFetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => {
      console.log('ll',data);
    })
};
