/////////////////////////////////////////////////////////////////////////////////////
// КОМАНДА
// Для чего? Позволяет создавать определнную абстрактную оболочку над функционалом, который позволяет управлять,
// но уже через другой объект и тем самым записывает определенные состояния, которые уже были вызваны
// Примером может быть Redux 
/////////////////////////////////////////////////////////////////////////////////////



//Паттерн команда, а описываете стратегию, команда это по сути просто небольшой рефакторинг 
//когда мы класс "кнопка удаления" делаем просто "кнопка" более универсальная штука,
//с полем команда в которую засунули нашу функцию как поле класса, которая что то удаляет.

class MyMath {
    constructor(initialValue = 0) {
        this.num = initialValue
    }

    square() {
        return this.num ** 2
    }

    cube() {
        return this.num ** 3
    }
}

class Command {
    constructor(subject) {
        this.subject = subject
        this.commandsExecuted = [] // список всех команд которые уже были вызваны
    }

    execute(command) {
        this.commandsExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'))
console.log(x.execute('cube'))
console.log(x.commandsExecuted)
