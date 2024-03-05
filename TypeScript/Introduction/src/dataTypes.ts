//galima kurti interfacus su tipu kuri nurodom po to, siuo atveju T yra tipas kuri reikia irasyti
//Data cia yra interface pavadinimas
interface Data<T> {
  name: string;
  data: T;
}

//i data vieta paduodam kad ten turi buti masyvas su skaiciais
const guest1: Data<number[]> = {
  name: 'Tadas',
  data: [12, 15, 23],
};

console.log(guest1);

//cia data vietoje tiesiog idedamas vienas string tipo kintamasis
const guest2: Data<string> = {
  name: 'Vardas',
  data: 'tam tikra info',
};

console.log(guest2);
