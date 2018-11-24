$("#submit").on('click',function(event){
event.preventDefault();
 var tracknameinput=$('#trackname-input').val();
 var artistnameinput=$('#artistname-input').val();

 //token is like an API key
var token='BQAHOw2kY3dgthCsPfH0nnDR6cWzFZtUbpAYNYa-57OuUKu6ZP0Y-e_HRrRweAg3KSVmyWHqZLQ3wtOfkEpvaT7X0QZUCZb6fumBbEa3YPmvKpwnZfcyXEPb6AZCcShuWMxcJmL8Dd9xYwcf1dOAjDpyGwBmjjIygqh4ig';
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
// var queryURL="https://api.spotify.com/v1/search?q=+"%20artist:"+artistnameinput+"&type=track&limit=1";
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