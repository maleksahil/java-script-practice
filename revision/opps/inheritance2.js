class Employee{
    constructor(name){
        console.log(`${name} - Employee's constructor is here`)
        this.name = name    
    }

    login(){
        console.log(`Employee has logged in`);
    }

    logout(){
        console.log(`Employee has logged out`)
    }

    requestleaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }

}

class programmer extends Employee{
    constructor(name){
        super(name)
        console.log(`${name} This is a newly written constructor`)
        this.name = name
    }
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffee`)
    }

    requestleaves(leaves){
        super.requestleaves(4)
        console.log("one extra is graneted")
    }
}

let e = new programmer("harry")
e.login()
e.requestleaves(3)
e.requestCoffee(5)