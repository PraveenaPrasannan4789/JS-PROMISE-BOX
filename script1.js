console.log("btn script");
var button = document.getElementById("btn");
console.log(button);
button.onclick = () => {
  console.log("in button click, event started");
  var arr = [];
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    success: (data) => {
      arr.push(data.title);
      console.log("data", data);
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        success: (data) => {
          arr.push(data.title);
          console.log("data", data);
        },
        async: true,
      });
      document.getElementById("textBx").value = arr.join("\n");
    },
    async: true,
  });

  console.log("in button click, event ended");
  //if we register a callback in an event ,
  //  if that exceutes before the event ends ,
  //  then it is synchronous, otheriwise it is asynchronous
  //all utility function call back is synchronous forEach
  //all event function callbacks are asynchronous
};

//in synchronous if event blocked, it will get stuck, no painting will happen
//in asynchronous callback the rest of code will get executed, browser 
// is responsible for getting the data from server
//promise is a library which isqq2 a cleaner way to write asynchronous code