let p1 = new Promise((resolve, reject) =>{
    // alert("hey I am resolved");
    setTimeout(()=>{
        resolve(1);
    }, 2000)
})

p1.then(()=>{
    console.log("horray")
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(4)
        },6000)
    })
}).then((value) => {console.log(value)})

p1.then(()=>{
    console.log("congratulation now this promise has been resolved")
})