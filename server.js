var cheerio = require("cheerio");
var axios = require("axios");


// axios.get("https://www.petfinder.com/search/dogs-for-adoption/us/ca/san-francisco/").then(function(response){

//     var $ = cheerio.load(response.data);
//     var results = [];

//     $("pfdc-animal-search-results").each(function(i, element){

//         // console.log(element)

//         var test = $(element).closest().children(".petCard_result")
//         var pet = test.find("a").attr("href")
//         console.log(pet)
//         // var moreInfo = $(element).find("a").attr("href")
//         // var imgLink = $(element).find("img").attr("src")

//         // console.log(moreInfo)
//         // console.log(imgLink)

//         // results.push({
//         //     moreInfo: moreInfo,
//         //     imgLink: imgLink
//         // });
//     });

//     // console.log(results);
// });

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

    console.log(pmResults);
});