var config = {
    apiKey: "AIzaSyCQxC4plKObByXrhWjWJ2sDdrwczemvWEw",
    authDomain: "search-database-2d445.firebaseapp.com",
    databaseURL: "https://search-database-2d445.firebaseio.com",
    projectId: "search-database-2d445",
    storageBucket: "search-database-2d445.appspot.com",
    messagingSenderId: "833719412698"
};
firebase.initializeApp(config);


var database = firebase.database();

var toptopclicks = "";
var topclicks = [];
rndarray = [2, 7, 4, 7, 3, 2, 2, 6, 7, 8, 5, 4, 3];




$("#submit").on("click", function (event) {
    event.preventDefault();

    var search = $("#search").val().trim();


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

    snapshot.forEach(function (snap) {
        object = snap.val();
        toptopclicks = topclicks.concat([object.clicks, object.search])
        var array = toptopclicks.sort(function (a, b) {
            return a[0] - b[0];
        });

        console.log(array);
    });
})


function sort(a, b) {

    return a[0] - b[0];

}
console.log(toptopclicks)

$(".check").html(topclicks[0]);



var proper = rndarray.sort(function (a, b) {
    return a - b;
});
console.log(proper);
// sort by name

/* snapshot.forEach(function (childsnap) {



     var child = childsnap.val();

     console.log(child);



 })*/



/*snap.forEach(function (childsnap) {

            objectsnap = childsnap.val();
            if (search === objectsnap.search) {

            } else {

            }
        })*/