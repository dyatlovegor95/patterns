/////////////////////////////////////////////////////////////////////////////////////
// СТРАТЕГИЯ
// Позволяет создавать оболочку для различных интрефейсов, 
// для того чтобы мы могли использовать различные алгоритмы и интерефейсы для определенной задачи
// Другими словами, он определяет семейство некоторых алгоритмов, которые наследуют объекты
// в неизменяемом порядке
/////////////////////////////////////////////////////////////////////////////////////

// транспортного средство
class Vehicle {
    travelTime() {
        return this.timeTaken
    }
}

// 1 стратегия
class Bus extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 10
    }
}


// 2 стратегия
class Taxi extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 5
    }
}

// 3 стратегия
class Car extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 3
    }
}

// Затраченное время по определенному маршруту
class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}


const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Car()))