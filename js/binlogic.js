var elload = document.getElementById('load');


function binload(rawID) {
    var newID = rawID.substr(3, 4);
    var finalID = parseInt(newID);
    console.log(newID);

    console.log(loadList);
    var remove = (loadList.splice(finalID,1));
    console.log(loadList);

    updateLoadlist();
}

elload.addEventListener('click', function(e) {
   
    rawID = (e.target.parentNode.id);

    if (rawID.includes('bin')) {
        binload(rawID);
    }

})

