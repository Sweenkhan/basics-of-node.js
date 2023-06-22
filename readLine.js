 import readline from "readline"
// import {root} from "../square.js"


let rl = readline.createInterface(process.stdin, process.stdout);

    rl.question("write some numbers : ", (item) => {
          
         let number = item.split(" ")

         let roots = number.map((root) =>  root*root)
       
         rl.write("square : " + roots.join(" "))
         rl.close()
    })