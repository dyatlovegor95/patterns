/////////////////////////////////////////////////////////////////////////////////////
// АДАПТЕР
// Для чего? Позволяет внедрить старый интерфейс в новый интерфейс не ломаю фукционал старого приложения
// Когда у нас уже есть много старого функционала и он используется в старом коде, мы не хотим переписывать этот код,
// но хотим внедрить новый функционал и далее уже его использовать в новом коде. 
// Получается, что интерфейс у нас остается старым, а функционал новым
/////////////////////////////////////////////////////////////////////////////////////


class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}


class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2) {
        return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}


const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5))

const adapter = new CalcAdapter()
console.log(adapter.operations(25, 5, 'sub'))

