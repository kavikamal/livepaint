const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

var updates= []

// Fill in your request handlers here
app.get('/',(req,res,next)=>{

})

app.post('/updates',(req,res,next)=>{
    console.log("inside index.js",req.body.clientupdates);
    var clientupdates = [];

    clientupdates=req.body.clientupdates;
    updates=updates.filter(element => !clientupdates.includes(element));
    if (clientupdates.length>0){
        clientupdates.forEach(clientElement => {
            
            if (updates.length>0){
                updates.forEach(serverElement => {
                if ((serverElement[0] == clientElement[0]) && 
                    (serverElement[1] == clientElement[1])){
                        serverElement[2] == clientElement[2]
                }else {
                    updates.push(clientElement);
                    
                }
                } )
            }
            else{
                updates.push(clientElement);
    
            }
        })
       
    }
    res.send({updates:updates})
})

app.listen(port)