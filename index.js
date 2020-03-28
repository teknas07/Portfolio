const express =  require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs"); 


const app = express();
const router = express.Router();

app.set('view engine' ,'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var page_name;

app.get("/",function(req,res){
    res.render("home",{page_name:"home"});
});

app.get("/about",function(req,res){
    res.render("about",{page_name:"about"});
});

app.get("/skills",function(req,res){
    res.render("skills",{page_name:"skills"});
});

app.get("/work",function(req,res){
    res.render("work",{page_name:"work"});
});

app.get("/contact",function(req,res){
    res.render("contact",{page_name:"contact"});
});

app.get("/resume",function(req,res){
    var filePath = "/resume/Resume.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started on port 3000");
});
