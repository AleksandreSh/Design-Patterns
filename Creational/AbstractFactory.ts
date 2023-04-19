namespace AdstractFactoryPattern{
interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
}

class LoftFactory implements FurnitureFactory {
    public createChair(): Chair {
    return new LoftChair();
    }
    public createSofa(): Sofa {
    return new LoftSofa();
    }
}

class ModernFactory implements FurnitureFactory {
    public createChair(): Chair {
    return new ModernChair();
    }
    public createSofa(): Sofa {
    return new ModernSofa();
    }
}

interface Chair {
    ChairDesign(): string;
}

class LoftChair implements Chair {
    public ChairDesign(): string {
        return 'loft chair';
    }
}

class ModernChair implements Chair {
    public ChairDesign(): string {
        return 'modern chair';
    }
}

interface Sofa {
    SofaDesign(): string;
}

class LoftSofa implements Sofa {
    public SofaDesign(): string {
        return 'loft sofa';
    }
}

class ModernSofa implements Sofa {
    public SofaDesign(): string {
        return 'modern sofa';
    }
}

function clientCode(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();

    console.log(chair.ChairDesign());
    console.log(sofa.SofaDesign());
}

clientCode(new ModernFactory());
}