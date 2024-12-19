// 2. Write a JavaScript program that converts a callback-based function to a Promise-based function

function callback_basedFunction(arg1,arg2,callback){
      setTimeout(()=>{
        const result = arg1 + arg2;
        if(result%2 !== 0){
            callback(null,result)
        }else{
            callback(new Error('result is not odd!'), null);
        }
      },1000)
}

function promisiiedsunction(arg1,arg2){
    return new Promise((resolve,reject)=>{
        callback_basedFunction(arg1,arg2, (error, result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}

//Usage Example:
promisiiedsunction(2,3)
   .then(result =>{
    console.log('result:',result);
   })
   .catch(error =>{
    console.log('Error:',error.message)
   })
   
promisiiedsunction(2,4)
   .then(result =>{
    console.log('result:',result)
   })
   .catch(error =>{
    console.log('Error:',error.message)
   })   