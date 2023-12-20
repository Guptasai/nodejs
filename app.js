"use strict"
const express = require("express");
const hbs = require("hbs");
const app = express();
const dateArr = [4,5,6];//Actual dates instead of 4 5 and 6
app.use(express.urlencoded({
    extended: false,
}));
app.set("veiw engine","hbs");
app.set("port",process.env.port || 3000);
app.get("/",(req,res)=>{
    res.render("homepage.hbs");
});
app.get("/articles",(req,res)=>{
    res.render("articles.hbs");
});
app.get("/add-article",(req,res)=>{
    res.render("addArticle.hbs");
});
app.get("/articles/:articleNo",(req,res)=>{
    res.render("displayArticles.hbs",{articleNo:req.params.articleNo,date:dateArr[(req.params.articleNo)-1]});
});
app.get("/edit-articles/:articleNo",(req,res)=>{
    res.render("editArticles.hbs",{articleNo:req.params.articleNo});
});
app.get("/delete-articles/:articleNo",(req,res)=>{
    res.render("deleteArticle.hbs",{articleNo:req.params.articleNo});
});

app.post("/articles",(req,res)=>{
    res.render("addedArticle.hbs",{articleName:req.body.articleName,articleContent:req.body.articleContent});
});
app.post("/article/edit",(req,res)=>{
    res.render("editedArticles.hbs",{articleId:req.body.articleId,articleName:req.body.articleName,articleContent:req.body.articleContent});
});
app.post("/article/delete",(req,res)=>{
    res.render("deletedArticles.hbs",{articleId:req.body.articleId})
})
app.listen(app.get("port"),()=>{
    console.log(`Server is running on port: ${app.get("port")}`);
});