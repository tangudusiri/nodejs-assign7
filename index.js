const express = require('express')
const Array=require("./InitialData")
const bodyParser = require("body-parser");
var myObject= JSON.stringify(Array);
const app = express()
app.set("views","./views")
app.set("view engine","ejs")
// const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get("/api/student",(req,res)=>{
   res.render("user.ejs",{Array})
   console.log({Array})
})
app.get("/api/student/:id",(req,res)=>{
   const idparam=parseInt(req.params.id)
   let ids = Array.map( (item) => item.id);
//    console.log(ids)
//    console.log(typeof(idparam))
   for(let i=1;i<=ids.length;i++){
    if(ids[i]===idparam){
        res.status(202).send(Array[i])
        // console.log(Array[i])   
    }
    // else{
    //     res.status(404).send("not found")
    // }
   }

})
app.delete("/api/student/:id",(req,res)=>{
   
})
app.get("/",(req,res)=>{
    res.end("Hello")
})

app.listen(3000, () => console.log(`App listening on port 3000!`))

module.exports = app;   