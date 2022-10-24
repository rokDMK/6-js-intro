console.clear();
/*
FOR - ciklas (tevinis)
*/

const users = ['Petras', 'Maryte', 'Jonas', 'Ona']
let userIndex = 0;

console.log(`Labas rytas, $users[userIndex]!`);
userIndex = userIndex + 1; 

const marks = [10, 2, 8, 4, 6, 5, 7, 2];
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

const count = marks.length;
const average = total / count;

console.log('Average: ', average);

for (let i = marks.length-1; i >= 0; i = i -1){
    console.log(i, '->', marks[i]);
}


const a = 30;
const b = 40;

for(let i = a; i <= b; i++) {
    console.log(i);
}

console.log('### Skaiciu suma intervale');
 const n1 = -70;
 const n2 = 30;
 let suma = 0;

 for (let i = n1; i <= n2; i++) {
     suma = suma + i;
     console.log(i, ' -> ', suma)
 }
 ////////////////////////////////////////////////////////////////

 console.clear();

 ////////////////////////////////////////////////////////////////

 function sumaIntervale(start, end) {
    let suma = 0;

    for (let i = start; i <= end; i++) {
        suma = suma + i;
    }
    console.log(`${start}..${end} = ${suma}`);

    return suma;
 }

 sumaIntervale(0, 0);
 sumaIntervale(0, 4);
 sumaIntervale(0, 100);
 sumaIntervale(574, 815);
 sumaIntervale(-50, 50);
 sumaIntervale(-70, 30);

    console.log('------------');


const pradzios = [0, 0, 0, 574, -50, -70]
const pabaigos = [0, 4, 100, 815, 50, 30]

const list = [
    {},
    { end: 4 },
    { end: 100 },
    { start: 574, end: 815 },
    { start: -50, end: 50 },
    { start: -70, end: 30 },
];

let obj = null;

for (let i = 0; i < list.length; i++) {
    obj = list[i];
    let pradzia = obj.start;
    let pabaiga = obj.end;
    if (!pradzia) {
        pradzia = 0;
    }
    if (!pabaiga) {
        pabaiga = 0;
    }
    sumaIntervale(pradzia, pabaiga);
}

    console.log('------------');

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(abc);

for (let i = 0; i < abc.length; i++) {
    const symbol = abc[i];
    console.log(symbol);
}

const username = 'Pomidoras';
console.log(username);

for (let i = 0; i < username.length; i++) {
    const symbol = username[i];
    console.log(symbol);
}