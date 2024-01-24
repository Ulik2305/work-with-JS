// let arr = ["Я", "изучиваю","JS"];
// console.log(1,1);
// arr.splice(arr)

// let arr = ["Я", "изучиваю","JS"];
// arr.splice(0, 3, "Hello", "Dance")
// console.log(arr)

// let arr = ["я", "изучаю","JS","прямо", "сейчас"];
// // console.log(arr);
// let remove = arr.splice(0, 2)
// console.log(remove);

// let arr = ["Я", "изучиваю","JS"];
// arr.splice(2,0, "Hello", "Dance") добавил хелло и дэнс после изучиваю
// console.log(arr);

// let arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4) между ними добавил
// console.log(arr);

// let arr =["t","e","s","t" ];
// // console.log(arr.splice(1,3)); показал буквы е и с
// console.log(arr.splice(-2)); убрал первые две буквы

// let arr =[1,2];
// console.log(arr.concat([3,4])); concat копирует и дальше добавляет свойства
// console.log(arr.concat([3,4], [5,6]));

// let arr=[1,2]
// let like ={
// 0:"hello", (в массив добавил обьект)
// length:1 
// }
// console.log(arr.concat(like));

// let arr=[1,2,3,4,5];
// arr.forEach(function(elem){   делает перебор типа цикла
//     console.log(elem);
// })

// let arr =['a', "b","c","d","e"];
// arr.forEach(function(elem, index){     перебор с цифрами(index) и букв(elem)
// console.log(elem,index);
// })

//  let arr = [1,2,3,4,5];
//  let sum = 0;
//  arr.forEach(function(elem){ (вывел сумму)
//     sum +=elem
//  })
//  console.log(sum);

// let arr = [1,2,3,4,5];
// let result = arr.map(function(elem){   (умножил все на два)
//     return elem * 2
// })
// console.log(result);

// let arr = [1,2,3,4,5,6];
// let result = arr.map(function(elem, index){ (умножил элементы на индексы(числа которые начинаются с 0))
//     return elem*index
// })
// console.log(result);

// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let result = arr.filter(function (elem){
//     if(elem >= 0){
//         return true
//     } else {
//         return false
//     }
// })
//
// console.log(result)
//
// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let result = arr.filter(elem => {
//     if (elem >= 0) {
//         return true
//     }else {
//         return false
//     }
// })
// console.log(result)

// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let result = arr.filter(elem => {
//     return elem >= 0
// })
//
// console.log(result)

// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let result = arr.filter(elem => elem >= 0)
//
// console.log( result)

// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.reduce(function (sum, elem){
//     return sum + elem
// }, 2)
// console.log(result)

let arr = [1, -2, -3, 4, 5, -6];
let result = arr.reduce(function (sum, elem) {
    if (elem >= 0) {
        return sum + elem
    }else {
    return sum
    }
})
console.log(result)