// logic For model item selections

const plusBtn = document.getElementById('plusBtn');
const selectItemsModal = document.querySelector('.select_items');
const modal = document.querySelector('.modal')
const confirm_select = document.getElementById('select_item_confirm');
const quantityModal = document.querySelector('.quan_modal')
let selectedItem = document.getElementById('select_item_drop');
const dropTube = document.querySelector('.drop_tube')
const dropBoard = document.querySelector('.drop_board')
const dropFitting = document.querySelector('.drop_fitting')
const dropAdditional = document.querySelector('.drop_additional')
let quanTitle = document.getElementById('quan_title');
const quanItemConfirm = document.getElementById('quan_item_confirm');
const quanTube = document.getElementById('quan_tube');
const quanBoard = document.getElementById('quan_board');
const quanFitting = document.getElementById('quan_fitting');
const quanAdditional = document.getElementById('quan_additional');

let x = "";


//This Function Removes all dropper Divs from quantity modal
function resetDropper () {
    dropTube.classList.remove('activate_flex');
    dropBoard.classList.remove('activate_flex');
    dropFitting.classList.remove('activate_flex');
    dropAdditional.classList.remove('activate_flex');

}

// PLUSBUTTON
plusBtn.addEventListener('click', () => {
    modal.classList.add('activate_block')
    selectItemsModal.classList.add('activate_block')
    })

    
confirm_select.addEventListener('click', () => {
    
    selectItemsModal.classList.remove('activate_block');
    quantityModal.classList.add('activate_block');

switch (selectedItem.value) {

    case 'tubes':
        resetDropper ();
        dropTube.classList.add('activate_flex');
        quanTitle.innerHTML = ('Tubes');
        x = quanTube.value;
        break;

    case 'boards':
        resetDropper ();
        dropBoard.classList.add('activate_flex');
        quanTitle.innerHTML = ('Boards');
        x = quanBoard.value;
        break;

    case 'fittings':
        resetDropper ();
        dropFitting.classList.add('activate_flex');
        quanTitle.innerHTML = ('Fittings');
        x = quanFitting.value;
        break;

    case 'additional':
        resetDropper ();
        dropAdditional.classList.add('activate_flex');
        quanTitle.innerHTML = ('Additional Items');
        x = quanAdditional.value;
        break;

}

})

//slider code
let slider = document.getElementById('myrange');
let output = document.getElementById('demo');

output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = this.value;
  }


function getTypeValue(value) {

    var typeValue

    switch (value) {

        case 'tubes':
            typeValue = document.getElementById('quan_tube');
        break;

        case 'boards':
            typeValue = document.getElementById('quan_board');
        break;

        case 'fittings':
            typeValue = document.getElementById('quan_fitting');
        break;

        case 'additional':
            typeValue = document.getElementById('quan_additional');
        break;
    }

   
    return typeValue
   

}


//Item > Load list code ////////////////////////////////////////////////////
quanItemConfirm.addEventListener('click', () => {
    
    let temp = getTypeValue(selectedItem.value);

    let x = temp.value;
    let z = selectedItem.value;
    let c = slider.value;
    let v = calculateWeight(z,x,c);

    addLoadList(z,x,c,v);

    
    console.log(loadList);

    quantityModal.classList.remove('activate_block');
    modal.classList.remove('activate_block');

})  


