import dns from "dns"; 
// const hostname = "www.google.com"

const ip = "142.250.193.4"
// const serverName = "del11s14-in-f4.1e100.net"



                //    dns.lookup will give value in string

// dns.lookup(hostname,  (err,address, family) =>{
//     if(err){
//         console.log(err)
//         // return
//     }  
//     else {
//         console.log("The address is: "+address)
//         console.log("The family is:"+family)
//     }
// })

       
                       //   dns.resolve will give value in array and byDefault family will be in V4

// dns.resolve(hostname, (err, addresses)=> {
//          if(err){
//             console.log(err)
//          } else {
//            console.log("The addresses is: ", addresses)
//          }
// })


// dns.resolve6("www.google.com", (err, addresses)=> {
//     if(err){
//        console.log(err)
//     } else {
//       console.log("The addresses family is v6 is: ", addresses)
//     }
// })


dns.reverse(ip, (err, hostname) => {
    if (err){
        console.log(err)
    } else {
        console.log(JSON.stringify(hostname))
    }
})



 

// dns.lookupService("142.250.193.4",22, (err, hostname, service) => {
//   if (err) {
//     console.log(err);
   
//   } else {
  
//     console.log('Domain name:', hostname, service);
//   }
  
// });
