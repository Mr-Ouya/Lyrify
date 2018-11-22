$("#submit").on('click',function(event){
event.preventDefault();
 var nameinput=$('#name-input').val();
 //token is like an API key
var token='BQChPfT7IHjX7s7X9DgtshGD4DRWKL8HGfZ6KdwYPTzlMqa36Xamuf9BpfS2t_xLIv3E5WZtS9sj2eRsLqrMG4Z7_0nHGV7_-4WQ9YrCobFggZL-s8zWtf9iI3RSAWDp-KT-vRYExmn7e7Qb7Pj8B0a3mtK7C22_nJ2H-g';
 //queryURL which can get the track
var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=track&limit=1";
 console.log(nameinput);
 $.ajax({
     url:queryURL,
     headers: {
        Authorization: 'Bearer ' + token
      },
     method:'GET'
 }).then(function(response){
var result=response.tracks.items[0];
//visualize the album,artist and image information
$('#album').text('album name'+result.album.name);
$('#artist').text(result.artists[0].name);
var albumimage=$('<img>');
albumimage.attr('src',result.album.images[0].url);
console.log(albumimage);
$('#image').html(albumimage);
console.log(result);
 })
})