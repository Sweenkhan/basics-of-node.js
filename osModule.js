import os from "os"

const memory = os.totalmem()   // give memory in bytes 
const memoryInGb =  memory/(1024 * 1024 * 1024)  // converting bytes to gb


console.log()