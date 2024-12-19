// problem number 3
// problem number 3
let p = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(new Error("Please this is not acceptable"))
        },3000)
    })
}

let a = async () => {
    try{
        let c = await p()
        console.log(c)
    }
    catch (err) {
        console.log("this error has been handeled")
    }
}