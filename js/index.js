// 1. **Моделирование Задержки Выполнения**:
// Напишите функцию, которая принимает число в качестве входных данных и
// возвращает промис, который разрешается после указанного количества миллисекунд.
// Используйте эту функцию, чтобы создать задержку в 2 секунды, а затем
// зарегистрировать сообщение в консоли после разрешения промиса.
const task1 = (milliseconds) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return resolve(`After ${milliseconds} milliseconds promise's work has end .`);
        }, milliseconds);
    });
};

let promise = task1(2000);
promise
.then((value)=>{
    console.log('value :>> ', value);
})
.catch((error)=>{
    console.log(`Error : ${error}`);
});



// 2. **Цепочка Промисов**:
// Создайте две функции, `firstTask` и `secondTask`, каждая из которых возвращает
// промис, разрешающийся строковым сообщением. Свяжите эти промисы так, чтобы
// вторая задача выполнялась только после разрешения первой. Наконец,
// зарегистрируйте объединенный результат в консоли.
// const firstTask = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("first promise has worked ... second is working ...");
//         return resolve(secondTask());
//     });
// };

// const secondTask = () => {
//     return new Promise((resolve,reject)=>{
//         return resolve("second has worked ...");
//     });
// };

// const promise_ = firstTask();
// promise_
// .then((firstPromise)=>{
//     console.log(firstPromise);
// })
// .catch((error)=>{
//     console.log("error : ",error);
// });



// 3. **Использование Promise.all()**:
// Создайте три отдельные функции, каждая из которых возвращает промис, который
// разрешается строковым сообщением после указанной задержки. Используйте
// `Promise.all()` для выполнения всех трех функций параллельно и зарегистрируйте
// массив разрешенных сообщений после разрешения всех промисов.
// const f1 = () => {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             return resolve("Promise 1 (1.5 seconds)");
//         }, 1500);
//     });
// };

// const f2 = () => {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             return resolve("Promise 2 (2.5 seconds)");
//         }, 2500);
//     });
// };

// const f3 = () => {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             return resolve("Promise 3 (3.5 seconds)");
//         }, 3500);
//     });
// };

// Promise.all([f1(),f2(),f3()])
// .then((value)=>{
//     console.log(value);
// });



// 4. **Сценарий с Promise.race()**:
// Напишите две функции, `fastTask` и `slowTask`, каждая из которых возвращает
// промис, который разрешается строковым сообщением после различных временных
// задержек (один быстрый, другой медленный). Используйте `Promise.race()` для
// выполнения обеих функций и зарегистрируйте результат промиса, который
// разрешается первым.
// const fastTask = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             return resolve("Fast Task (2 seconds)");
//         }, 2000);
//     });
// };

// const slowTask = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             return resolve("Slow Task (5 seconds)");
//         }, 5000);
//     });
// };

// Promise.race([fastTask(),slowTask()])
// .then((value)=>{
//     console.log("Result : ",value);
// })
// .catch((error)=>{
//     console.log(error);
// });