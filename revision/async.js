function getData(dataId) {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data", dataId);
            resolve("sucess");
        }, 2000);
    });
};


(async function () {
    console.log('getting all data 1 ...')
    await getData(1); // pass the argum
    console.log('getting all data 2 ...')
    await getData(2)
    console.log('getting all data 3 ...')
    await getData(3)
    console.log('getting all data 4 ...')
    await getData(4)
    console.log('getting all data 5 ...')
    await getData(5)
})();