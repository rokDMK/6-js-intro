console.clear();

/*
IF - salygos sakinys / palyginimas
Palyginimo operatoriai: <, >, ==, !=, >=, <=, ===, !==
Naudotini: <, >, >=, <=, ===, !==
Nenaudotini: ==, !=
Loginiai operatoriai: && (and), || (or), ! (negate).
Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/

const a = 7;
const b = 7;

if (a !== b) {
    console.log('A nelygu B');
} else {
    console.log('A lygu B');
}

console.log('PABAIGA...');

const day = 3.5;
let dayName = '';

if (day === 1) {
    dayName = 'pirmadienis';
} else if (day === 2) {
    dayName = 'antradienis';
} else if (day === 3) {
    dayName = 'treciadienis';
} else if (day === 4) {
    dayName = 'ketvirdienis';
} else if (day === 5) {
    dayName = 'penktadienis';
} else if (day === 6) {
    dayName = 'sestadienis';
} else if (day === 7) {
    dayName = 'sekmadienis';
} else {
    dayName = 'tokia diena neegzistuoja';
}

console.log('Siandien yra:', dayName);

const pirmas = 7;
const antras = '7';

if (pirmas === antras) {
    console.log('TAIP');
} else {
    console.log('NE');
}


// NESTINIMAS - code nesting

const diena = 8;
let siandien = '';

if (diena === 1) {
    siandien = 'pirma';
} else {
    if (diena === 2) {
        siandien = 'antra';
    } else {
        if (diena === 3) {
            siandien = 'trecia';
        } else {
            if (diena === 4) {
                siandien = 'ketvirta';
            } else {
                if (diena === 5) {
                    siandien = 'penkta';
                } else {
                    if (diena === 6) {
                        siandien = 'sesta';
                    } else {
                        if (diena === 7) {
                            siandien = 'sekma';
                        } else {
                            siandien = 'tokia diena neegzistuoja';
                        }
                    }
                }
            }
        }
    }
}
console.log('Siandien yra:', siandien);

console.log('#############3');


const siltaNuoTemp = 22;
const temp = 12;
const arLyja = false;
let ats = '';

if (temp >= siltaNuoTemp) {
    if (arLyja === true) {
        ats = 'Einam nuogi 😅';
    } else {
        ats = 'Galima eiti su maike';
    }
} else {
    if (arLyja === true) {
        ats = 'Sedim namie - niekur neinu!';
    } else {
        ats = 'Pasiimk striuke';
    }
}

console.log(ats);

let ats2 = '';

if (temp >= siltaNuoTemp && arLyja === true) {
    ats2 = 'Einam nuogi 😅';
} else if (temp >= siltaNuoTemp && arLyja === false) {
    ats2 = 'Galima eiti su maike';
} else if (temp < siltaNuoTemp && arLyja === true) {
    ats2 = 'Sedim namie - niekur neinu!';
} else if (temp < siltaNuoTemp && arLyja === false) {
    ats2 = 'Pasiimk striuke';
}

console.log(ats2);