
var button = document.getElementById("btn");
const pr= myFetch('https://jsonplaceholder.typicode.com/todos/1');
button.onclick = () => {
  console.log("in button click, event started");
//in promise we use callback in then function in the promise object
//anywhere we can resolve the promise
pr.then((data)=>{
console.log(data)
},
(err)=>{
    console.log(err)
}
)

};
