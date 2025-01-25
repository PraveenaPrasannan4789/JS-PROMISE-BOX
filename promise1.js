//nesting promises
var button = document.getElementById("btn");
const pr = myFetch("https://jsonplaceholder.typicode.com/todos/1");
button.onclick = () => {
  pr.then(
    (data) => {
      const pr1 = myFetch("https://jsonplaceholder.typicode.com/todos/2");
      pr.then(
        (data) => {
          console.log('here in promise',data);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log('here in promise2',data);
    },
    (err) => {
      console.log(err);
    }
  );
};
