class Coffee {
    type: string;
    constructor (type: string){
        this. type = type;
    }
}
class CoffeeFactory {
    types: string[];
    constructor(){
        this.types = [];
    }
    create(name: string) {
        let type = this.types[name];
        if (type) {
            return type;
        }
        
        this.types[name] = new Coffee(name);
        return this.types[name];
    }
    getTypes() {
        console.log(this.types);
    }
}

const factory = new CoffeeFactory();

const millicanoCoffee = factory.create('Millicano');
const millicanoCoffee1 = factory.create('Millicano');
const amarettoCoffee = factory.create('Amaretto');
factory.getTypes();