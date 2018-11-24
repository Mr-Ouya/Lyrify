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
var topclicks = [];
//////////////////////////
function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function rev(a, b) {

    return b
}

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
$("#submit").on("click", function (event) {
    event.preventDefault();
    var search = $("#search").val().trim();
    search = cap(search);
    var onclicks = 1;
    database.ref().once("value", function (snap) {
        object = snap.val();
        console.log("i");
        if (snap.hasChild(search)) {
            var child = (object[search].clicks)
            console.log(child);
            console.log("hi")
            database.ref(search).child("clicks").transaction(function (currentClicks) {
                return (currentClicks || 0) + 1
            })
        } else {
            console.log("na")
            database.ref(search).set({
                search: search,
                clicks: onclicks
            })
        }
    })
})
database.ref().on("value", function (snapshot) {
    topclicks = [];
    snapshot.forEach(function (snap) {
        object = snap.val();
        topclicks.push([object.clicks, object.search])
    });
    topclicks.sort(function (a, b) {
        return b[0] - a[0];
    });
    getitems(topclicks[0][1]);

    function getitems() {
        $(".topTrending").empty()
        for (var i = 0; i < 5; i++) {

            $(".topTrending").append("<li>" + topclicks[i][1] + "</li>")
        }
    }
})
/////////////////////////