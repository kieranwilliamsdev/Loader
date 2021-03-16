var elload = document.getElementById('load');


function binload(rawID) {
    var newID = rawID.substr(3, 4);
    var finalID = parseInt(newID);
    console.log(newID);

    console.log(loadList);
    var remove = (loadList.splice(finalID,1));
    console.log(loadList);

    if (loadList.length == 0) {
        console.log('Table is empty');
        emptytable();
    }


    //This produces the slideoout transition
    var getItemId = ('item'+finalID);
    var smallitem = document.getElementById(getItemId);
    smallitem.classList.add('small');
    setTimeout(updateLoadlist, 505);
}

elload.addEventListener('click', function(e) {
   
    rawID = (e.target.parentNode.id);

    if (rawID.includes('bin')) {
        binload(rawID);
    }

})

