var config = {
  apiKey: "AIzaSyD_TcHQbDLNKufbovGO-1Ij9AUoCQwOufE",
  authDomain: "takeahike-86d41.firebaseapp.com",
  databaseURL: "https://takeahike-86d41.firebaseio.com",
  projectId: "takeahike-86d41",
  storageBucket: "takeahike-86d41.appspot.com",
  messagingSenderId: "660810891875"
};
firebase.initializeApp(config);

//to use database (storing data, not files)
var database = firebase.database();


function findInputInDB(){
  var level = sessionStorage.level;
  console.log(level);
  var region = sessionStorage.region;
  console.log(region);
  str = "";

  database.ref("hikes").once('value').then(function(snapshot){
    var hikes = snapshot.val();
    //console.log(hikes);

    for (var hikeid in hikes){
      //console.log(hikeid);
    //console.log(hikes[hikeid]);
    if (hikes[hikeid].skill == level && hikes[hikeid].region == region){
        str = str + hikeid + " ";
    }
    }
    console.log(str)
  });
}
