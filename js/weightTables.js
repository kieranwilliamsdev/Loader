const tubeTable = [
    {name:21, weight:28.98},
    {name:16, weight:22.08},
    {name:13, weight:17.94},
    {name:10, weight:13.80},
    {name:08, weight:11.04},
    {name:07, weight:9.64},
    {name:06, weight:8.28},
    {name:05, weight:6.90},
    {name:04, weight:8.28},
    {name:03, weight:4.14},
    {name:02, weight:2.76}

];

const boardTable = [
    {name:13, weight:20},
    {name:10, weight:15},
    {name:8, weight:13},
    {name:7, weight:12},
    {name:6, weight:11.5},
    {name:5, weight:7.5},
    {name:4, weight:6.5},
    {name:2, weight:2.10},
 
];

const fittingsTable = [
    {name:'double_25',  weight:25, text:'Bag of Doubles'},
    {name:'double_full', weight:1000, text:'Doubles (Bin)'}, 
    {name:'double_half', weight:500, text:'Doubles 1/2 Bin'},
    {name:'singles_25', weight:15.75, text:'Bag of Clips'},
    {name:'singles_full', weight:1000, text:'Clips (Bin)'},
    {name:'singles_half', weight:500, text:'Clips 1/2 Bin'},
    {name:'swivels_25', weight:27.5, text:'Bag of Swivels'},
    {name:'swivels_full', weight:1000, text:'Swivels (Bin)'},
    {name:'swivels_half', weight:500, text:'Swivels 1/2 Bin'},
    {name:'sleaves_25', weight:26.75, text:'Bag of Sleaves'},
    {name:'sleaves_full', weight:1000, text:'Sleaves (Bin)'},
    {name:'sleaves_half', weight:500, text:'Sleaves 1/2 bin'},
    {name:'jointpin_25', weight:28.75, text:'Bag of Joint-pins'},
    {name:'baseplate_25', weight:7.5, text:'Bag of Baseplates'},
    {name:'baseplate_full', weight:1000, text:'Baseplates (Bin)'},
    {name:'baseplate_half', weight:500, text:'Baseplates 1/2 Bin'}
    
];

const additionalTable = [
    {name:'easyfix', weight:9, text:'Easyfix transom'},
    {name:'adjustable_transom', weight:9.9, text:'Adj transom'}
];


function calculateWeight (item, type, quantity) {

    let genericTable = [];

        switch (item) {

            case 'tubes':
                genericTable = tubeTable;
            break;

            case 'boards':
                genericTable = boardTable;
            break;

            case 'fittings':
                genericTable = fittingsTable;
            break;

            case 'additional':
                genericTable = additionalTable;
            break;
    }

    for (ss = 0; ss < genericTable.length; ss++) {

        if (genericTable[ss].name == type) {
            var w = genericTable[ss].weight * quantity;
            return w
        }
    }
}

//This function returns the text description to the caller

function getText(item,type) {               
    var text;
    var genericTable2 = [];
    

    switch (item) {
        case 'fittings':
            genericTable2 = fittingsTable;
        break;

        case 'additional':
            genericTable2 = additionalTable;
        break;
    }


    for (ji = 0; ji < genericTable2.length; ji++) {
       
        if (type == genericTable2[ji].name) {
                text = genericTable2[ji].text;
                
        }
    }
    
   
    return text;

}
