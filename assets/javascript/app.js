$("#search-track").on('click',function(event){
    event.preventDefault();
    var nameinput=$('#track-name').val();
    var token='BQA0zijzmlQaUOI8A9ehJxxJuvAjx4nLRLqLXFJnqjuR8NpF1fCys6itGH5OMv4mqDEN1dfqQShtE-pVqUl-z8nYFK1IAG5txgA4oHlqaQczZIecKK3skRy-doULRa6CGHQcO07bPax3JWzNi7OtSQ';
    var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=track&limit=1";
    console.log(nameinput);
    $.ajax({
        url:queryURL,
        headers: {
           Authorization: 'Bearer ' + token
         },
        method:'GET'
    }).then(function(response){
        var col_1 =  $(' <tr><td>' + "<audio controls><source src="+response.tracks.items[0].preview_url+" type='audio/mpeg'>"+nameinput+"</audio><img src="+response.tracks.items[0].album.images[1].url+"></td></tr>");
        $("#tracks").append(col_1);
        console.log(response)
    })
    })

    $("#search-artist").on('click',function(event){
        event.preventDefault();
        var nameinput=$('#artist-name').val();
        var token='BQA0zijzmlQaUOI8A9ehJxxJuvAjx4nLRLqLXFJnqjuR8NpF1fCys6itGH5OMv4mqDEN1dfqQShtE-pVqUl-z8nYFK1IAG5txgA4oHlqaQczZIecKK3skRy-doULRa6CGHQcO07bPax3JWzNi7OtSQ';
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