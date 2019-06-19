const express = require('express');
const app = express();
const greetings = require("./greetings");
const path = require('path');



//when the app gets a request, it respond with a resource that is located in a different file usint the 'require' method
app.get('/', (req,res)=>{
    res.send(greetings.sayHelloInEnglish());
   
});

//index.html is returend when app gets a request on /page - using path.join
app.get('/page', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
})

app.listen(3000, ()=> {
    console.log("success");
});