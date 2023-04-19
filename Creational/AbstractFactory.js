var AdstractFactoryPattern;
(function (AdstractFactoryPattern) {
    var LoftFactory = /** @class */ (function () {
        function LoftFactory() {
        }
        LoftFactory.prototype.createChair = function () {
            return new LoftChair();
        };
        LoftFactory.prototype.createSofa = function () {
            return new LoftSofa();
        };
        return LoftFactory;
    }());
    var ModernFactory = /** @class */ (function () {
        function ModernFactory() {
        }
        ModernFactory.prototype.createChair = function () {
            return new ModernChair();
        };
        ModernFactory.prototype.createSofa = function () {
            return new ModernSofa();
        };
        return ModernFactory;
    }());
    var LoftChair = /** @class */ (function () {
        function LoftChair() {
        }
        LoftChair.prototype.ChairDesign = function () {
            return 'loft chair';
        };
        return LoftChair;
    }());
    var ModernChair = /** @class */ (function () {
        function ModernChair() {
        }
        ModernChair.prototype.ChairDesign = function () {
            return 'modern chair';
        };
        return ModernChair;
    }());
    var LoftSofa = /** @class */ (function () {
        function LoftSofa() {
        }
        LoftSofa.prototype.SofaDesign = function () {
            return 'loft sofa';
        };
        return LoftSofa;
    }());
    var ModernSofa = /** @class */ (function () {
        function ModernSofa() {
        }
        ModernSofa.prototype.SofaDesign = function () {
            return 'modern sofa';
        };
        return ModernSofa;
    }());
    function clientCode(factory) {
        var chair = factory.createChair();
        var sofa = factory.createSofa();
        console.log(chair.ChairDesign());
        console.log(sofa.SofaDesign());
    }
    clientCode(new ModernFactory());
})(AdstractFactoryPattern || (AdstractFactoryPattern = {}));
