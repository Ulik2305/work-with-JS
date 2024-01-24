// let arr = [1,0,false]
// console.log(arr.indexOf(0)); выйдет 1
// console.log(arr.indexOf(false)); выйдет два
// console.log(arr.includes(1)); //выйдет true  тоесть индекс ищет нумерацию а инклюд есть ли он в целом

//let fruits = ["banana","Апельсин","Яблоко"]
// console.log(fruits.lastIndexOf("Апельсин")); //ласт индекс начинает считать в обратку

// let users = [
//     {id:1, name:"Vasiliy"},
//     {id:2, name:"Petua"},
//     {id:3, name:"Masha"}
// ];
// let user = users.find(item => item.id == 1)
// console.log(user.name); //ищет значение

//  let users = [
//      {id:1, name:"Vasiliy"},
//      {id:2, name:"Petua"},
//      {id:3, name:"Masha"},
//      {id:4, name:"Vasiliy"}
//     ];
//     console.log(users.findIndex(user=>user.name =="Vasiliy"));
//     console.log(users.findLastIndex(user=>user.name == "Vasiliy")); // тут мы искали индексы

// function compareNumeric(a,b){
//     if(a > b) return 1;
//     if(a == b) return 0;
//     if(a < b)return -1;
// }
// let arr = [1,2,15]
// arr.sort(compareNumeric) //без функции сорт работать не будет

// let arr = ["a","b","m","a","z"]
// arr.reverse()
// console.log(arr); //сортировка в обратку

// let names = 'Вася, Петя, Маша';
// let arr = names.split(' ')
// for (let name of arr){
//     console.log(`SMS poluchat ${name}.`);
// }//разделение на каждого идет

// let str = "Sasha"
// console.log(str.split(' '))//простенький тестик можно не чекать

// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join('; ')
// console.log(str);//join объединяет 

// let map = new Map();//проще говоря итерация или перебор
// map.set("1","str1");// тут у нас строки
// map.set(1,"num1");// а тут цифры
// map.set(true, "bool1")// ииии логический тип
// console.log(map.get(1));//тут вызывается цифры тоесть нам1
// console.log(map.get("1"));//а тут стр1
// console.log(map.get(true));//а тут боол1
// console.log(map.size); //и тут размер вроде

// let john = {name:john}
// let visit = new Map()
// visit.set(john,123)
// console.log(visit.get.john);

// let recipeMap = new Map([   
//     ["огурец" ,500],
//     ["помидор",350],
//     ["лук", 50]
// ]);
// for(let vegetable of recipeMap.keys()){ //тут юзаем итерацию и выходят овощи
//     console.log(vegetable);
// }
// for(let number of recipeMap.keys()){   //а тут  уже циферкиииии
//     console.log(number);
// }
// for(let entry of recipeMap){     //а тут обе
//     console.log(entry);
// }
// recipeMap.forEach((value, key, map)=>{     //тоже обе но только уже тут forEach
//     console.log(`${key}; ${value}`); 
// })

 let obj = {
     name: "John",
     age: 30
 };

 let map = new Map(Object.entries(obj))
console.log(map.get('name'))

//  let set = new Set();

// let john = { name: "John" };
//  let pete = { name: "Pete" };
//  let mary = { name: "Mary" };

//  set.add(john);
//  set.add(pete);
//  set.add(mary);
//  set.add(john);
//  set.add(mary);

//  console.log(set.size)

//  for (let user of set) {
//      console.log(user.name)
//  }

// let set = new Set(["апельсин", "яблоко", "банан"]);for (let value of set) {
//      console.log(value)
//  }

// set.forEach((value, valueAgain, set) => {
//     console.log(value)
// })