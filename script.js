var songs= [];

$(".btn-warning").click(function(){
  apa = $(".btn-warning").text();
  localStorage.setItem("lastname", apa);
});
$(".btn-danger").click(function(){
  apa = $(".btn-danger").text();
  localStorage.setItem("lastname", apa);
});
$(".btn-success").click(function(){
  apa = $(".btn-success").text();
  localStorage.setItem("lastname", apa);
});
$(".btn-info").click(function(){
  apa = $(".btn-info").text();
  localStorage.setItem("lastname", apa);
});
$(".btn-primary").click(function(){
  apa = $(".btn-primary").text();
  localStorage.setItem("lastname", apa);
});
$(".btn-default").click(function(){
  apa = $(".btn-default").text();
  localStorage.setItem("lastname", apa);
});

$("#submit").click(function(){
  addSongToJson();
});

function addSongToJson(){
  if(JSON.parse(localStorage.getItem("songs") == null)){
    songn = $("#songname").val();
    artist = $("#artistname").val();
    song = {"songname" : songn, "artist" : artist};
    songs.push(song);
    localStorage.setItem("songs", JSON.stringify(songs));
  }else{
    songs = JSON.parse(localStorage.getItem("songs"));
    songn = $("#songname").val();
    artist = $("#artistname").val();
    song = {"songname" : songn, "artist" : artist};
    console.log(song);
    songs.push(song);
    localStorage.setItem("songs", JSON.stringify(songs));
    $("#songname").val("");
    $("#artistname").val("");
    }
}
