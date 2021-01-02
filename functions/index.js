
var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
  
var db = mongo.connect("mongodb+srv://***Your connection string***", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
  
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 var Schema = mongo.Schema;  
  
var MoviesSchema = new Schema({      
 Industry: { type: String },       
 Actor: { type: String },
 Year: { type: String },
 Title: { type: String },
 Role: { type: String },
 Director: { type: String },
 Language: { type: String },
},{ versionKey: false });  
  
var model = mongo.model('IndianMovies', MoviesSchema, 'IndianMovies');  
  

 app.get("/api/getMovies",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
})  
