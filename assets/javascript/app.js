$("#search-track").on('click',function(event){
    event.preventDefault();
    var nameinput=$('#track-name').val();
    var token='BQAiVTM9DW13pZI5YjdomN_qdnww7a65Y5DWVzCvuJl2uTdaL5Ydy3gCACPYmP4dqnlsWmnqE_nNDgRFCBQUCeuE0ZJSUZChnLfUXAnP6TlDna_nm7lM2EGpJDYW-S8h5Jb9TOJstMgxP48CJ6WK9A';
    var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=track&limit=1";
    console.log(nameinput);
    $.ajax({
        url:queryURL,
        headers: {
           Authorization: 'Bearer ' + token
         },
        method:'GET'
    }).then(function(response){
        var col_1 =  $(' <tr><td>' + "<a href="+response.tracks.items[0].preview_url+">"+nameinput+"</a><img src="+response.tracks.items[0].album.images[2].url+"></td></tr>");
        $("#tracks").append(col_1);
        console.log(response)
    })
    })

    $("#search-artist").on('click',function(event){
        event.preventDefault();
        var nameinput=$('#artist-name').val();
        var token='BQAiVTM9DW13pZI5YjdomN_qdnww7a65Y5DWVzCvuJl2uTdaL5Ydy3gCACPYmP4dqnlsWmnqE_nNDgRFCBQUCeuE0ZJSUZChnLfUXAnP6TlDna_nm7lM2EGpJDYW-S8h5Jb9TOJstMgxP48CJ6WK9A';
        var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=artist&limit=1";
        console.log(nameinput);
        $.ajax({
            url:queryURL,
            headers: {
               Authorization: 'Bearer ' + token
             },
            method:'GET'
        }).then(function(response){
            var col_2 = $('<tr><td><a href='+response.artists.items[0].external_urls.spotify+'>'+nameinput+"</a><img src="+response.artists.items[0].images[2].url+"></td></tr>");
            $("#artist-info").append(col_2);
            console.log(response)
        })
        })
    
        response.artists.items[0].images[2].url