/////////////////////////////////////////////////////////////////////////////////////
// ИТЕРАТОР
// Для чего? Мы создаем класс или объект у которого мы можем последовательно получать доступ к определенной информации
// 
// 
/////////////////////////////////////////////////////////////////////////////////////


class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => { // стрелочная функция нужна чтобы контекст оставался именно класса MyIterator
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    } 
                    
                } else {
                    this.index = 0
                    return {
                        value: void 0, // undefined
                        done: true 
                    } 
                }
            }
        }
    }
}


const iterator = new MyIterator(['this', 'is', 'iterator'])



/* for (const val of iterator) {
    console.log('Value: ', val)
} */


// Вместо этого можно использовать генератор

function* generator(collection) {
    let index = 0

    while (index < collection.length) {
        yield collection[index++]
    }
}

const gen = generator(['this', 'is', 'iterator'])

/* for (const val of gen) {
    console.log('Value: ', val)
} */
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)



