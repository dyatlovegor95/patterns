/////////////////////////////////////////////////////////////////////////////////////
// ДЕКОРАТОР
// Для чего? Позволяет добавлять новое поведение или функционал для существующих классов
// Декоратор добавляют слой методанных для существующих объектов
/////////////////////////////////////////////////////////////////////////////////////


// Базовый класс
class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}


// Декоратор - обычная функция, которая принимает инстанс класса, модифицирует его и возвращает обратно,
// тем самым добаляет новый функционал или обновляет старый

function aws(server) {
    server.isAWS = true
    server.awsInfo = function() {
        return server.url
    }

    return server
}

function azure(server) {
    server.isAzure = true
    server.port += 500

    return server
}

const s2 = azure(new Server('192.168.24.24', 8080))
//let s2 = new Server('192.168.24.24', 8080)
//s2 = azure(s2)
console.log(s2.isAzure)
console.log(s2.url)