$("#submit").on('click',function(event){
event.preventDefault();
 var tracknameinput=$('#trackname-input').val();
 var artistnameinput=$('#artistname-input').val();

 //token is like an API key
var token='BQDMsr1gP_o6R780XjrIaazujsZjVsv_-GeArIhVNITlJyll1v_PxC777MSQNTrEbfzbfKjND5jbaI6srYtUEdPlMy00WB-sYj1fUILrq_O1wuKOiZYxI0MKykfeoETQ13yK0a5LnmMRjiX1V1PhumdWgMUYdnm_9dS4Qw';
 //queryURL which can get the track
var queryURL = "https://api.spotify.com/v1/search?q=";
if(tracknameinput){
    queryURL +=" track:"+tracknameinput;
}
if(artistnameinput){
    queryURL +=" artist:"+artistnameinput;
}
queryURL += "&type=track&limit=1";
console.log(queryURL);
 console.log(tracknameinput);
 console.log(artistnameinput);
 $.ajax({
     url:queryURL,
     headers: {
        Authorization: 'Bearer ' + token
      },
     method:'GET'
 }).then(function(response){
var result=response.tracks.items[0];
//visualize the album,artist and image information
$('#album').text('Album Name: '+result.album.name);
$('#artist').text('Artist Name: '+result.artists[0].name);
var albumimage=$('<img>');
albumimage.attr('src',result.album.images[0].url);
console.log(albumimage);
$('#image').html(albumimage);
console.log(result);
 })
})