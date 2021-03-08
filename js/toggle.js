// Wagon Weight Loading Switch Code

const three_five = document.getElementById('three_five');
const seven_five = document.getElementById('seven_five');
const eighteen = document.getElementById('eighteen');
const wagonb = document.querySelector('.wagonb');
const three_five_class = document.querySelector('.three_five');
const seven_five_class = document.querySelector('.seven_five');
const eighteen_class = document.querySelector('.eighteen');
 


function togglestart() {
    wagon_load = 1500
    three_five_class.classList.add('wagon_select');
    notify_update();
}

document.onload = togglestart();

three_five.addEventListener('click', () => {
    
    toggleWeight = getWeight();
    reset_toggle();
    wagon_load = 1500;
    three_five_class.classList.add('wagon_select');
    console.log('toggle weight ' + toggleWeight);
    
    notify_update(toggleWeight);
    })

seven_five.addEventListener('click', () => {
    
    toggleWeight = getWeight();
    reset_toggle();
    wagon_load =  2300;
    seven_five_class.classList.add('wagon_select');
    notify_update(toggleWeight);

    console.log('toggle weight ' + toggleWeight);

    })

eighteen.addEventListener('click', () => {
    
    toggleWeight = getWeight();
    reset_toggle();
    wagon_load = 9000;
    eighteen_class.classList.add('wagon_select');
    notify_update(toggleWeight);

    console.log('toggle weight ' + toggleWeight)

    })


function reset_toggle() {
    three_five_class.classList.remove('wagon_select');
    seven_five_class.classList.remove('wagon_select');
    eighteen_class.classList.remove('wagon_select');
}


