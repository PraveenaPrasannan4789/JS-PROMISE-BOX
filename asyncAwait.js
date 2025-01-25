var button = document.getElementById("btn");

console.log('Requesting 1....')

button.onclick = () => {
    myFunction()
}

async function myFunction(){//async written in function declaration
var a= await myFetch("https://jsonplaceholder.typicode.com/todos/2");

}