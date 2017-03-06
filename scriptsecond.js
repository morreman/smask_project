$(document).ready(
    function() {
        setInterval(function() {
            $(".wrapper").empty();
            var songs = JSON.parse(localStorage.getItem("songs"));
            var scores = [];
            var displayed = [];
            var index = 0;
            if (songs != null) {
                for (var k = 0; k < songs.length; k++) {
                    scores.push(songs[k].points);
                }
                scores = scores.sort((a, b) => a - b);
                for (var i = 0; i < songs.length; i++) {
                    index = scores.pop();
                    for (var j = 0; j < songs.length; j++) {
                        if (index == songs[j].points &&  !displayed.includes(songs[j].songname)) {
                            $(".wrapper").append("<div id='apa' class='row'><div id=songdiv><div class='col-sm-6' id='song" + j + "'><h1>" + songs[j].startnbr + ". " + songs[j].songname + "</h1><div class='row col-sm-12' id='artist" + j + "'><h3>" + songs[j].artist +
                                "</h3></div></div><div id='shadow'><div class='col-sm-2 pointdivfull dansk' id='pointdiv'><h1>" + songs[j].points + "</h1></div><div class='col-sm-2 pointdivcur dansk' id='pointdiv'><h1>" + songs[j].currentpoints + "</h1></div>" +
                                "</div></div></div></div><hr>");
                            displayed.push(songs[j].songname);
                            $("#song" + j).css('background-image', 'url("gold.jpg")');
                            $("#song" + j).css('border-radius', '70px 20px 140px 20px');
                            $("#song" + j).css('box-shadow', '10px 10px 5px #888888');
                            if (songs[j].jumpanimate) {
                                $("#song" + j).addClass("animated bounce");
                                songs[j].jumpanimate = false;
                            }
                        }
                    }


                }
                if (songs[0].fadeanimate) {
                    $(".pointdivcur").addClass("animated bounceIn");
                    $(".pointdivfull").addClass("animated bounceIn");
                    songs[0].fadeanimate = false;
                }
                localStorage.setItem('songs', JSON.stringify(songs));
            }
        }, 1000);

    });
