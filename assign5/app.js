
const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.urlencoded({
    'extended': false,
    'limit': 1024
}))


server.get('/:file', function(req, res){
    
    res.sendFile(req.params.file, {
        'root': __dirname   
    });  

    
});

server.post('/submit', function(req, res){
    console.log(req.body);
    res.set({ 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html><html><body>");
    res.write("name: " + req.body.f_name + " " + req.body.l_name + "<br>");
    res.write("email: " + req.body.email + "<br>");
    res.write("comment: " + req.body.comment + "<br>");    
    res.write("</body></html>");
});



server.listen(8080);
