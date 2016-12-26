$(document).ready(
        function() {
            setInterval(function() {
                    $(".wrapper").empty();
                    var songs = JSON.parse(localStorage.getItem("songs"));
                    console.log(songs[0].songname);
                    for(var i = 0; songs.length; i++){
                      console.log(songs[i].songname);
                      $(".wrapper").append("<div id=songdiv><div id='song"+ i +"'><h1>" + songs[i].songname +"</h1></div><div id='artist" + i + "'><h3>" + songs[i].artist + "</h3></div></div>");
                    }
                  }, 1000);
            });
