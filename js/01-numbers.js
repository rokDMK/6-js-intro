/*
KINTAMIEJI
inicivimo budai:
- const (default) - reiksme nekinta
- let - kai reiksme turi kisti
- var - nenaudoti!!!

SKAICIAI
- sveikieji
- desimtainiai
- teigiami
- neigiami
- begalybe
- NaN (Not-a-Number)

OPERATORIAI: +, -, *, /, **(kelimas laipsniu)

MATEMATINES FUNKCIJOS (Math.):
- sqrt (saknis)
- sin
- cos
- abs (absoliutine reiksme)
- round/ceil/floor (skirtingi apvalinimai)
*/

console.log('Numbers...');

const a = 0;
const b = 1;
let c = 2;

console.log(a);
console.log(b);
console.log(c);

c = 22;

console.log(c);

const sveikasis = 777;
const desimtainis = 3.141592654;
const neigiamas = -1;
const neigiamasDesimtainis = -3.141592654;
const begalybe = Infinity;
const neigiamaBegalybe = -Infinity;
const neSkaicius = NaN;

console.log(begalybe);
console.log(neigiamaBegalybe);
console.log(neSkaicius);

const dalybaIsNulio = 7/0;
console.log(dalybaIsNulio);

const dalybaIsNulio2 = -7/0;
console.log(dalybaIsNulio2);

const nesamone = 'labas rytas' / 2;
console.log(nesamone);

const saknis9 = Math.sqrt(9)
console.log(saknis9);

const round1 = Math.round(2.6);
console.log(round1);

const ceili = Math.ceil(2.9);
console.log(ceili);

const floor1 = Math.floor(2.1);
console.log(floor1);