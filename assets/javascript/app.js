$("#submit").on('click',function(event){
event.preventDefault();
 var nameinput=$('#name-input').val();
 //token is like an API key
var token='BQBosrmUAIijK78zJIC8vInHkizXRVpTP-0gtxYTs-H1OmTfn41ucS7G0n0QQMMWstmubijWg-uu4lzMFlCFiz32bY8Eki1dsso-S7q2jTBE-dtLemsz7Ks-eipf-zsCNBXYo08FAbe-blpbHF2bwxMK8WRUZ9VWSjhCFQ';
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
$('#album').text('Album Name: '+result.album.name);
$('#artist').text('Artist Name: '+result.artists[0].name);
var albumimage=$('<img>');
albumimage.attr('src',result.album.images[0].url);
console.log(albumimage);
$('#image').html(albumimage);
console.log(result);
 })
})