var express = require("express");
var cheerio = require("cheerio");
var axios = require("axios");
var mongoose = require("mongoose");

// Require models
var models = require("./models")

var PORT = 8080;

var app = express();

//CONFIGURE MIDDLEWARE
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

//Connect to MongoDB
mongoose.connect("mongodb://localhost/friends", { useNewUrlParser: true });

app.get("/", function(req, res){
    var counter = 0; 
    var total = 0;

    axios.get("https://petsmartcharities.org/adopt-a-pet/find-a-pet?city_or_zip=94105&species=dog&other_pets=_none&form_build_id=form-Q8G91jKYwU43iYKOE9O6DUusJ5_BtUw4P1YDdC7PBfU&form_id=adopt_a_pet_search_block_form&op=Search").then(function(response){
    var $ = cheerio.load(response.data);
    var pmResults = [];

    total = total + $(".aap-item-wrapper").length

    $(".aap-item-wrapper").each(function(i, element){

        while (i < 21){
            var name = $(element).find("h4").text()
            var breed = $(element).find("h6").text()
            var imgLink = $(element).children(".aap-pet-photo").children("img").attr("src")
            var moreInfo = $(element).find("a").attr("href");
    
            pmResults.push({
                name: name,
                breed: breed,
                imgLink: imgLink,
                moreInfo: moreInfo
            });

            db.Doge.create(result)
            .then(function(dbDoge) {
              // View the added result in the console
              console.log(dbArticle);
              couter++
            })
            .catch(function(err) {
              // If an error occurred, log it
              console.log(err);
            });
        }
    });

    // console.log(pmResults);
    });

    // axios.get("https://www.rocketdogrescue.org/adopt/adoptees/").then(function(response){

    // var $ = cheerio.load(response.data);
    // var rdResults = [];

    // total = total + $(".dog-list").length

    // $(".dog-list").children("li").each(function(i, element){

    //     while (i < 21){
    //         var moreInfo = $(element).find("h3").children("a").attr("href")
    //         var name = $(element).find("h3").children("a").text()
    //         var breed1 = $(element).find(".dog-details").children(".detail").children("a").text()
    //         var breed2 = breed1.replace(/([A-Z])/g, ', $1')
    //         var breed3 = breed2.replace(" , ", " ")
    //         var breed = breed3.slice(2)
    //         var imgLink = $(element).children(".shadow").children("img").attr("src")
    
    //         rdResults.push({
    //             name: name,
    //             breed: breed,
    //             imgLink: imgLink,
    //             moreInfo: moreInfo
    //         });

    //         db.Doge.create(result)
    //         .then(function(dbDoge) {
    //           // View the added result in the console
    //           console.log(dbArticle);
    //           couter++
    //         })
    //         .catch(function(err) {
    //           // If an error occurred, log it
    //           console.log(err);
    //         });
    //     }
    // });

    // // console.log(rdResults);
    // });

    // axios.get("https://adopt.hssvmil.org/search/searchResults.asp?animalType=3%2C16&utm%5Fmedium=adopt%5Fnav&datelostfoundyear=%C2%AEionID%3D%2D1&tpage=1&pagesize=15&s=adoption&searchTypeId=4&sortby=6&statusID=3&submitbtn=Find+Animals&task=view&%3F0%26utm%5Fsource=website&utm%5Fterm=dogs&%5Fga=2%2E3286128%2E1129545607%2E1563410065%2D1435790490%2E1563410065").then(function(response){

    // var $ = cheerio.load(response.data);
    // var hsResults = [];

    // total = total + $(".result-wrapper").length

    // $(".result-wrapper").each(function(i, element){

    //     while (i < 21){
    //         var moreInfo = "https://adopt.hssvmil.org" + $(element).children(".pic-wrap").children("a").attr("href")
    //         var imgLink = "https://adopt.hssvmil.org" + $(element).children(".pic-wrap").children("a").children("img").attr("src")
    //         var name = $(element).children(".name-link").children("a").children(".search-result-name-width").children("#test").text()
    //         var breed1 = $(element).children(".pic-wrap").children(".hovertext").text().trim().split("                ")
    //         var breed = breed1[1]
    
    
    //         hsResults.push({
    //             name: name,
    //             breed: breed,
    //             imgLink: imgLink,
    //             moreInfo: moreInfo
    //         });

    //         db.Doge.create(result)
    //         .then(function(dbDoge) {
    //           // View the added result in the console
    //           console.log(dbArticle);
    //           couter++
    //         })
    //         .catch(function(err) {
    //           // If an error occurred, log it
    //           console.log(err);
    //         });
    //     }
    // });

    // // console.log(hsResults);
    // });

    if(counter === total) {
        res.send("Scrape Complete");
    };

});

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
