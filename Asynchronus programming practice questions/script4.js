// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function afterdelay(callback){
    callback()
}

function display_message(){
    console.log('hello!')
}

console.log(afterdelay(display_message))