$("#search-track").on('click',function(event){
    event.preventDefault();
    var nameinput=$('#track-name').val();
    var token='BQDYoL_R6VY-lxUgr0hvdptTsIbx2zC5c7l6Tg74xcsBN8DXQa57WfrdG37A03TMCXhKsR9StJKSdsXnJ6wmRTO89UiB6_h0yJ18vIcOFvF97XtCJnU_QUg5hQbGw69kovybRZIGJ5Tpht092uSFIQ';
    var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=track&limit=1";
    console.log(nameinput);
    $.ajax({
        url:queryURL,
        headers: {
           Authorization: 'Bearer ' + token
         },
        method:'GET'
    }).then(function(response){
        var col_1 =  $(' <tr><td>' + "<audio controls><source src=" 
            + response.tracks.items[0].preview_url+" type='audio/mpeg'>" +
            + "</audio><img src="+ response.tracks.items[0].album.images[1].url + ">" 
            + "<div id= 'trackname'>" + response.tracks.items[0].name + "</div>" + "<div id= 'artistname'>" 
            + response.tracks.items[0].album.artists[0].name + "</div>" + "</td></tr>");
        $("#tracks").append(col_1);
        console.log(response)
    })
    })

    $("#search-artist").on('click',function(event){
        event.preventDefault();
        var nameinput=$('#artist-name').val();
        var token='BQDYoL_R6VY-lxUgr0hvdptTsIbx2zC5c7l6Tg74xcsBN8DXQa57WfrdG37A03TMCXhKsR9StJKSdsXnJ6wmRTO89UiB6_h0yJ18vIcOFvF97XtCJnU_QUg5hQbGw69kovybRZIGJ5Tpht092uSFIQ';
        var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=artist&limit=1";
        console.log(nameinput);
        $.ajax({
            url:queryURL,
            headers: {
               Authorization: 'Bearer ' + token
             },
            method:'GET'
        }).then(function(response){
            var col_2 = $(
                '<tr><td><a id= "profilelink" href=' + response.artists.items[0].external_urls.spotify+'>Click here for artist profile!</a>' + '<div></div>'
                 + "<img src=" + response.artists.items[0].images[1].url +" />"
                 + "<div id= 'personname'>" + response.artists.items[0].name + "</div>" + "</td></tr>");
            $("#artist-info").append(col_2);
            console.log(response)
        })
        })

        //"<div id= 'personname'>" + response.artists.items[0].name + "</div>" 