var PowerUSA = /** @class */ (function () {
    function PowerUSA() {
    }
    PowerUSA.prototype.chargingUSA = function () {
        return 'Use charge USA';
    };
    return PowerUSA;
}());
var PowerEU = /** @class */ (function () {
    function PowerEU() {
    }
    PowerEU.prototype.chargingEU = function () {
        return 'Use charge EU';
    };
    return PowerEU;
}());
var AdapterUSAtoEU = /** @class */ (function () {
    function AdapterUSAtoEU(charger) {
        this.charger = charger;
    }
    AdapterUSAtoEU.prototype.chargingEU = function () {
        console.log("addapting USA charger to EU, ".concat(this.charger.chargingUSA()));
    };
    return AdapterUSAtoEU;
}());
var chargingLaptop = new PowerUSA();
var chargingAdapter = new AdapterUSAtoEU(chargingLaptop);
chargingAdapter.chargingEU();
