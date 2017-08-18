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
    console.log(hikes[hikeid]);
    if (hikes[hikeid].skill == level && hikes[hikeid].region == region){
        str = str + hikeid;
    }
    }
    console.log(str)
  });
}
