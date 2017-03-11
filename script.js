var songs = [];
var enterbutton = [];
$("#submit").click(function(e) {
    addSongToJson();
    songlist = JSON.parse(localStorage.getItem("songs"));
    updateList(songlist);
    e.preventDefault();
});

$("#submitpoints").click(function(e) {
    songlist = JSON.parse(localStorage.getItem("songs"));
    submitPoints(songlist);
    $(".hint").hide();
    for(var i = 0; i < enterbutton.length; i++){
      enterbutton[i].fadeIn(1000);
    }
    e.preventDefault();
});

function addSongToJson() {
    if (JSON.parse(localStorage.getItem("songs") == null)) {
        songn = $("#songname").val();
        artist = $("#artistname").val();
        startnbr = $("#startnbr").val();
        song = {
            "songname": songn,
            "artist": artist,
            "points": 0,
            "currentpoints": 0,
            "startnbr": startnbr,
            "jumpanimate": false,
            "fadeanimate": false
        };
        songs.push(song);
        localStorage.setItem("songs", JSON.stringify(songs));
        $("#songname").val("");
        $("#artistname").val("");
        $("#startnbr").val("");
    } else {
        songs = JSON.parse(localStorage.getItem("songs"));
        songn = $("#songname").val();
        artist = $("#artistname").val();
        startnbr = $("#startnbr").val();
        song = {
            "songname": songn,
            "artist": artist,
            "points": 0,
            "currentpoints": 0,
            "startnbr": startnbr,
            "jumpanimate": false,
            "fadeanimate": false
        };
        console.log(song);
        songs.push(song);
        localStorage.setItem("songs", JSON.stringify(songs));
        $("#songname").val("");
        $("#artistname").val("");
        $("#startnbr").val("");
    }
}

function updateList(songlist) {
    $("#songlist").empty();
    for (var i = 0; i < songlist.length; i++) {
        $("#songlist").append("<div class='col-sm-6' id='songlistsong" + i + "'><div id ='text' class='row'><div class='col-md-12'><h1 class='col-sm-10'>" + songlist[i].startnbr + ". " +
            songlist[i].songname + "</h1><h3 class='hint col-sm-1' id='klickpoint" + i + "'></h3></div><div id = 'buttons' class=''>" +
            "<div class='col-sm-12'><button value='2' type='button' id='btn2" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-default'>2</button>" +
            "<button value='4' type='button' id='btn4" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-info'>4</button>" +
            "<button value='6' type='button'id='btn6" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-success'>6</button>" +
            "<button value='8' type='button'id='btn8" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-warning'>8</button>" +
            "<button value='10' type='button' id='btn10" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-primary'>10</button>" +
            "<button value='12' type='button' id='btn12" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-danger'>12</button>" +
            "<label class='lblOther' for='other_points'>Other:</label><div class='col-sm-3 pull-right otherInput'><input type='text' data-song='" + songlist[i].artist + "' class='other_points form-control'></div>" +
            "<button value='other' id='" + songlist[i].artist + "' type='reset' class='btn btn-info'>Enter</button></div></div></div>");
        $('#songlistsong' + i).css('border-style', 'outset');
        $('#songlistsong' + i).css('margin', '0px');
        $('#songlistsong' + i).css('padding', '20px');
        $('#songlistsong' + i).css('background-color', 'white');
    }

}

function submitPoints(songlist) {
    for (var i = 0; i < songlist.length; i++) {
        songlist[i].points = songlist[i].points + songlist[i].currentpoints;
        songlist[i].currentpoints = 0;
        songlist[0].fadeanimate = true;
    }
    localStorage.setItem("songs", JSON.stringify(songlist));
    $('.other_points').val("");
    $('.lblOther').html("Other:");
}
var counter = 0;
addEventListener("click", function(e) {
    var updateList = JSON.parse(localStorage.getItem("songs"));
    if (event.target.type == "button") {
        var clicked_song = event.target.getAttribute('data-song');
        for (var i = 0; i < updateList.length; i++) {
            if (clicked_song == updateList[i].artist) {
                updateList[i].currentpoints = parseInt(event.target.value);
                updateList[i].jumpanimate = true;
            }
        }
        localStorage.setItem("songs", JSON.stringify(updateList));
    } else if (event.target.type == 'reset') {
        console.log(event.target.parentNode.childNodes[8]); //
        var textfield = event.target.parentNode.childNodes[7].firstChild.value; //
        var clicked_song_points = textfield; // ANTAL POÄNG.
        var temp = event.target.parentNode;
        var lbl = $(temp).children().last();
        enterbutton.push(lbl);
        var clicked_song = event.target.id;
        for (var i = 0; i < updateList.length; i++) {
            if (clicked_song == updateList[i].artist) {
                updateList[i].currentpoints = parseInt(clicked_song_points);
                if (textfield > 0) {
                    lbl.fadeOut(1000);
                }
            }
        }
        localStorage.setItem("songs", JSON.stringify(updateList));
    }
    if (event.target.className.split(" ")[0] == "point_button") {
        var myh3tag = event.target.parentNode.parentNode.parentNode.firstChild.lastChild;
        myh3tag.innerHTML = event.target.value;
        $(myh3tag).fadeIn();
    }
    e.preventDefault();
});

function changeform() {
    if ($('.hide_form').is(':visible')) {
        $('.hide_form').hide();
        $('#hideformbtn').html("Visa Formulär")
    } else {
        $('.hide_form').show();
        $('#hideformbtn').html("Dölj Formulär")
    }
}

function updatePage() {
    temp = JSON.parse(localStorage.getItem("songs"));
    updateList(temp);
}

function editPoint(song, points) {
    temp2 = JSON.parse(localStorage.getItem("songs"));
    for (var i = 0; i < temp2.length; i++) {
        if (song == temp2[i].songname) {
            temp2[i].points = points;
            localStorage.setItem("songs", JSON.stringify(temp2));
            console.log("uppdaterade " + song + " poäng till " + points);
        }
    }
}
