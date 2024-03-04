"use strict";
let vardas = 'Vardas';
let amzius = 25;
console.log(`vardas- ${vardas}, amzius- ${amzius}`);
let betKoks;
betKoks = 'vardas';
console.log(typeof betKoks);
betKoks = 25;
console.log(typeof betKoks);
let x = 'hello this is a test';
console.log(x.length);
console.log(x.length);
function sudetis(a, b) {
    return a + b;
}
console.log(sudetis(2, 2));
let vartotojas = {
    vardas: 'Tadas',
    amzius: 45,
    mokykla: 'Azuolynas',
};
console.log(vartotojas.mokykla);
let vardai = ['Vardas', 'Pavardas', 'Pavenis'];
vardai.push('naujas vardas');
console.log(vardai);
let asmuo = ['Aidas', 25, true];
const Autore = {
    name: 'Joane',
    secondName: 'Kristen',
    surName: 'Rowling',
};
const antraKnyga = {
    name: 'Haris poteris 2',
    autorius: Autore,
    metai: 2003,
};
function createBook(book) {
    console.log(`Knyga: ${book.name}, autorius: ${(book.autorius.name, book.autorius.surName)}, metai: ${book.metai}`);
}
createBook(antraKnyga);
//# sourceMappingURL=index.js.map