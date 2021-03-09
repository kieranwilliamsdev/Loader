var weightOverlay = document.getElementById('weight_overlay');


function totalWeight(table) {
    
    var ongoingTotal = 0;
    
    for (tt = 0; tt < table.length; tt++) {
        ongoingTotal = ongoingTotal + table[tt].weight;
    }

    if (ongoingTotal > 9999) {
        ongoingTotal = 9999;
    }

    console.log('the weight' + ongoingTotal);
    weightOverlay.innerHTML = (ongoingTotal.toFixed(0));

    notify_update(ongoingTotal);

}

function emptytable() {

    weightOverlay.innerHTML = ('0');
    uh = 0;
    notify_update(uh);
    console.log('IS THIS TABLE NULL')

}

//a function to recieve the total weight
function getWeight() {

    var mytable = loadList;
    console.log('mytable');
    console.log(mytable);
    var gwtotal = 0;

    for (tu = 0; tu < mytable.length; tu++) {
        gwtotal = gwtotal + mytable[tu].weight;
    }

    if (gwtotal > 9999) {
        gwtotal = 9999;
    }

    return gwtotal;
}

