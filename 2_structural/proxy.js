/////////////////////////////////////////////////////////////////////////////////////
// ДОВЕРЕННОЕ ЛИЦО
// Для чего? Позволяет ставить ловушки на поля объектов, на вызов функций,
// все это дает возможность очень гибко определять работу приложения в дальнейшем.
// Мы можем только в определенных случаях давать возможность отработать функции после ее вызова
// Примером является избавление лишних запросов на сервер.
// 
/////////////////////////////////////////////////////////////////////////////////////


function networkFetch(url) {
    return `${url} - Ответ с сервера`
}


const cache = new Set()  // кэш, уникальные данные

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]

        if (cache.has(url)) {
            return `${url} - Ответа из кэша`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
        
    }
})

console.log(proxiedFetch('angular.io')) // angular.io - Ответ с сервера
console.log(proxiedFetch('vue.io')) // vue.io - Ответ с сервера
console.log(proxiedFetch('angular.io')) // angular.io - Ответа из кэша