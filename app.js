//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
app.use(express.static("public"));

app.set("view engine", "ejs");

  var items = [];
  var workItems = [];

app.get("/",function(req,res){

let day = date();

  res.render("list",{listTitle : day, newListItems : items});


});

app.get("/work",function(req,res){

  var work = "Work Items";
  res.render("list",{listTitle : work, newListItems : workItems});
});

/*app.post("/work",function(req,res){

  var workItem = req.body.item1;

  workItems.push(workItem);

  res.redirect("/work");

  console.log(req.body.item1);

});*/


app.listen(3000,function(){
  console.log("Server started on port 3000.");
});

app.use(bodyParser.urlencoded({ extended: true}));

app.post("/",function(req,res){

var item = req.body.item1;

if(req.body.list === "Work Items"){
  workItems.push(item);
  console.log(req.body.item1);
  res.redirect("/work");
}
else{
  items.push(item);

  res.redirect("/");
  console.log(req.body.item1);
}
});


app.get("/about",function(req,res){
  res.render("about");
});
