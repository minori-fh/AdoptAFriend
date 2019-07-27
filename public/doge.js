getAll()

// Function to append all doges to HTML DOM
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/rocketDog.png' width='40px'>"
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
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

        // breeds.sort();
        // for (var i=0; i<breeds.length; i++){
        //     $("#dropdown-breed").append(
        //         "<button class='dropdown-item breed' type='button' name='" + breeds[i] + "'>" + breeds[i] + "</button>"
        //     )
        // }

        $("#display").hide()
    };
    });

};

// Event handler to perform scrape when user clicks on 'start your search' 
// $(document).on("click", "#scroll-down", function(){
//     $.ajax({
//         type: "GET",
//         url: "/scrape"
//     });
// });

// Event handler to get all doges when user clicks 'see all' 
$(document).on("click","#see-all", function(){

    $("#doges").empty();
    $("#dropdown-breed").empty();
    $("#dropdown-breed").append(
        "<span class='dropdown-header dropdown-item-text' id='filter-by-breed'><b>FILTER BY BREED</b></span>"
    )

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
                    + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                    // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                    + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
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
                    + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                    // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                    + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
                    + "<img class = 'logo' src='style/images/rocketDog.png' width='40px'>"
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
                    + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                    // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                    + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
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
        };
        });
});


// Event handler to get doges of a particular agency when user clicks on an agency
$(document).on("click",".agency", function(){
    var agency = $(this).attr("name");
    console.log(agency)
    $.ajax({
        type: "GET",
        url: "/agency/" + agency
    });
    getAgency(agency)
});

// Event handler to get all doges of a particular breed when user clicks on a breed 
$(document).on("click",".breed", function(){
    var breed = $(this).attr("name");
    console.log(breed)
    $.ajax({
        type: "GET",
        url: "/breed/" + breed
    });
    getBreed(breed)
});

// Event handler for scrolling down animation
$(document).on("click",".search",function(){
    $("#display").show()

    $('html,body').animate({
        scrollTop: $("#display").offset().top},
        800); 

});

// Function to append doges of a particular agency to HTML DOM
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/rocketDog.png' width='40px'>"
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/hss.jpg' width='30px'>"
                + "</div> </div>"
            )
        }
        };
    });
}

// Function to append doges of a particular breed to HTML DOM
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/rocketDog.png' width='40px'>"
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
                + "<button id='see-comment'> See comments </button><button id='write-comment'> Write comments </button>"
                // + "<p id='see-comment'><b>See comments</b></p><p id='write-comment'><b>Write comments</b></p>"
                + "<a href='" + data[i].moreInfo + "' class='more-info btn visit-site-btn'> Visit Site </a>"
                + "<img class = 'logo' src='style/images/hss.jpg' width='30px'>"
                + "</div> </div>"
            )
        }
        };
    });
}

// Event handler for when user clicks on 'Write comments'
$(document).on("click","#write-comment",function(){
    var card = $(this).parents(".card")

    // Hide the doge display in card and append a textarea for user to write his/her comment
    card.children().hide()
    card.append(
        "<p class='switch write-comment-description'>Write comments:</p>"
        +"<div class='switch form-group'>"
        +"<textarea class='form-control' id='exampleFormControlTextarea1' rows='6'></textarea>"
        +"</div>"
        +"<p class='submit'>Submit</p>"
        +"<button class='switch more-info btn go-back'> Go back </button>"
    )

    $(this).siblings(".form-group").children("#comment-empty").remove();
});

// Event handler for when user clicks 'go back' on the Write comments card
$(document).on("click",".go-back", function(){
    var card = $(this).parents(".card")
    // Show the original contents of the card and hide the textarea for writing comments
    card.children().show()
    card.children(".switch").hide()
    card.children(".submit").hide()
});

// Event handler for when user clicks 'submit' to submit a comment
$(document).on("click",".submit", function(){
    var commentArr = []
    var id = $(this).parents(".card").attr("data-id")
    var comment = $(this).siblings(".form-group").children("textarea").val()
    commentArr.push(comment)

    console.log(id)
    console.log(comment)

    if (comment === ""){

        console.log("emptyAF")
        console.log($(this).siblings(".form-group").children("#comment-empty").length)
        if($(this).siblings(".form-group").children("#comment-empty").length === 0 || $(this).siblings(".form-group").children("#comment-empty").text() === ""){
            $(this).siblings(".form-group").append("<p class='switch' id='comment-empty'>Comment cannot be empty!<p>")
            console.log($(this).siblings(".form-group").children("#comment-empty").text())
        } 

    } else {

        console.log("notemptyAF")
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
        $(this).siblings(".form-group").children("textarea").val("");
    }

});

// Event handler for when user clicks on 'see comment' 
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

// Event handler for when user wishes to delete a particular comment
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

});