$(document).ready(
    function() {
        setInterval(function() {
            $(".wrapper").empty();
            var songs = JSON.parse(localStorage.getItem("songs"));
            if (songs != null) {
                for (var i = 0; i < songs.length; i++) {
                    $(".wrapper").append("<div id='apa' class='row'><div id=songdiv><div class='col-sm-6' id='song" + i + "'><h1>" + songs[i].songname + "</h1><div class='row col-sm-12' id='artist" + i + "'><h3>" + songs[i].artist +
                    "</h3></div></div><div class='col-sm-2' id='pointdiv'><h1 size='100px'><b>" + songs[i].currentpoints + "</b></h1></div><div class='col-sm-2' id='pointdiv'><h1><b>" + songs[i].points +
                    "</b></h1></div><div class='row col-sm-12'></div></div></div><hr>");
                }
            }
        }, 1000);
    });
