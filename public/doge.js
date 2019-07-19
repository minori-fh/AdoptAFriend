$.getJSON("/doges", function(data){
    console.log(data.length)
    console.log(data)

    var breeds = [];

    for (var i = 0; data.length; i++){

        var site = data[i].site

        if(site === "petsMart"){
            $("#doges").append(
                "<div class='card'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<a href='" + data[i].moreInfo + "' class='btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/petsMart.png' width='70px'>"
                + "</div> </div>"
            )
        }
        if(site === "rocketDog"){
            $("#doges").append(
                "<div class='card'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<a href='" + data[i].moreInfo + "' class='btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/rocketDog.jpg' width='40px'>"
                + "</div> </div>"
            )
        }
        if(site === "hss"){
            $("#doges").append(
                "<div class='card'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<a href='" + data[i].moreInfo + "' class='btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/hss.jpg' width='30px'>"
                + "</div> </div>"
            )
        }

        if (breeds.indexOf(data[i].breed) < 0){

            breeds.push(data[i].breed)

            $("#dropdown-breed").append(
                "<button class='dropdown-item' type='button'>" + data[i].breed + "</button>"
            )
            
        }
        // console.log(breeds)
    };
});
