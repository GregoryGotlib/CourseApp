const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//http://localhost:8080/log-in1

app.use(express.static('public'))


app.get('/log_in',(req,res)=>{
   res.sendFile(__dirname + '/loginPage.html');
})

app.post('/log_inn',(req,res)=>{
    var email=req.body.email;
    var password=req.body.password;
    
    res.send(password+' '+email);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=> console.log("Server is running on port:" + PORT));
