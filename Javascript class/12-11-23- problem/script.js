

// var data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

// var ar = csvToArray(data);
// console.log(JSON.stringify(ar));

// function csvToArray(data) {
//     var arLines = data.split("\n");

//     for (var i = 0; i < arLines.length; i++) {
//         var arLine = arLines[i].split(";");
//         arLines[i] = arLine;
//     }

//     return arLines;
// }


// let data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

// let datal = [];
// let datall = []
// let datalll = []
// let svc = [';', '\n']
// let svcc = ['\n']
// for (let a of data) {
//     if (!svc.includes(a)) {
//         datal += a
//     } else if (!svcc.includes(a)) {
//         datall.push(datal)
//         datal = []
//     } else if (svcc.includes(a)) {
//         datall.push(datal)
//         datalll.push(datall)
//         datall = []
//         datal = []
//     }
// }
// datall.push(datal)
// datalll.push(datall)
// // console.log(datalll);
// let json = JSON.stringify(datalll)
// console.log(json);

// Create a function that converts a string to an array of characters

// let str = 'hello world!';
// function fun(str) {
//     let arr = []
//     for (let a of str) {
//         arr.push(a)
//     }
//     return arr
// }
// console.log(fun(str));



