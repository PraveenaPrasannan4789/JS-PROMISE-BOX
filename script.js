console.log('btn script')
var button= document.getElementById('btn');
console.log(button)
button.onclick=()=>{
    console.log('in button click, event started');
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos/1',
        success:(data)=>{
            console.log('data', data)
        },
        async:false
    })
    console.log('in button click, event ended');
    //if we register a callback in an event ,
    //  if that exceutes before the event ends ,
    //  then it is synchronous, otheriwise it is asynchronous
    //all utility function call back is synchronous forEach
    //all event function callbacks are asynchronous
}


