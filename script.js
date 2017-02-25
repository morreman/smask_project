var songs = [];

$("#submit").click(function(e) {
    addSongToJson();
    songlist = JSON.parse(localStorage.getItem("songs"));
    updateList(songlist);
    e.preventDefault();
});

$("#submitpoints").click(function(e) {
    songlist = JSON.parse(localStorage.getItem("songs"));
    submitPoints(songlist);
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
        $("#songlist").append("<div id='songlistsong" + i + "'><div id ='text' class='row'><div class='col-md-12'><h1>" + songlist[i].startnbr + ". " +
            songlist[i].songname + "</h1></div><div id = 'buttons' class='row'>" +
            "<div class='col-sm-8'><button value='2' type='button' id='btn2" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-default'>2</button>" +
            "<button value='4' type='button' id='btn4" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-info'>4</button>" +
            "<button value='6' type='button'id='btn6" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-success'>6</button>" +
            "<button value='8' type='button'id='btn8" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-warning'>8</button>" +
            "<button value='10' type='button' id='btn10" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-primary'>10</button>" +
            "<button value='12' type='button' id='btn12" + songlist[i].artist + "' data-song='" + songlist[i].artist + "' class='point_button btn btn-danger'>12</button>" +
            "<div class='form-group col-sm-2 pull-right'><label class='lblOther' for='other_points'>Other:</label><input type='text' data-song='" + songlist[i].artist + "' class='other_points form-control'>" +
            "<button value='other' id='" + songlist[i].artist + "' type='reset' class='point_button btn btn-info'>Enter</button></div></div></div></div>");
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
        counter++;
        highlight(event.target.id, event.target.parentNode, counter);
        if (counter == 2) {
            counter = 0;
        }
        localStorage.setItem("songs", JSON.stringify(updateList));
    } else if (event.target.type == 'reset') {
        var clicked_song_points = event.target.parentNode;
        var lbl = $(clicked_song_points).children().first();
        clicked_song_points = $(clicked_song_points).children().eq(1).val();
        var clicked_song = event.target.id;
        for (var i = 0; i < updateList.length; i++) {
            if (clicked_song == updateList[i].artist) {
                updateList[i].currentpoints = parseInt(clicked_song_points);
                if (!lbl.html().includes('span')) {
                    lbl.append('<span class="glyphicon glyphicon-ok"></span>');
                }
            }
        }
        localStorage.setItem("songs", JSON.stringify(updateList));
    }
    e.preventDefault();
});

var isClicked = false;

function highlight(id, parentDiv, counter) {
    var buttons = $(parentDiv).children();
    var element = document.getElementById(id);
    console.log(counter);
    if (counter == 1) {
        console.log("nu i 1");
        isClicked = !isClicked;
        element.style.width = (isClicked == true) ? "70px" : "70px";
        element.style.height = (isClicked == true) ? "70px" : "70px";
    }
    if (counter == 2) {
        console.log("nu i 2");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].style.width == "70px") {
                buttons[i].style.width = "39px";
                buttons[i].style.height = "39px";
            }
        }
    }

}
