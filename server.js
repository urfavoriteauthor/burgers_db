var express= require("express");
var bodyparser = require("body-parser");
var exphbs=require("express-handlebars");
var methodOverride =require("method-override")


var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyparser.urlencoded({
    extended:false
}))

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}))

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine" ,"handlebars");

var router = require(`./controllers/burgers_controller.js`);
app.use("/", router);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
