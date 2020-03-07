/////////////////////////////////////////////////////////////////////////////////////
// ФАСАД
// Для чего? Создавать более простой и может быть уникальный (публичный) интерфейс для взаимодействия с различными классами
// Он нужен имеено для облегчения взаимодействия
// Примером является библиотека jQuery -> $('')
/////////////////////////////////////////////////////////////////////////////////////


class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}


class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`
    }
}


// FACADE
class complaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if (type === 'service') {
            complaint = new ServiceComplaints
        } else {
            complaint = new ProductComplaints
        }

        return complaint.add({id, customer, details})
    }
}


const registy = new complaintRegistry()

console.log(registy.register('Egor', 'service', 'fatal'))
console.log(registy.register('Bob', 'product', 'success'))