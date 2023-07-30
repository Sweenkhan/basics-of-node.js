import fs from "fs"


fs.writeFile("text.txt", "This is my First js write file /n", (err) => {
            if(err) console.log(err)
})



fs.readFile("text.txt", (err, data) => { 
    if(err) console.log(err)

    else{
        console.log(data.toString())    // converting data buffer to string
    }
} )


fs.appendFile("text.txt", "3. second line   ", (err) =>{

    if(err) console.log(err)
})