function createPromise() {
    let p = new Promise((resolve, reject) => {
      console.log("Promise is pending");
      setTimeout(() => {
        // console.log("I am a promise and I am rejected");
        // resolve(true);
        reject(new Error("I am an error"))
      }, 5000);
    });
  
    return p;

  }
 function createPromise2() {
    
    let p2 = new Promise((resolve, reject) => {
        console.log("Promise is pending");
        setTimeout(() => {
        //   console.log("I am a promise and I am fullfilled");
          resolve(true);
        //   reject(new Error("I am an error"))
        }, 5000);
      });
    
      return p2;
 }


   createPromise2().then((value)=>{
    console.log(value);
  });

  createPromise().catch((Error)=>{
    console.log("some eror occured in createpromises")
  })
