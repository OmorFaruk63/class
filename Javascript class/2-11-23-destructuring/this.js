// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
//  Methods like call(), apply(), and bind() can refer this to any object.

// let obj = {
//     a: 10,
//     b: 20,
// }
// let obj2 = {
//     fun: function () {
//         let a= this.a
//         let b = this.b
//         return [a,b]// return 2 element
//     }
// }
// console.log(obj2.fun.call(obj));


// let obj = {
//     ins_name: 'as-sunna foundation',
//     course_list: ['html', 'css', 'javascript', 'react'],
//     print_course_info: function () {
//         this.print_course_info.forEach( function(value) {
//             console.log(value);
//         }).call(this);
//     },
// }



// let obj = {
//     fname: 'omor',
//     lname: 'faruk',
//     fullName() {
//         fun = () => {
//             return this.fname + this.lname
//         }
//         return fun()
//     }
// }
// console.log(obj.fullName());



// const array = [5, 9, 8, 6, 4, 7]
// const myReducer = (array, callBack, accumulator) => {
//     let i = 0
//     if (!accumulator) { i = 1 }
//     accumulator = accumulator ? accumulator : array[0]
//     while (i < array.length) {
//         accumulator = callBack(accumulator, array[i]) //Cb function call by prevalue or constractor and item of array
//         i++
//     }
//     return accumulator
// }
// const callBack = (accumulator, currentValue) => {
//     accumulator += currentValue - 2 //got the value and doing the task according to requirement.
//     return accumulator
// }
// const myRedValue = myReducer(array, callBack)
// console.log(myRedValue());



// ------------------------this -------------

// const school = {
//     name: 'highSchool',
//     classRoom: {
//         name: 'class 10',
//         teacher: {
//             name: 'omor faruk',
//             introduce() {
//                 console.log(`i am ${this.classRoom.teacher.name},i teach ${this.classRoom.name} at ${this.name}`);
//             }
//         }
//     }
// }
// // const { name: sch, classRoom: { name: clsname, teacher: { name: teaName } } } = school
// let x = school.classRoom.teacher.introduce.call(school)

// let a = 10
// function fun(params) {
//     console.log(a);
//     let a = 20
// }

// fun()


// let a ={
//     a:10,
//     b:20
// }

// fun()


