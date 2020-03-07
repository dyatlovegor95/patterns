/////////////////////////////////////////////////////////////////////////////////////
// ПРОТОТИП
// Для чего? Мы можем создавать новый объект используя как скелет для его прототипа какие-то другие объекты
/////////////////////////////////////////////////////////////////////////////////////

// prototype
const car = {
    wheels: 4,

    init() {
        console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
    }
}

// object
const сarWidthOwner = Object.create(car, {
    owner: {
        value: 'EGOR'
    }
})

сarWidthOwner.init()


console.log(сarWidthOwner.__proto__ === car)