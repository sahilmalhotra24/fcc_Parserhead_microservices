//var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');
/*
var morgan = require('morgan');

var API = "/api/whoami"
var app = express();


app.use(morgan('dev'));


app.get(API, function(request, response){
    
    console.log(request);
    response.send('ok');
    
    
    
})


app.listen(PORT, function(){
   console.log('Listening on Port ' + PORT);    
});  
*/


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var api = '/api/whoami';

app.get(api, function(req,res, next){
   console.log('100'); 
    
    var language = req.acceptsLanguages();
    var software = "OS:" + req.useragent.os + ", Browser:" + req.useragent.browser;
    
    
    var ipaddress = req.ip;
    
        res.json({'ipaddress':ipaddress, 'language':language[0], 'software': software });
    
    
});
app.listen(3000, function(){
    console.log("Working");
    
}); 