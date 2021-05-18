const express=require("express");
const path=require("path");
const fs=require("fs");
const { json } = require("express");
const app=express();
const port=80;

app.use(express.static(path.join(__dirname,"/static")));
app.use(express.urlencoded());

app.set("view engine","pug");
app.set("views",path.join(__dirname,"./views"));

app.get("/contact",(req,res)=>{
    res.status(200).render("contact");
});
app.get("/",(req,res)=>{
    res.status(200).render("index");
});
app.post("/contact",(req,res)=>{
    fs.writeFileSync("contact.txt",JSON.stringify( req.body));
    res.status(200).render("contact");
});
// app.get("/home",(req,res)=>{

//     res.status(200).render("home");
// });
app.listen(port,()=>{
    console.log(`your server is listen at port-: ${port}`);
});