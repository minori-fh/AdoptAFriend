$.getJSON("/doges", function(data){
    console.log(data.length)
    console.log(data)
    for (var i = 0; data.length; i++){
        $("#doges").append(
            "<div class='card'>"
            + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
            + "<div class='card-body'>"
            + "<h5 class='card-title'>" + data[i].name + "</h5>"
            + "<p class='card-text'>" + data[i].breed + "</p>"
            + "<a href='" + data[i].moreInfo + "' class='btn btn-primary'> Visit Site </a>"
            + "</div> </div>"
        )
    };
});
