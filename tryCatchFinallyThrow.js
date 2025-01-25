console.log('started');

let a,b,result;
try{
  a = getVal1();
  b= getVal2();
  result= processVal(a,b);
}
catch(e){
    console.log('inside catch') //if catch also have error all execution will ends, but finally block will end
result=0;
}
finally{
    console.log('finally-guaranteed execution')
}

console.log(result);
console.log('ended');


//================================

function getVal1(){
    let a= undefined;
    return a.val; //here js throw error, if we want to throw error 
    //throw 'error'; it go to catch and e value will be 'error'
    //error class we can use, it will show line no
    //throw new error('error')
}

function getVal2(){
    console.log('inside get 2')
    return 22;
}

function processVal(a,b){
    console.log('inside get 3')
    return a+b;
}