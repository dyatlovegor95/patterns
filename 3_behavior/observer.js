/////////////////////////////////////////////////////////////////////////////////////
// НАБЛЮДАТЕЛЬ
// Для чего? Формирует зависимости один ко многим.
// У нас есть один объект, у которого мы можем затригирить вызов изменений, и дальше все другие объекты которые подписаны на эти изменения,
// делают свои обновления и производят какой либо свой функционал
///////////////////////////////////////////////////////////////////////////////////// 


class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(x => x !== observer)
    }

    fire(action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT': 
                this.state = ++this.state
                break
            case 'DECREMENT': 
                this.state = ++this.state
                break
            case 'ADD': 
                this.state = this.state + action.payload
                break
            default: 
                this.state = this.initialState
        }
    }
}


const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

// здесь мы диспатчем команды и при этом изменяем все подписки
stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'DECREMENT'})
stream$.fire({type: 'ADD', payload: 10})


console.log(obs1.state)
console.log(obs2.state)