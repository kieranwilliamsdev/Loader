let loadList = [];
const loadContainer = document.querySelector('.load')

function addLoadList (item, type, quantity, weight) {
    if (loadList.length < 11) {
        loadList.push (
            {item: item, type: type, quantity: quantity, weight: weight}
        )    
    console.log('load logic load array');
    console.log(loadList);

    }
    updateLoadlist();

}

function resetDomLoad() {
    var el = document.getElementsByClassName('item_container');
    
    while(el.length > 0) {
        el[0].parentNode.removeChild(el[0]);
    }

}

function getImage(loadListIndex) {
    var operator = loadList[loadListIndex].item;
    var imageurl

    switch (operator) {

        case 'tubes':
            imageurl = '../images/tube40.png';
        break;

        case 'boards':
            imageurl = '../images/board40.png';
        break;

        case 'fittings':
            imageurl = '../images/fitting40.png';
        break;

        case 'additional':
            imageurl = '../images/additional40.png';
        break;
    }
    return imageurl

}

function getDescription(loadListIndex) {
    
    var operator = loadList[loadListIndex].item;
    var description

    
    switch (operator) {

        case 'tubes':
            description = (loadList[loadListIndex].type + 'ft Tube');
        break;

        case 'boards':
            description = (loadList[loadListIndex].type + 'ft Board ');
        break;

        case 'fittings':
            description = getText('fittings',loadList[loadListIndex].type);
           
        break;

        case 'additional':
           
            description = getText('additional',loadList[loadListIndex].type);
            
        break;
    }

    return description;


}

function updateLoadlist() {

    resetDomLoad();
    
    for (lp=0; lp < loadList.length; lp++) {

        //Create and place container Div
        
        var divContainer = document.createElement('div');
        var containerPosition = document.getElementById('load');

        divContainer.className = 'item_container';
        divContainer.id = ('item' + lp);

        containerPosition.appendChild(divContainer);

        //Create amd place image div

        var elID = ('item' + lp)
        var elImage = document.createElement('div');
        var elPosition = document.getElementById(elID);
        var Url = getImage(lp);                                  // Call the get image function to get the correct URL for image
        var statement = ('<img src=\"'+ Url + '\">')

        elImage.className = 'item_image';
        elImage.innerHTML = (statement);

        elPosition.appendChild(elImage);

        //Create and place Description div

        var elDescription = document.createElement('div');
        var text = getDescription(lp);

        elDescription.className = 'item_description';
        elDescription.innerHTML = (text);
        elDescription.id = ('desc' + lp);

        elPosition.appendChild(elDescription);

        //Create and place Quantity div
        
        var qpos = ('desc' + lp);
        var qvalue = ('x ' + loadList[lp].quantity);

        elQuantity = document.createElement('div');
        elQposition = document.getElementById(qpos);
        elQuantity.innerHTML = (qvalue);

        elQposition.appendChild(elQuantity);

        //Create and place Weight div

        weightV = (loadList[lp].weight.toFixed(1) + 'kg');
       

        elWeight = document.createElement('div');
        elWeight.className = 'item_weight';
        elWeight.innerHTML = (weightV);

        elPosition.appendChild(elWeight)

        //Create and place Bin div

        var bid = ('bin' + lp);
        elBin = document.createElement('div');
        elBin.className = 'item_bin';
        elBin.innerHTML = ('<img src=\"images/bin.svg\" alt=\"bin\">');
        elBin.id=(bid);

        elPosition.appendChild(elBin);

        if (loadList == null) {
            emptytable();
        }

        totalWeight(loadList);
    }
}

