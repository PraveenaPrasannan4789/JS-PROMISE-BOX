//nesting chaining
var button = document.getElementById("btn");

console.log('Requesting 1....')
const pr = myFetch("https://jsonplaceholder.typicode.com/todos/1");

button.onclick = () => {
    
 const data1= pr.then((data)=>{ //then return a promise
    console.log(data)
    console.log('Requesting 2....')
return myFetch("https://jsonplaceholder.typicode.com/todos/2");
  })

  const data2= data1.then((data)=>{
    console.log(data)
    console.log('Requesting 3....')
    return myFetch("https://jsonplaceholder.typicode.com/todos/3");
  });

  const data3= data2.then((data)=>{
    console.log(data)
  });

};
