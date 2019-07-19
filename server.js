var express = require("express");
var cheerio = require("cheerio");
var axios = require("axios");
var mongoose = require("mongoose");

// Require models
var db = require("./models")

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

app.get("/scrape", function(req, res){

    axios.get("https://petsmartcharities.org/adopt-a-pet/find-a-pet?city_or_zip=94105&species=dog&other_pets=_none&form_build_id=form-Q8G91jKYwU43iYKOE9O6DUusJ5_BtUw4P1YDdC7PBfU&form_id=adopt_a_pet_search_block_form&op=Search").then(function(response){
    
    var $ = cheerio.load(response.data);

        $(".aap-item-wrapper").each(function(i, element){
  
                var pmResults = {};
            
                pmResults.name = $(element).find("h4").text();
                pmResults.breed = $(element).find("h6").text();
                pmResults.imgLink = $(element).children(".aap-pet-photo").children("img").attr("src");
                pmResults.moreInfo = $(element).find("a").attr("href")
                
                db.Doge.create(pmResults)
                .then(function(dbDoge) {
                  // View the added result in the console
                  console.log(dbDoge);
                })
                .catch(function(err) {
                  // If an error occurred, log it
                  console.log(err);
                });
        });
    });


    axios.get("https://www.rocketdogrescue.org/adopt/adoptees/").then(function(response){

    var $ = cheerio.load(response.data);

        $(".dog-list").children("li").each(function(i, element){

            var rdResults = {};
        
            rdResults.name = $(element).find("h3").children("a").text()
            rdResults.moreInfo = $(element).find("h3").children("a").attr("href")
            var breed1 = $(element).find(".dog-details").children(".detail").children("a").text()
            var breed2 = breed1.replace(/([A-Z])/g, ', $1')
            var breed3 = breed2.replace(" , ", " ")
            rdResults.breed = breed3.slice(2)
            rdResults.imgLink = $(element).children(".shadow").children("img").attr("src")

            db.Doge.create(rdResults)
            .then(function(dbDoge) {
            // View the added result in the console
            console.log(dbDoge);
            })
            .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
            });
        });
    // console.log(rdResults);
    });

    axios.get("https://adopt.hssvmil.org/search/searchResults.asp?animalType=3%2C16&utm%5Fmedium=adopt%5Fnav&datelostfoundyear=%C2%AEionID%3D%2D1&tpage=1&pagesize=15&s=adoption&searchTypeId=4&sortby=6&statusID=3&submitbtn=Find+Animals&task=view&%3F0%26utm%5Fsource=website&utm%5Fterm=dogs&%5Fga=2%2E3286128%2E1129545607%2E1563410065%2D1435790490%2E1563410065").then(function(response){

    var $ = cheerio.load(response.data);

    $(".result-wrapper").each(function(i, element){
        var hsResults = {};

        hsResults.moreInfo = "https://adopt.hssvmil.org" + $(element).children(".pic-wrap").children("a").attr("href")
        hsResults.imgLink = "https://adopt.hssvmil.org" + $(element).children(".pic-wrap").children("a").children("img").attr("src")
        hsResults.name = $(element).children(".name-link").children("a").children(".search-result-name-width").children("#test").text()
        var breed1 = $(element).children(".pic-wrap").children(".hovertext").text().trim().split("                ")
        hsResults.breed = breed1[1]

        db.Doge.create(hsResults)
        .then(function(dbDoge) {
            // View the added result in the console
            console.log(dbDoge);
            couter++
        })
        .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
        });
    
    });

    // console.log(hsResults);
    });

    res.send("Scrape Complete");
});

app.get("/doges", function(req, res){
    db.Doge.find({})
    .then(function(dbDoge){
        res.json(dbDoge)
    })
    .catch(function(err){
        res.json(err)
    })
});

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
