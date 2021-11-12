const express = require('express');
const path = require('path');


let app = express();
app.use(express.static(__dirname +'/public'));
const port = process.env.PORT || 3000;

app.use('/public/assets/images', express.static(path.join(__dirname, 'public')));

app.listen(port, ()=>{
    console.log('App is listening in port: ' + port);
});

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/profile.html', function(req,res){
    res.sendFile(path.join(__dirname, '/profile.html'));
});

app.get('/horarios.html', function(req,res){
    res.send('api works');
});
