import * as csv from "csv-parse";
import fs from "fs"

fs.createReadStream("log.csv") 
.pipe(csv.parse({delimiter: ","}))
.on("data", (row) => {
    console.log(row)
})