// let doHomework = (subject, callback) => {
//     alert(`Starting my ${subject} homework.`);
//     callback();
// };
// doHomework('english', () => {     //финиш выходит онли после алерта
//     console.log("finish");
// })

// let promise = new Promise(function(resolve , reject){
//     setTimeout(() => resolve("fine"))
// })
// console.log(promise);

let promise = new Promise(function (resolse, reject){
    setTimeout(() => reject(new Error("Whoops")), 1000)
})
console.log(promise);