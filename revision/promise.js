const loadscript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script)
        script.onload = (script) => {
            resolve("script has been loded sir")
        }
        script.onerror = () => { reject(0) }
    })
}

let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
p1.then((value) =>{
    console.log(value)
    return loadscript("https://code.jquery.com/jquery-3.7.1.min.js")
}).then((value) =>{
    console.log("second script ready")
}).catch((error)=>{
    console.log("we are sorry but we are having problem in loading javascript")
})