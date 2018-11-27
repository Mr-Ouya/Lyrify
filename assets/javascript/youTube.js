//Youtube API functionality

$(document).ready(function () { 
	// This function gets the data from the YouTube API and displays it on the page
	function getResults(searchTerm) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				"part": "snippet",
				"key": "AIzaSyBkK8PEuhSfyz05gnUWhwOuE5cqWV5Oa3A",
				"q": searchTerm,
				"maxResults": 1
			},
			function (data) {
				if (data.pageInfo.totalResults == 0) {
					alert("No results!");
				}
				// If no results, empty the list
        displayResults(data.items);
        console.log(data);
			}
		);
	}

	//Display results in ul
	function displayResults(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			// Append results li to ul
			//console.log(video.snippet.title);
			//console.log(video.snippet.thumbnails.high.url);
			html = html + "<li><p class='line-clamp'>" + video.snippet.title +
				"</p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" +  video.snippet.thumbnails.default.url + "' width='300' height='300'/></a></li>" ;
		});
		$("#music-video").html(html);
	}

	//Use search track
	$(".submit-button").on('click',function(event){
    event.preventDefault();
    var sum=$("#track-name").val()+ " " + $("#artist-name").val();
    getResults(sum);
    console.log(sum);
  });
  /*
	//Use search artist
	$("#search-artist").on('click',function(event){
		event.preventDefault();
		var sum=$("#track-name").val()+ " " + $("#artist-name").val();
    getResults(sum);
  });
  */
});
       


//FUCK TOKENS

//SPOTIFY API


$("#search-track").on('click',function(event){
    event.preventDefault();
    var nameinput=$('#track-name').val();
    var token='BQCeTW5y0p0VPTMAY5k3ek-Ll33gAd4pVOaBi8D7CwGHRR--baxvW7NAB5xZ2NGgkfqM0Qec7iEADpt4573TjprlhePMsys_mEK6eZA3BUuZjcl4Kgr46uRTNxcAQIwV-C70bMGwuuLyk0aBGEHnl7sdwIVRnPH8yZCD87w80UdfcOvcgeca6o1Y2d1x';
    var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=track&limit=1";
    //console.log(nameinput);
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
        //console.log(response)
    })
    })
  
    $("#search-artist").on('click',function(event){
        event.preventDefault();
        var nameinput=$('#artist-name').val();
        var token='BQC6VcDRC18DRjrNOF7TMzNkOq3vjn-MnfaqGnGI1G0X1GuHhyXjJoH0A1i7XN_q572oHpZr4A69FJk4QU09KKabM0W7BhaKcsuGXCRXo3_FtFfEJBtbCLs2vCu9sVlje0SjcyqXNtqxov3ScWLfPDv0PSxWw9CNjMWkDAoR5od0tNO_STtE_gmFHOcj';
        var queryURL="https://api.spotify.com/v1/search?q="+nameinput+"&type=artist&limit=1";
        //console.log(nameinput);
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
            //console.log(response)
        })
        })
        


        //Lyrics API
        
        //Not sure if I need this shit below
        /*
        function getDataFromApi(artist, title, callback) {
            let URL = `https://api.lyrics.ovh/v1/${artist}/${title}`;
            $.getJSON(URL, callback);
            console.log(URL);
          }
          
          function displaySearchData(data) {
            //console.log(data);
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
          */
          
          
          $('.submit-button').on('click', function() {
            var artist = $('#artist-name').val();
            var song = $('#track-name').val();
            
              $.getJSON('https://api.lyrics.ovh/v1/' + artist + '/' + song + '', function(data) {
                //console.log(data);
          
                $.each(data, function(i, val) {
                  var lyrics = data.lyrics;
                  //console.log(lyrics);
                  $('#lyrics').html('<h2 class="artist-output">' + artist + '</h2><h3 class="song-output">' + song + '</h3><p class="lyrics-output">' + lyrics + '</p>').css({
                    'border-top' : '1px solid black'
                  });
                });
            });
          });
          