
var albumArray = [];
//Search in Musixmatch api requires u to find the artist ID# to search instead of artist name
var artistID = '';
$('#getAlbums').on("click", getArtist)


function getArtist(){

var artistSearch = $("#artist-name").val();
$.ajax({
    method: "GET",
    data: {
        apikey:"58bdb166636ac0d28780a0fbb30f6652",
        q_artist: artistSearch,
        format:"json"
        
    },
    url: "https://api.musixmatch.com/ws/1.1/artist.search"
   


})
.then(function(data){
console.log(data);

})

}

