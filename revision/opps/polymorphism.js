class Animal{
    makesound(){
        console.log('some animal sound')
    }
}

class Dog extends Animal{
    makesound(){
        console.log('bhaw bhaw')
    }
}

class Cat extends Animal{
    makesound(){
        console.log('meow meow')
    }
}

class cow extends Animal{
    makesound(){
        console.log('moo moo')
    }
}

let animals = [new Dog(), new Cat(), new cow()];

animals.forEach((animal)=>{
    animal.makesound(); 
})