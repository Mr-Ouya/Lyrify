$("#search-artist").on('click',function(event){
    event.preventDefault();
    var nameinput=$('#artist-name').val();
    var token='BQAIo9wJUjytnEBc9Krzx4sc6CBe_LlFT2FG8ODtSP2JDnDbbhj-3-r8dzQAZlfluwbK_r7W7OYDXiFublZH74V68qKTKUvN1dOUkvu4iYjRLsyBQJpP7alqKF6DetGiRxnNfcnXOP87XweL4bFPGw';
    var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=track&limit=1";
    console.log(nameinput);
    $.ajax({
        url:queryURL,
        headers: {
           Authorization: 'Bearer ' + token
         },
        method:'GET'
    }).then(function(response){
    console.log(response)
    //$("#all-display").html("<a href="+response.tracks.items[0].preview_url+">"+nameinput+"</a>");
    })
    })

    