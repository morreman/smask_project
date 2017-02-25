$(document).ready(
    function() {
        setInterval(function() {
            $(".wrapper").empty();
            var songs = JSON.parse(localStorage.getItem("songs"));
            if (songs != null) {
                for (var i = 0; i < songs.length; i++) {
                    $(".wrapper").append("<div id='apa' class='row'><div id=songdiv><div class='col-sm-6' id='song" + i + "'><h1>" + songs[i].startnbr + ". " + songs[i].songname + "</h1><div class='row col-sm-12' id='artist" + i + "'><h3>" + songs[i].artist +
                        "</h3></div></div><div class='col-sm-2 pointdivfull' id='pointdiv'><h1>" + songs[i].points + "</h1></div><div class='col-sm-2 pointdivcur' id='pointdiv'><h1>" + songs[i].currentpoints + "</h1></div>" +
                        "</div></div><hr>");
                    $("#song" + i).css('background-color', '#861A51');
                    $("#song" + i).css('border-radius', '70px 20px 140px 20px');
                    if (songs[i].jumpanimate) {
                        $("#song" + i).addClass("animated bounce");
                        songs[i].jumpanimate = false;
                    }
                }
                if (songs[0].fadeanimate){
                    $(".pointdivcur").addClass("animated fadeOutRight");
                    $(".pointdivfull").addClass("animated fadeOutRight");
                    songs[0].fadeanimate = false;
                }
                localStorage.setItem('songs', JSON.stringify(songs));
            }
        }, 1000);

    });
