$("#search-track").on('click',function(event){
  event.preventDefault();
  var nameinput=$('#track-name').val();
  var token='BQAujnHY21DjVEZk0tcaRDK9B2J0Cwq3da1KTnw1Sa_xhsq8x3bCdTLBhezop59ulNaDTKwlG9cp7qAtwF5Va9iFl3tmPTopgyn_sl0R2cwP5ItKmE_Hfdi59AomnxWDtUMRbGGZtncL1r9IGvKKtw';
  var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=track&limit=1";
  console.log(nameinput);
  $.ajax({
      url:queryURL,
      headers: {
         Authorization: 'Bearer ' + token
       },
      method:'GET'
  }).then(function(response){
      var col_1 =  $(' <tr><td>' + "<audio controls><source src=" + response.tracks.items[0].preview_url+" type='audio/mpeg'>" + "</audio><img src="+ response.tracks.items[0].album.images[1].url + ">" + "<div id= 'trackname'>" + response.tracks.items[0].name + "</div>" + "<div id= 'artistname'>" + response.tracks.items[0].album.artists[0].name + "</div>" + "</td></tr>");
      $("#tracks").append(col_1);
      console.log(response)
  })
  })

  $("#search-artist").on('click',function(event){
      event.preventDefault();
      var nameinput=$('#artist-name').val();
      var token='BQAujnHY21DjVEZk0tcaRDK9B2J0Cwq3da1KTnw1Sa_xhsq8x3bCdTLBhezop59ulNaDTKwlG9cp7qAtwF5Va9iFl3tmPTopgyn_sl0R2cwP5ItKmE_Hfdi59AomnxWDtUMRbGGZtncL1r9IGvKKtw';
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
              '<tr><td><a href=' + response.artists.items[0].external_urls.spotify+'>' 
               + "<img src=" + response.artists.items[0].images[1].url +" /></a>"
               + "<div id= 'personname'>" + response.artists.items[0].name + "</div>" + "</td></tr>");
          $("#artist-info").append(col_2);
          console.log(response)
      })
      })

      //"<div id= 'personname'>" + response.artists.items[0].name + "</div>" 