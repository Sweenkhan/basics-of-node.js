import fs from "fs" 

fs.readFile("sample.txt", (err, data) => {
    if(err) console.log(err) 
    else {
        console.log(data.toString())
    }
})
 

    fs.writeFile("sampleTwo.txt", "this is my second sample txt", (err) => {
        if(err) {
          console.log(err)
     }
})

