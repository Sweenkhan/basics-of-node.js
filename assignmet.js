
//  function promiseMe(time, data) {
//     return new Promise((resolve, reject) =>{
        
//          setTimeout(() => {
//            return resolve(data)
//          }, time)

//          return reject
         
// })}

// const result = await promiseMe(2000, "hello") 
// console.log(result)


async function promisAgain(time, data) {

    setTimeout(() => {
        ()=>{
          
            return data
        }
    }, time)
}

const result = await promisAgain(2000, "how r u")

console.log(result)