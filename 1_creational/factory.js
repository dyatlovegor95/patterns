/////////////////////////////////////////////////////////////////////////////////////
// ФАБРИКА
// Для чего? Когда объекты разных типов имеют много одникового функционала
/////////////////////////////////////////////////////////////////////////////////////

class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}


class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}


class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

// Сейчас есть три класса, похожих по своим характеристикам, мы могли бы создать сущность или абстракцию, которая объединяет все эти три класса
// и уже сама определяет какой инстанс создавать в зависимости от типа (класса)

class MemberFactory {
    static list = {
        'simple': SimpleMembership,
        'standard': StandardMembership,
        'premium': PremiumMembership
    }
    
    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        // Можем расширить функионал
        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Egor1', 'simple'),
    factory.create('Egor2', 'standard'),
    factory.create('Egor3', 'premium'),
    factory.create('Egor4', 'premium'),
    factory.create('Egor5')
]

members.forEach(m => {
    m.define()
})

