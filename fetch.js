
function myFetch(url){
     fetch(url).then((data)=>{
        console.log('dataaaa', data)
        return data.json();
    })

    console.log('llll')
}