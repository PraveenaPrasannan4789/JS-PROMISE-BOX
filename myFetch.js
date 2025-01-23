function myFetch(url){
    return new Promise((res,rej)=>{
        $.ajax({
            url: url,
            success: (data) => {
              console.log("data", data);
              res(data);
            },
            error: (xhr,statusText) => {
                console.log("error", statusText);
                rej(statusText);
              },
          });
    });
}
