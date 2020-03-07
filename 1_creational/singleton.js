/////////////////////////////////////////////////////////////////////////////////////
// ОДИНОЧКА
// Для чего? Напрмер, существует класс в приложении и в приложении может быть только один инстанс от этого класса. 
// Чтобы небыло лишних объектов данного класса. Например инстанс подключения к БД, может быть один.
/////////////////////////////////////////////////////////////////////////////////////


class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance
        }

        // Определяем только один раз
        Database.instance = this
        Database.exists = true 
        this.data = data
    }

    getData() {
        return this.data
    }
}


const mongo = new Database('MongoDB')
console.log(mongo.getData()) // MongoDB


const mysql = new Database('MySQL')
console.log(mysql.getData()) // MongoDB

