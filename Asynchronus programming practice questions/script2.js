const loadScript = async (src) => {
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(src + " done success")
        }
        document.head.append(script)
    })
}


// problem number 2
const main2 = async () => {
    console.log(new Date().getMilliseconds())
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    console.log(a)
    console.log(new Date().getMilliseconds())
}
main2()