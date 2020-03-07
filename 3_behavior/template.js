/////////////////////////////////////////////////////////////////////////////////////
// ШАБЛОН
// Определяет некоторый скелет будующего алгоритма, но при этом он делегирует
// создание конкретного функционала уже в дочерние классы
// Он определяет структуру, а дочерние классы уже реализовывают функционал, при этом не изменяя поведения базоваого класса
// 
/////////////////////////////////////////////////////////////////////////////////////


class Emploee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    
    responsibilites() {}

    work() {
        return `${this.name} выполняет ${this.responsibilites()}`
    }

    getPaid() {
        return `${this.name} имеет зп ${this.salary}`

    }
}


class Developer extends Emploee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilites() {
        return 'процесс создания программ'
    }
}

class Tester extends Emploee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilites() {
        return 'процесс тестирования'
    }
}


const dev = new Developer('Egor', 1200000)
console.log(dev.getPaid())
console.log(dev.work())


const test = new Developer('Oleg', 900000)
console.log(test.getPaid())
console.log(test.work())

