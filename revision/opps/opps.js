class railwayform{
    constructor(name,trainno){
        this.name = name,
        this.trainno = trainno
    }
    submit(){
        console.log(this.name + ' your form is submitted')
    }

    cancle(){
        console.log(this.name + ' your form is canclled')
    }

    info(){
     let s = console.log(`your name is ${this.name} and your train no is ${this.trainno}`)
     return s;
    }
}

let person1 = new railwayform('harry',12456);

person1.submit()
person1.info()
person1.cancle()

const s = person1.info()

document.getElementById('demo').innerHTML = s


