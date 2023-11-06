// Simple program
let a = "munna";
console.log(a)

//Types
/**
 * 1. String types
 * 2. Number types
 * */ 

let fname:string
fname = 'ok'
// console.log(fname)

const fetchData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}

fetchData()