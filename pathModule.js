import path from "path";
 
  
// let getPath = path.parse("C:\\desktop is here\\Desktop\\node-js\\path.js")

// console.log(getPath)


let formating = {
   root: 'C:\\',
  dir: 'C:\\desktop is here\\Desktop\\node-js',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}

let setPath = path.format(formating)

console.log(setPath)