// let arr = ["Ilya", "Kentor"]
// let [firstName, surname] = arr
// console.log(firstName);          //деструктуризации массива
// console.log(surname);

//  let arr = ["Ilya", "Kentor"]
//  let [firstName, surname] = "Ilya Kantor".split(" ") //тоже самое но другой способ
//  console.log(firstName);
//  console.log(surname);

// let = options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };
// let {title, width, height} = options
// console.log(title);
// console.log(width);
// console.log(height);    //тоже деструктуризация но уже в полной мере

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };
// let {title, ...rest} = options
// console.log(rest.width);
// console.log(rest.height);  //такс тут уже эти три точки и rest это остаточные параметры
 
// let options = {
//     size: {
//         width: 100.,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };
// let {
//     size:{
//         width,
//         height
//     },
//     items: [item1, item2],
//     title="Menu"
// } = options
// console.log(title);
// console.log(width);
// console.log(height);
// console.log(item1);
// console.log(item2);

// let now = new Date()
// console.log(now);  //вызывает настоящее время

// let jan = new Date(0)
// console.log(jan); //вызывает время с 1970(это стандарт)

// let jan2 = new Date(24 * 3600 * 1000)
// console.log(jan2);//тут у нас + 1 день тоесть 1970год и 2 января

// let dec= new Date (-24 * 3600 * 1000)
// console.log(dec);

// let date = new Date("2017-01-26")
// console.log(date);

let student = {
    name: 'John',
    age:30,
    isAdmin: false,
    courses:['html','css','js'],
    wife: null
};
console.log(student);
let json = JSON.stringify(student)
console.log(json);

// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["john", "ann"]
//     }
// };
//
// console.log(JSON.stringify(meetup))
//
// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers)
// console.log(numbers [1])

let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user)
console.log(user.friends)