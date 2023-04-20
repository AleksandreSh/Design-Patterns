var Coffee = /** @class */ (function () {
    function Coffee(type) {
        this.type = type;
    }
    return Coffee;
}());
var CoffeeFactory = /** @class */ (function () {
    function CoffeeFactory() {
        this.types = [];
    }
    CoffeeFactory.prototype.create = function (name) {
        var type = this.types[name];
        if (type) {
            return type;
        }
        this.types[name] = new Coffee(name);
        return this.types[name];
    };
    CoffeeFactory.prototype.getTypes = function () {
        console.log(this.types);
    };
    return CoffeeFactory;
}());
var factory = new CoffeeFactory();
var millicanoCoffee = factory.create('Millicano');
var millicanoCoffee1 = factory.create('Millicano');
var amarettoCoffee = factory.create('Amaretto');
factory.getTypes();
