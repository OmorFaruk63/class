
// const takeOrder = (customer, callcack) => {
//     console.log(`take Order From ${customer}`);
//     callcack(customer)
// }
// const procesOrder = (name, callback) => {
//     setTimeout(() => {
//         console.log(`Processing Order for ${name}`);
//         callback(name)
//     }, 3000)
// }
// const complateOrder = (customer) => {
//     console.log(`Complate Order From ${customer}`);
// }

// takeOrder('omor faruk', (name) => {
//     procesOrder(name, () => {
//         complateOrder(name)
//     })
// })
// ----------------------------------------------------

// let a = ['omor faruk', 'korim', 'mansur']

// for (let i = 0; i < a.length; i++) {
//     let s = Math.floor(Math.random() * a.length)
// }

// let check = true
// let promise_Obj = new Promise((resolve, reject) => {
//     if (check) {
//         return resolve(new Promise((resolve, reject) => {
//             resolve({ a: 1, b: 2 })
//         }))
//     } else {
//         reject(Error('error'))
//     }
// })
// // console.log(promise_Obj);
// promise_Obj
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



// for (let i = 0; i < 6; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 500);
// }

// our task 
// take order from from the customar 
// manage pr


const takeOrder = (customar) => {
    return new Promise((resolve) => {

        resolve({
            customarName: customar,
            message: 'has place an order '
        })
    })
}
const manageIngredient = (processedName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                customarName: processedName,
                message: 'Manage Ingredient' + processedName
            })
        }, 500);
    })
}
const prcessFood = (processedName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Processing the food for ' + processedName)
        }, 2000);
    })
}
const completeOrder = (processedName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('the Order Complete ' + processedName + ' can eat now')
        }, 500);
    })
}
takeOrder('Rizwan shovo').then(response => {
    console.log(response)
    manageIngredient('Rizwan shovo')
        .then((res => {
            console.log(res);
            prcessFood('Rizwan shovo')
                .then((res2 => {
                    console.log(res2);
                    completeOrder('Rizwan shovo')
                        .then((res3 => {
                            console.log(res3);
                        }))
                }))
        }))
})
// console.log(manageIngredient())
// console.log(prcessFood())
// console.log(completeOrder());