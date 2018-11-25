$("#search-track").on('click',function(event){
    event.preventDefault();
    var nameinput=$('#track-name').val();
    var token='BQAoSpdg05trL7hz8w26tQ-t8aZ1IgekYJusVqsFg1886p5BrHV-JW2UQLbu4CpjePtvsdKxj-fIosi0wYPL_O8uroBdBr6P7Cf_NFvvG0v2cdlSXQGj-5zxXvp7v_OEGIlnudKr_LkYYxfNdHiCeA';
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
            + response.tracks.items[0].preview_url+" type='audio/mpeg'>" + '<div></div>'
            + "</audio>" + "<img src="+ response.tracks.items[0].album.images[1].url + ">" 
            + "<div id= 'trackname'>" + response.tracks.items[0].name + "</div>" + "<div id= 'artistname'>" 
            + response.tracks.items[0].album.artists[0].name + "</div>" + "</td></tr>");
        $("#tracks").append(col_1);
        console.log(response)
    })
    })

    $("#search-artist").on('click',function(event){
        event.preventDefault();
        var nameinput=$('#artist-name').val();
        var token='BQAoSpdg05trL7hz8w26tQ-t8aZ1IgekYJusVqsFg1886p5BrHV-JW2UQLbu4CpjePtvsdKxj-fIosi0wYPL_O8uroBdBr6P7Cf_NFvvG0v2cdlSXQGj-5zxXvp7v_OEGIlnudKr_LkYYxfNdHiCeA';
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
                '<tr><td><a id= "profilelink" href=' + response.artists.items[0].external_urls.spotify+'>Click here for artist profile and albums!</a>' + '<div></div>'
                 + "<img src=" + response.artists.items[0].images[1].url +" />"
                 + "<div id= 'personname'>" + response.artists.items[0].name + "</div>" + "</td></tr>");
            $("#artist-info").append(col_2);
            console.log(response)
        })
        })

        function getDataFromApi(artist, title, callback) {
            let URL = `https://api.lyrics.ovh/v1/${artist}/${title}`;
            $.getJSON(URL, callback);
            console.log(URL);
          }
          
          function displaySearchData(data) {
            console.log(data);
            $(".js-search-results").html(`${data.lyrics}`);
          }
          
          function watchSubmit() {
            $('.js-search-form').submit(event => {
              event.preventDefault();
              let artistTarget = $(event.currentTarget).find('.js-query-artist');
              let titleTarget = $(event.currentTarget).find('.js-query-title');
              let artist = artistTarget.val();
              let title = titleTarget.val();
              artistTarget.val("");
              titleTarget.val("");
              
              getDataFromApi(artist, title, displaySearchData);
            });
          }
          
          $(watchSubmit);