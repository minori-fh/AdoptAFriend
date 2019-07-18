var cheerio = require("cheerio");
var axios = require("axios");

axios.get("https://petsmartcharities.org/adopt-a-pet/find-a-pet?city_or_zip=94105&species=dog&other_pets=_none&form_build_id=form-Q8G91jKYwU43iYKOE9O6DUusJ5_BtUw4P1YDdC7PBfU&form_id=adopt_a_pet_search_block_form&op=Search").then(function(response){

    var $ = cheerio.load(response.data);
    var pmResults = [];

    $(".aap-item-wrapper").each(function(i, element){

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
    });

    // console.log(pmResults);
});

axios.get("https://www.rocketdogrescue.org/adopt/adoptees/").then(function(response){

    var $ = cheerio.load(response.data);
    var rdResults = [];

    $(".dog-list").children("li").each(function(i, element){

        var moreInfo = $(element).find("h3").children("a").attr("href")
        var name = $(element).find("h3").children("a").text()
        var breed1 = $(element).find(".dog-details").children(".detail").children("a").text()
        var breed2 = breed1.replace(/([A-Z])/g, ', $1')
        var breed3 = breed2.replace(" , ", " ")
        var breed = breed3.slice(2)
        var imgLink = $(element).children(".shadow").children("img").attr("src")

        rdResults.push({
            name: name,
            breed: breed,
            imgLink: imgLink,
            moreInfo: moreInfo
        });
    });

    // console.log(rdResults);
});

axios.get("https://adopt.hssvmil.org/search/searchResults.asp?animalType=3%2C16&utm%5Fmedium=adopt%5Fnav&datelostfoundyear=%C2%AEionID%3D%2D1&tpage=1&pagesize=15&s=adoption&searchTypeId=4&sortby=6&statusID=3&submitbtn=Find+Animals&task=view&%3F0%26utm%5Fsource=website&utm%5Fterm=dogs&%5Fga=2%2E3286128%2E1129545607%2E1563410065%2D1435790490%2E1563410065").then(function(response){

    var $ = cheerio.load(response.data);
    var hsResults = [];

    $(".result-wrapper").each(function(i, element){

        var moreInfo = "https://adopt.hssvmil.org" + $(element).children(".pic-wrap").children("a").attr("href")
        var imgLink = "https://adopt.hssvmil.org" + $(element).children(".pic-wrap").children("a").children("img").attr("src")
        var name = $(element).children(".name-link").children("a").children(".search-result-name-width").children("#test").text()
        var breed1 = $(element).children(".pic-wrap").children(".hovertext").text().trim().split("                ")
        var breed = breed1[1]


        hsResults.push({
            name: name,
            breed: breed,
            imgLink: imgLink,
            moreInfo: moreInfo
        });
    });

    console.log(hsResults);
});