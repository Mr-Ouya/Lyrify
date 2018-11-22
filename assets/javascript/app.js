$("#search-track").on('click',function(event){
    event.preventDefault();
    var nameinput=$('#track-name').val();
    var token='BQDp-_YQ0EYYwgrD9s-O2Mbu3aSOicrItWXtywqtXV1k0pwAcJAJlOE466UIRj-0LhQeNRvENqdOYHyvnwa6mcfrOBGh5XutXOhNl-Kd4ZwBarAsEAn0914iYUbBQrDT94OV2JyWsGaB8eWYCWVelw';
    var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=track&limit=1";
    console.log(nameinput);
    $.ajax({
        url:queryURL,
        headers: {
           Authorization: 'Bearer ' + token
         },
        method:'GET'
    }).then(function(response){
    $("#all-display").html("<a href="+response.tracks.items[0].preview_url+">"+nameinput+"</a>");
    })
    })

    $("#search-artist").on('click',function(event){
        event.preventDefault();
        var nameinput=$('#artist-name').val();
        var token='BQDp-_YQ0EYYwgrD9s-O2Mbu3aSOicrItWXtywqtXV1k0pwAcJAJlOE466UIRj-0LhQeNRvENqdOYHyvnwa6mcfrOBGh5XutXOhNl-Kd4ZwBarAsEAn0914iYUbBQrDT94OV2JyWsGaB8eWYCWVelw';
        var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=artist&limit=1";
        console.log(nameinput);
        $.ajax({
            url:queryURL,
            headers: {
               Authorization: 'Bearer ' + token
             },
            method:'GET'
        }).then(function(response){
        $("#all-display").html("<a href="+response.artists.items[0].external_urls.spotify+">"+nameinput+"</a>");
        })
        })
    