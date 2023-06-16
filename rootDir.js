import fs from "fs"

 
fs.readdir("./", {encoding: "utf-8"}, (err, files) => {
    if(err) console.log(err)
    else {
         
       

       files.map((file) => {
            if(file === isDirectory()) {
            return  console.log(file)
            } 

            else {
               return  console.log(file)
            }
       })
       

    }
})

 