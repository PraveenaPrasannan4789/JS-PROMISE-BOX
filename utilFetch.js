//fetch with util function //promise.resolve, promise. reject(catch will handle),promise.all
const cache={
    name:'malayalam'
}
function fetch(url){
    if(cache){
        return Promise.resolve(cache)
    }
    return fetch(url).then((data)=>{
        console.log('dataaaa', data)
        return data.json();
    })
}