

async function fun() {
    let response = fetch('https://jsonplaceholder.typicode.com/todos')
    let b = (await response.json())
    console.log(b);
}
fun()

// array destarcring 
// json 
