/////////////////////////////////////////////////////////////////////////////////////
// STATE
// Мы можем создавать различные классы, которые будут являться элементами state
// И мы можем делегировать изменения состояния этих классов, на какой-либо 
// общий класс, который будет являться state и который будет изменять внутренние состояние этих элементов
///////////////////////////////////////////////////////////////////////////////////// 

// Цвет
class Ligth {
    constructor(ligth) {
        this.ligth = ligth
    }
}

class ReadLigth extends Ligth {
    constructor() {
        super('red')
    }

    sign() {
        return 'STOP'
    }
}

class YellowLigth extends Ligth {
    constructor() {
        super('yellow')
    }

    sign() {
        return 'ЖДИТЕ ...'
    }
}

class GreenLigth extends Ligth {
    constructor() {
        super('green')
    }

    sign() {
        return 'GO'
    }
}


class TrafficLigth {
    constructor() {
        this.states = [
            new ReadLigth(),
            new YellowLigth(),
            new GreenLigth()
        ]

        this.current = this.states[0]
    }

    change() {
        const total = this.states.length
        let index = this.states.findIndex(ligth => ligth === this.current)

        if (index + 1 < total) {
            this.current = this.states[index + 1]
        } else {
            this.current = this.states[0]
        }
    }

    sign() {
        return this.current.sign()
    }
}


const traffic = new TrafficLigth()

console.log(traffic.sign())

traffic.change()

console.log(traffic.sign())

traffic.change()

console.log(traffic.sign())

traffic.change()

console.log(traffic.sign())

traffic.change()

console.log(traffic.sign())