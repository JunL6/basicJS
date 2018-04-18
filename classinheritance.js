class Car {
    constructor({ title }) {
        this.title = title;
    }
    
    drive() {
        console.log('vroom');
    }
}

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    
    honk() {
//        super();
        console.log('beep');
    }
    
    drive(){
        super.drive();
        console.log('SUPER');
    }
} 

const toyota = new Toyota({ title: 'T', color: 'red' });
toyota.drive();
//toyota.honk();