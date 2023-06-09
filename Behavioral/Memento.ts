class Memento {
    constructor(private value: any) {
    }
}

class Originator {
    save(value: any): Memento {
        return new Memento(value)
    }

    restore(memento): any {
        return memento.value
    }
}

class Caretaker {
    values: object[] = []

    addMemento(memento: Memento) {
        this.values.push(memento)
    }

    getMemento(index: number): object {
        return this.values[index]
    }
}

const careTaker = new Caretaker()
const originator = new Originator()

careTaker.addMemento(originator.save({name: 'Name1'}))
careTaker.addMemento(originator.save({name: 'Name2'}))
careTaker.addMemento(originator.save({name: 'Name3'}))

console.log(originator.restore(careTaker.getMemento(0)))