import http from "http";

const server = http.createServer((request, response) => {

    console.log("Connection Established")

    // GET Request
    response.writeHead(200, {"Content-type": "text/html"})
    response.end("<h1>Welcome to server Programing</h1>")

    // POST Request
    if (request.method === "POST") {
        let body = " "

        request.on("data", (data) =>{ 
            body += data.toString()
         response.end(body);
         console.log(body)
        });
 
    }
    
});


server.listen(3000, () => {
    console.log("server has started");
});


{/* <form method={post}><input type= {text} placholder={enter your name} /><input type= {number} placholder={enter your age} /><button type={submit}>click me</button></form> */}