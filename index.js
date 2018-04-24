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
    
    var clientupdates = [];
    updates.push(...req.body.clientupdates);
    updates.slice(req.body.updatedTill);
    res.send({updates:updates ,updatedTill: updates.length})
})

app.listen(port)