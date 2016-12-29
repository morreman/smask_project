var songs= [];

$("#submit").click(function(){
  addSongToJson();
  songlist = JSON.parse(localStorage.getItem("songs"));
  updateList(songlist);
});

function addSongToJson(){
  if(JSON.parse(localStorage.getItem("songs") == null)){
    songn = $("#songname").val();
    artist = $("#artistname").val();
    song = {"songname" : songn, "artist" : artist, "points": 0};
    songs.push(song);
    localStorage.setItem("songs", JSON.stringify(songs));
  }else{
    songs = JSON.parse(localStorage.getItem("songs"));
    songn = $("#songname").val();
    artist = $("#artistname").val();
    song = {"songname" : songn, "artist" : artist, "points": 0};
    console.log(song);
    songs.push(song);
    localStorage.setItem("songs", JSON.stringify(songs));
    $("#songname").val("");
    $("#artistname").val("");
    }
}
function updateList(songlist){
  for(var i = 0; i < songlist.length; i++){
    $("#songlist").append("<div id='songlistsong'" + i + "><div id ='text' class='row'><div class='col-md-10'><h1>"
    + songlist[i].songname + "</h1></div><div id = 'buttons' class='row'><div class='col-md-10'><button type='button' class='btn btn-default'>Default</button></div></div></div>");
  }
}
