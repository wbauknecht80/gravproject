const inputButtons = document.querySelectorAll('button');

/*declaring button inputs*/

const humanInput_1 = document.getElementById('human_1');
const carInput_1 = document.getElementById('car_1');
const buildingInput_1 = document.getElementById('building_1');
const earthInput_1 = document.getElementById('earth_1');

const humanInput_2 = document.getElementById('human_2');
const carInput_2 = document.getElementById('car_2');
const buildingInput_2 = document.getElementById('building_2');
const earthInput_2 = document.getElementById('earth_2');

const millimeter = document.getElementById('millimeter');
const meter = document.getElementById('meter');
const kilometer = document.getElementById('kilometer');
const au = document.getElementById('au');
const lightyear =  document.getElementById('lightyear');

const calc_button = document.getElementById('calc_button');

/*declaring various screens*/

const mass_1_selection_screen = document.getElementById('mass_1_selection');
const distance_selection_screen = document.getElementById('distance_selection');
const mass_2_selection_screen = document.getElementById('mass_2_selection');
const output_screen = document.getElementById('output_screen');

/*declaring various measurements*/

/*mass measurements in kg*/

const human_mass = 70;
const car_mass = 1408;
const building_mass = 201849000;
const earth_mass = 5972000000000000000000000;

/*distance measurements in m*/

const mm_in_m = 0.001;
const m_in_m = 1;
const km_in_m = 1000;
const au_in_m = 146900000000;
const ly_in_m = 9461000000000000;

/*grav const in Nm^2kg^-2*/

const grav_const = .0000000000667408;

/*query selectors to handle button inputs*/

document.querySelectorAll('.mass_1_button').forEach(item => {
    item.addEventListener('click', event => {
        update_mass_1(item.textContent);
    })
})

document.querySelectorAll('.distance_button').forEach(item => {
    item.addEventListener('click', event => {
        update_distance(item.textContent);
    })
})

document.querySelectorAll('.mass_2_button').forEach(item => {
    item.addEventListener('click', event => {
        update_mass_2(item.textContent);
    })
})

document.querySelectorAll('.calc_button').forEach(item => {
    item.addEventListener('click', event => {
        declareVars();
    })
})

/*functions to update screen*/

function update_mass_1(value) {
    if (value === 'The Average Human') {
        mass_1_selection_screen.textContent = human_mass;
    } else if (value === 'A 2015 Honda Accord Sport') {
        mass_1_selection_screen.textContent = car_mass; 
    } else if (value === 'A Skyscraper') {
        mass_1_selection_screen.textContent = building_mass;
    } else if (value === 'Earth') {
        mass_1_selection_screen.textContent = earth_mass;
    }
}

function update_distance(value) {
    if (value === 'One Millimeter') {
        distance_selection_screen.textContent = mm_in_m;
    } else if (value === 'One Meter') {
        distance_selection_screen.textContent  = m_in_m;
    } else if (value === 'One AU (1.496e+11 Meters)') {
        distance_selection_screen.textContent  = au_in_m;
    } else if (value === 'One light-year (9.461e+15 Meters)') {
        distance_selection_screen.textContent  = ly_in_m;
    } else if (value === 'One Kilometer') {
        distance_selection_screen.textContent = km_in_m;
    }
}

function update_mass_2(value) {
    if (value === 'The Average Human') {
        mass_2_selection_screen.textContent  = human_mass;
    } else if (value === 'A 2015 Honda Accord Sport') {
        mass_2_selection_screen.textContent  = car_mass; 
    } else if (value === 'A Skyscraper') {
        mass_2_selection_screen.textContent  = building_mass;
    } else if (value === 'Earth') {
        mass_2_selection_screen.textContent  = earth_mass;
    }
}

/*functiions to declare vars and then solve*/

function declareVars() {
    if (mass_1_selection_screen.childNodes.length !== 0 && distance_selection_screen.childNodes.length 
        !== 0 && mass_2_selection_screen.childNodes.length !== 0) {
            m1 = mass_1_selection_screen.textContent;
            d = distance_selection_screen.textContent;
            m2 = mass_2_selection_screen.textContent;
            calculate(m1, d, m2);
        } else {
            return;
        }
}

function calculate(m1, d, m2) {
    let m1_as_int = Number(m1);
    let d_as_int = Number(d);
    let m2_as_int = Number(m2);
    let numerator = (m1_as_int * m2_as_int);
    let denominator = (d * d);
    let result = grav_const * (numerator / denominator);
    output_screen.textContent = result;
}