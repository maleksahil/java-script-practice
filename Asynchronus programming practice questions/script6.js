// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

function asyncOperation1(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('asynchronus operation 1')
            resolve()
        }, 1000);
    })
}

function asyncOperation2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('asynchronus operation 2')
            resolve()
        },2000)
    })
}

function asyncOperation3(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('asynchronus operation 3')
            resolve()
        }, 3000);
    })
}

async function performOperation(){
    try{
        await asyncOperation1();
        await asyncOperation2();
        await asyncOperation3();
        console.log('All operation completed')
    }catch(error){
        console.log('Error:',error.message)
    }
}

performOperation()