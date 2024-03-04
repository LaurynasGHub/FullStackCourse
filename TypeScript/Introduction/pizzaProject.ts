//sukuriam nauja klase
//sukuriam tipa is kurio galima pasirinkti viena is objektu, verciu
type Base = 'classic' | 'thick' | 'thin' | 'italian' | 'garlic';

//sukuriam nauja klase
// class Pizza {
//   //constructor suveda klases savybes su objekto savybemis, klaseje gali buti tik vienas
//   constructor(title: string, price: number) {
//     this.title = title;
//     this.price = price;
//   }

//   title: string;
//   price: number;
//   base: Base = 'classic'; //kadangi cia base, galima rinktis tik is to kas yra sudeta i tipa
//   toppings: string[] = [];
//   //access modifiers raktiniai zodziai kuriuos rasome pries savybes, private padaro, kad musu savybes pasiekiamas tik pacios klases viduje
//   private picosSavikaina: number = 5;

//   //klaseje gali buti ir funkcijos, ne tik savybes
//   //void cia reiskia kad nieko negrazina
//   addTopping(topping: string): void {
//     this.toppings.push(topping);
//   }

//   removeTopping(topping: string): void {
//     this.toppings = this.toppings.filter((t) => t !== topping);
//   }

//   selectBase(b: Base): void {
//     this.base = b;
//   }
// }

// const pizza = new Pizza('Domino ranch pizza', 15);
// pizza.addTopping('mushrooms');
// pizza.addTopping('salami');
// pizza.addTopping('paprika');
// pizza.removeTopping('paprika');
// pizza.selectBase('garlic');

// console.log(pizza);

// pizza.picosSavikaina; //cia meta error nes savybe yra privati

//===========savybiu paveldejimas================
//sukuriam viena klase kurioje yra bendros, visiem reikalingos savybes
class MenuItem {
  constructor(private title: string, private price: number) {}
  //get padaro kad klaseje esanti funkcija elgtusi kaip savybe ir nebutu panaudojama kaskart kai parasomas jos pavadinimas
  get details(): String {
    return `${this.title} - ${this.price} e`;
  }
}

//extendinam klase, i ja pridedam nauju savybiu
class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    //super cia naudojam, kad galetumem is tevines klases paimti mums reikalingas savybes, constructor ka tures musu naujas elementas, super ka paimam is tevynes
    super(title, price);
  }
}

function printMenuItem(item: MenuItem): void {
  console.log(item.details);
}

const NewPizza = new Pizza('cesnakine', 25);
printMenuItem(NewPizza);
