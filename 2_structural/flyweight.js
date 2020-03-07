/////////////////////////////////////////////////////////////////////////////////////
// ЛЕГКИЙВЕС
// Для чего? Чтобы мы могли эффективно передавать и работать с данными через различные типы объектов
// Например, браузер использует этот паттерн, чтобы избежать загрузки изображений,
// которые уже были загружены.
// Еще примеры, на основе этого паттерна реализуются кеширование, работа с памятью и т.д
/////////////////////////////////////////////////////////////////////////////////////


class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}


class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if (candidate) {
            return candidate
        } 

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model) {
        return this.cars.find(car => car.model === model) 
    }
}


const factory = new CarFactory()

const bmvX6 = factory.create('bmv', 10000)
console.log(bmvX6)


const audio = factory.create('audio', 12000)
console.log(audio)

const bmvX7 = factory.create('bmv', 10000) // не создавал новый инстанс, а понял что такой уже был и скопировал его
console.log(bmvX7)

console.log(bmvX6 === bmvX7) // true