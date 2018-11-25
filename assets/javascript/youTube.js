$(document).ready(function () { 
	// This function gets the data from the YouTube API and displays it on the page
	function getResults(searchTerm) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				"part": "snippet",
				"key": "AIzaSyBkK8PEuhSfyz05gnUWhwOuE5cqWV5Oa3A",
				"q": searchTerm,
				"maxResults": 10
			},
			function (data) {
				if (data.pageInfo.totalResults == 0) {
					alert("No results!");
				}
				// If no results, empty the list
				displayResults(data.items);
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
				"</p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" +  video.snippet.thumbnails.high.url + "'/></a></li>" ;
		});
		$("#search-results").html(html);
	}

	//Use search track
	$("#search-track").on('click',function(event){
		event.preventDefault();
		getResults($("#track-name").val());
	});
	//Use search artist
	$("#search-artist").on('click',function(event){
		event.preventDefault();
		getResults($("#artist-name").val());
	});
});