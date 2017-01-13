$(document).ready(
    function() {
        setInterval(function() {
            $(".wrapper").empty();
            var songs = JSON.parse(localStorage.getItem("songs"));
            if (songs != null) {
                for (var i = 0; i < songs.length; i++) {
                    $(".wrapper").append("<div class='row col-sm-12'><div id=songdiv><div class='col-sm-4' id='song" + i + "'><h1>" + songs[i].songname + "</h1></div><div class='col-sm-4' id='artist" +
                        i + "'><h3>" + songs[i].artist + "</h3></div><div class='col-sm-2' id='pointdiv'><h3><b>" + songs[i].currentpoints + "</b></h3></div><div class='col-sm-2' id='pointdiv'><h3><b>" + songs[i].points + "</b></h3></div></div></div>");
                }
            }
        }, 1000);
    });
