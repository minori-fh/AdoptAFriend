getAll()
$("#display").hide()

function getAll(){
    $("#doges").empty();
    
    $.getJSON("/doges", function(data){
    console.log(data.length)
    console.log(data)

    var breeds = [];

    for (var i = 0; data.length; i++){

        var site = data[i].site

        if(site === "petsMart"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class ='logo' src='style/images/petsMart.png' width='70px'>"
                + "</div> </div>"
            )
        }
        if(site === "rocketDog"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/rocketDog.jpg' width='40px'>"
                + "</div> </div>"
            )
        }
        if(site === "hss"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/hss.jpg' width='30px'>"
                + "</div> </div>"
            )
        }

        if (breeds.indexOf(data[i].breed) < 0){

            breeds.push(data[i].breed)

            $("#dropdown-breed").append(
                "<button class='dropdown-item breed' type='button' name='" + data[i].breed + "'>" + data[i].breed + "</button>"
            )
            
        }
        // console.log(breeds)
    };
});
}
$(document).on("click", "#search", function(){
    $.ajax({
        type: "GET",
        url: "/scrape"
    });

    $("#display").show()
});

$(document).on("click","#see-all", function(){
    $.ajax({
        type: "GET",
        url: "/doges"
    });
    getAll()
});

$(document).on("click",".agency", function(){
    var agency = $(this).attr("name");
    console.log(agency)
    $.ajax({
        type: "GET",
        url: "/agency/" + agency
    });
    getAgency(agency)
});

$(document).on("click",".breed", function(){
    var breed = $(this).attr("name");
    console.log(breed)
    $.ajax({
        type: "GET",
        url: "/breed/" + breed
    });
    getBreed(breed)
});

$(document).on("click","#scroll-down",function(){
    $('html,body').animate({
        scrollTop: $("#display").offset().top},
        800); 

});

function getAgency(agency){
    $("#doges").empty();
    $.getJSON("/agency/" + agency, function(data){
        for (var i=0; i<data.length; i++){
            var site = data[i].site

        if(site === "petsMart"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/petsMart.png' width='70px'>"
                + "</div> </div>"
            )
        }
        if(site === "rocketDog"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/rocketDog.jpg' width='40px'>"
                + "</div> </div>"
            )
        }
        if(site === "hss"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/hss.jpg' width='30px'>"
                + "</div> </div>"
            )
        }
        };
    });
}

function getBreed(breed){
    $("#doges").empty();
    $.getJSON("/breed/" + breed, function(data){
        for (var i=0; i<data.length; i++){
        var site = data[i].site

        if(site === "petsMart"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/petsMart.png' width='70px'>"
                + "</div> </div>"
            )
        }
        if(site === "rocketDog"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/rocketDog.jpg' width='40px'>"
                + "</div> </div>"
            )
        }
        if(site === "hss"){
            $("#doges").append(
                "<div class='card' data-id='" + data[i]._id + "'>"
                + "<img src ='" + data[i].imgLink + "' class='card-img-top'>"
                + "<div class='card-body'>"
                + "<h5 class='card-title'>" + data[i].name + "</h5>"
                + "<p class='card-text'>" + data[i].breed + "</p>"
                + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comment</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn btn-primary'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/hss.jpg' width='30px'>"
                + "</div> </div>"
            )
        }
        };
    });
}

$(document).on("click","#write-comment",function(){
    var card = $(this).parents(".card")
    card.children().hide()
    card.append(
        "<div class='switch form-group'>"
        +"<label for='exampleFormControlTextarea1'>Write comment:</label>"
        +"<textarea class='form-control' id='exampleFormControlTextarea1' rows='6'></textarea>"
        +"<p class='submit'>Submit</p>"
        +"</div>"
        +"<button class='switch more-info btn btn-primary go-back'> Go back </button>"
    )
});

$(document).on("click",".go-back", function(){
    var card = $(this).parents(".card")
    card.children().show()
    card.children(".switch").hide()
});

$(document).on("click",".submit", function(){
    var commentArr = []
    var id = $(this).parents(".card").attr("data-id")
    var comment = $(this).siblings("textarea").val()
    commentArr.push(comment)

    console.log(id)
    console.log(comment)

    $.ajax({
        method: "POST",
        url: "/doges/" + id,
        data: {
            body: comment
        }
    })
    .then(function(data){
        console.log(data)
    });

    // empty textarea once user clicks 'submit'
    $(this).siblings("textarea").val("");
});

$(document).on("click","#see-comment",function(){
    var id = $(this).parents(".card").attr("data-id")
    var card = $(this).parents(".card")
    card.children().hide()

    console.log(id)

    $.ajax({
        method: "GET",
        url: "/doges/" + id
    })
    .then(function(data){
        console.log(data)
        card.append(
            "<button class='switch more-info btn btn-primary go-back'> Go back </button>"
        )

        if(data.comment.length > 0){

            for (var i=0; i< data.comment.length; i++){
                console.log(data.comment[i].body)
                card.prepend("<p class='switch comment-body delete' data-id='" +  data.comment[i]._id + "'>delete</p>")
                card.prepend("<p class='switch comment-body' id='main-comment' comment-id='"+ data.comment[i]._id + "'>" + data.comment[i].body + "</p>")
            }

        } else {
            card.prepend("<p class='switch comment-body' id='no-comment'><b>No comments yet</b></p>")
        }
    });
});

$(document).on("click",".delete", function(){
    var id = $(this).parents(".card").attr("data-id")
    console.log(id)
    var card = $(this).parents(".card")
    card.children(".comment-body").empty();
    var cID = $(this).attr("data-id")

    console.log(cID)

    $.ajax({
        method: "DELETE",
        url: "/doges/comment/" + cID
    })
    .then(function(data){
        console.log(data)

        $.ajax({
            method: "GET",
            url: "/doges/" + id
        })
        .then(function(data){
            console.log(data)
            card.append(
                "<button class='switch more-info btn btn-primary go-back'> Go back </button>"
            )
    
            if(data.comment){
    
                for (var i=0; i< data.comment.length; i++){
                    console.log(data.comment[i].body)
                    card.prepend("<p class='switch comment-body delete' data-id='" +  data.comment[i]._id + "'>delete</p>")
                    card.prepend("<p class='switch comment-body' id='main-comment' comment-id='"+ data.comment[i]._id + "'>" + data.comment[i].body + "</p>")
                }
    
            } else {
                card.prepend("<p class='switch comment-body' id='no-comment'><b>No comments yet</b></p>")
            }
        });
    });

});