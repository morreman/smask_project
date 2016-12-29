$(document).ready(
        function() {
            setInterval(function() {
                    $(".wrapper").empty();
                    var songs = JSON.parse(localStorage.getItem("songs"));
                    for(var i = 0; songs.length; i++){
                      $(".wrapper").append("<div class='row'><div id=songdiv class='col-md-8'><div id='song"+ i +"'><h1>" + songs[i].songname +"</h1></div><div id='artist"
                       + i + "'><h3>" + songs[i].artist + "</h3></div></div><div class='col-md-4' id='pointdiv'><h3>" + songs[i].points + "</h3></div></div>");
                    }
                  }, 1000);
            });
