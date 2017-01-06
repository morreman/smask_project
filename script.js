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
        points = $('.radio_select:checked').val();
        song = {
            "songname": songn,
            "artist": artist,
            "points": points
        };
        songs.push(song);
        localStorage.setItem("songs", JSON.stringify(songs));
    } else {
        songs = JSON.parse(localStorage.getItem("songs"));
        songn = $("#songname").val();
        artist = $("#artistname").val();
        points = $('.radio_select:checked').val();
        song = {
            "songname": songn,
            "artist": artist,
            "points": points
        };
        console.log(song);
        songs.push(song);
        localStorage.setItem("songs", JSON.stringify(songs));
        $("#songname").val("");
        $("#artistname").val("");
    }
}

function updateList(songlist) {
    $("#songlist").empty();
    for (var i = 0; i < songlist.length; i++) {
        $("#songlist").append("<div id='songlistsong'" + i + "><div id ='text' class='row'><div class='col-md-10'><h1>" +
            songlist[i].songname + "</h1></div><div id = 'buttons' class='row'>" +
            "<div class='col-sm-12'><button type='button' class='point_button btn btn-default'>Default</button>" +
            "<button type='button' class='point_button btn btn-info'>Info</button>" +
            "<button type='button' class='point_button btn btn-success'>Success</button>" +
            "<button type='button' class='point_button btn btn-warning'>Warning</button>" +
            "<button type='button' class='point_button btn btn-primary'>Primary</button>" +
            "<button type='button' class='point_button btn btn-danger'>Danger</button></div></div></div>");
    }
}

function submitPoints(songlist){
  for(var i = 0; i < songlist.length; i++){
    songlist[i].points = songlist[i].points + songlist[i].currentpoints;
    songlist[i].currentpoints = 0;
  }
  localStorage.setItem("songs", JSON.stringify(songlist));
}
