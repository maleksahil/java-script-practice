// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.?

function repeat_function(fn,intervalMs){
    fn();

    const intervalId = setInterval(fn,intervalMs);

    return function stop_exicution(){
        clearInterval(intervalId);
        console.log('exicution stopped.')
    }
}

const intervalMs = 1000;

function printmessage(){
    console.log('exicuting the function...')
}

const stop_exicution = repeat_function(printmessage,intervalMs)

setTimeout(()=>{
    stop_exicution()
},4000)