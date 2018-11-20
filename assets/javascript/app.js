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




$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("hi");
    var search = $("#search").val().trim();
    var clicks = 1;


    database.ref(search).push({

        search: search,

        clicks: clicks
    })


    database.ref(search).update({

        clicks: clicks++

    })


});





database.ref().on("child_added", function (snapshot) {



            database.ref().on("child_added", function (snapshot) {

                var object = snapshot.val();

                snapshot.forEach(function (snapchild) {
                    console.log(snapchild.val());

                });




            })