//uzduotis 1
let vardas: string = 'Vardas';
let amzius: number = 25;

console.log(`vardas- ${vardas}, amzius- ${amzius}`);

//uzduotis 2
let betKoks: any;

betKoks = 'vardas';
console.log(typeof betKoks);

betKoks = 25;
console.log(typeof betKoks);

//uzduotis 3
let x: unknown = 'hello this is a test';

console.log((x as string).length);
console.log((<string>x).length);

//kiti metodai
//tipo tikrinimas
type amzius = number | string;

function sudetis(a: number, b: number): number {
  return a + b;
}

console.log(sudetis(2, 2));

//objektai
let vartotojas: { vardas: string; amzius: number; mokykla: string } = {
  vardas: 'Tadas',
  amzius: 45,
  mokykla: 'Azuolynas',
};

console.log(vartotojas.mokykla);

//array
let vardai: string[] = ['Vardas', 'Pavardas', 'Pavenis'];
vardai.push('naujas vardas');

console.log(vardai);

//tuples- masyvas kur duomenys ivairiu tipu bet tam tikra tvarka
let asmuo: [string, number, boolean] = ['Aidas', 25, true];

//interface - nustatymai kuriu turi laikytis kitos klases ar net ir kiti interface
interface Knyga {
  name: string;
  autorius: Author;
  metai: number;
}

// const pirmaKnyga: Knyga = {
//   name: 'Haris poteris',
//   autorius: 'J.K.Rowling',
//   metai: 2001,
// };

interface Author {
  name: string;
  secondName: string;
  surName: string;
}

const Autore: Author = {
  name: 'Joane',
  secondName: 'Kristen',
  surName: 'Rowling',
};

const antraKnyga: Knyga = {
  name: 'Haris poteris 2',
  autorius: Autore,
  metai: 2003,
};

//interface funkcijoje
function createBook(book: Knyga): void {
  console.log(
    `Knyga: ${book.name}, autorius: ${
      (book.autorius.name, book.autorius.surName)
    }, metai: ${book.metai}`
  );
}

createBook(antraKnyga);
