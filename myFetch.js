function myFetch(url){
    return new Promise((res,rej)=>{
        $.ajax({
            url: url,
            success: (data) => {
              res(data);
            },
            error: (xhr,statusText) => {
                rej(statusText);
              },
          });
    });
}
