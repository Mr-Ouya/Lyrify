var config = {
    apiKey: "AIzaSyCQxC4plKObByXrhWjWJ2sDdrwczemvWEw",
    authDomain: "search-database-2d445.firebaseapp.com",
    databaseURL: "https://search-database-2d445.firebaseio.com",
    projectId: "search-database-2d445",
    storageBucket: "search-database-2d445.appspot.com",
    messagingSenderId: "833719412698"
};
firebase.initializeApp(config);
///////////////////////////////
var database = firebase.database();
var topArtist = [];
var topTrack = [];
//////////////////////////


function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function rev(a, b) {

    return b
}
//Makes First letter of each word uppercase

function cap(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

function getitems(array) {
    $(".topTrending").empty()

    for (var i = 0; i < 5; i++) {

        $(".topTrending").append("<li>" + array[i][1] + "</li>")
    }
}
/////////////////////////////////
//Saves the search result to firebase and add clicks when button is clicked(artist)
$("#search-artist").on("click", function (event) {
    event.preventDefault();
    var search = $("#artist-name").val().trim();
    search = cap(search);
    var onclicks = 1;
    database.ref("/artist/").once("value", function (snap) {
        object = snap.val();
        console.log(object);

        if (snap.hasChild(search)) {
            var child = (object.clicks)
            console.log(child);
            console.log("hi")
            database.ref("/artist/" + search).child("clicks").transaction(function (currentClicks) {
                return (currentClicks || 0) + 1
            })
        } else {
            console.log("na")
            database.ref("/artist/" + search).set({
                search: search,
                clicks: onclicks
            })
        }
    })
})
//Saves the search result to firebase and add clicks when button is clicked(track)

$("#search-artist").on("click", function (event) {
    event.preventDefault();
    var search = $("#track-name").val().trim();
    search = cap(search);
    var onclicks = 1;
    database.ref("/tracks/").once("value", function (snap) {
        object = snap.val();
        console.log("i");
        if (snap.hasChild(search)) {
            console.log(object);
            var child = (object.clicks)
            console.log(child);
            console.log("hi")
            database.ref("/tracks/" + search).child("clicks").transaction(function (currentClicks) {
                return (currentClicks || 0) + 1
            })
        } else {
            console.log("na")
            database.ref("/tracks/" + search).set({
                search: search,
                clicks: onclicks
            })
        }
    })
})
//////////////////////////////////////
//pushes set amount of items from firebase based on clicks and adds them to list also real time
database.ref("/artist/").on("value", function (snapshot) {
    topArtist = [];
    snapshot.forEach(function (snap) {
        object = snap.val();
        console.log(object);
        topArtist.push([object.clicks, object.search])
    });
    topArtist.sort(function (a, b) {
        return b[0] - a[0];
    });
    getitems(topArtist[0][1]);

    function getitems() {
        $(".topTrendingArtist").empty()
        for (var i = 0; i < 5; i++) {

            $(".topTrendingArtist").append("<li>" + topArtist[i][1] + "</li>")
        }
    }
})

database.ref("/tracks/").on("value", function (snapshot) {
    topTrack = [];
    snapshot.forEach(function (snap) {
        object = snap.val();

        topTrack.push([object.clicks, object.search])
    });
    topTrack.sort(function (a, b) {
        return b[0] - a[0];
    });
    getitems(topTrack[0][1]);

    function getitems() {
        $(".topTrendingTracks").empty()
        for (var i = 0; i < 5; i++) {

            $(".topTrendingTracks").append("<li>" + topTrack[i][1] + "</li>")
            console.log(topTrack[i][1])
        }
    }
})










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



$("#search-artist").on('click', function (event) {
    event.preventDefault();

    watchSubmit();
    var nameinput = $('#track-name').val();
    var token = 'BQAUqk_w1mxBLlas_YYyT0e2fmwfnSdiK4hynoo9zQ0phq_p3cO7UNA9R0S22D83WPBK0Bd-Wd-in3PgppexJPxEhr8GIb9y65huqGVbrBvGHtIyjC7uhXDssrQotC2iKSSN2ZFty6rosdo-MlHTvK8k1kDeIBXlG87FvqBnv-CAgGEj6l3zvlrg0td3';
    var queryURL = "https://api.spotify.com/v1/search?q=" + nameinput + "&type=track&limit=1";
    console.log(nameinput);
    $.ajax({
        url: queryURL,
        headers: {
            Authorization: 'Bearer ' + token
        },
        method: 'GET'
    }).then(function (response) {
        var col_1 = $(' <tr><td>' + "<audio controls><source src=" +
            response.tracks.items[0].preview_url + " type='audio/mpeg'>" + '<div></div>' +
            "</audio>" + "<img src=" + response.tracks.items[0].album.images[1].url + ">" +
            "<div id= 'trackname'>" + response.tracks.items[0].name + "</div>" + "<div id= 'artistname'>" +
            response.tracks.items[0].album.artists[0].name + "</div>" + "</td></tr>");
        $("#tracks").append(col_1);
        console.log(response)
    })
})

$("#search-artist").on('click', function (event) {
    event.preventDefault();

    watchSubmit();

    var nameinput = $('#artist-name').val();
    var token = 'BQAUqk_w1mxBLlas_YYyT0e2fmwfnSdiK4hynoo9zQ0phq_p3cO7UNA9R0S22D83WPBK0Bd-Wd-in3PgppexJPxEhr8GIb9y65huqGVbrBvGHtIyjC7uhXDssrQotC2iKSSN2ZFty6rosdo-MlHTvK8k1kDeIBXlG87FvqBnv-CAgGEj6l3zvlrg0td3';
    var queryURL = "https://api.spotify.com/v1/search?q=" + nameinput + "&type=artist&limit=1";
    console.log(nameinput);
    $.ajax({
        url: queryURL,
        headers: {
            Authorization: 'Bearer ' + token
        },
        method: 'GET'
    }).then(function (response) {
        var col_2 = $(
            '<tr><td><a id= "profilelink" href=' + response.artists.items[0].external_urls.spotify + '>Click here for artist profile and albums!</a>' + '<div></div>' +
            "<img src=" + response.artists.items[0].images[1].url + " />" +
            "<div id= 'personname'>" + response.artists.items[0].name + "</div>" + "</td></tr>");
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
    $("#lyrics").html(`${data.lyrics}`);
}

function watchSubmit() {
    let artistTarget = $('#artist-name');
    let titleTarget = $('#track-name');
    let artist = artistTarget.val();
    let title = titleTarget.val();


    getDataFromApi(artist, title, displaySearchData);
}

$(document).ready(function () {
    // This function gets the data from the YouTube API and displays it on the page
    function getResults(searchTerm) {
        $.getJSON("https://www.googleapis.com/youtube/v3/search", {
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
            html = html +
                "</p><iframe width='600' hieght='600' src='https://www.youtube.com/embed/watch" + video.id.videoId + "'></iframe></a></li>";
        });
        $("#videos").html(html);
    }

    //Use search track
    $("#search-artist").on('click', function (event) {
        event.preventDefault();
        watchSubmit()
        var sum = $("#track-name").val() + " " + $("#artist-name").val();
        getResults(sum);
        console.log(sum);
    });
});