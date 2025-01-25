// const pr= new Promise((res,rej)=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/2').then((data)=>{
//         return data.json();
//     }).then((data)=>{
//         console.log('data',data)
//         res(data);
//     }).catch((err)=>{
//         rej(err)
//     })
// })

// console.log('prrrr',pr);
// pr.then((data)=>{
//     console.log('data in pr resolved', data)
// })

const pr=new Promise((res,rej)=>{
    document.getElementById('btn').addEventListener('click',()=>{
    res ('solved');
    })
})


    pr.then((data)=>{
       console.log('dataaa',data);
    })