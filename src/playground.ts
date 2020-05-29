console.log("This is your playground, experiment with TS code and check the console");


const head = ([elements]:string[] = ['Elements not found']) => elements;

console.log('head',head(['hello', 'world']))


const tail = ([,...elements]) => elements;

console.log('tail',tail([1,2,4]));

const init = (elements:string[]) => elements.slice(0, -1); 

console.log('init', init(['hello', 'world', '!']));

const last = (elements:string[]) => elements[elements.length - 1];

console.log('last', last(['hello', 'world', '!']));

const concat = (elements1:string[], elements2:string[]) => [...elements1, ...elements2];

console.log('concat', concat(['hello', 'world'], ['from', 'Luxembourg']))

const multipleConcat = (...elements):string[] => elements.flatMap(element => [...element]);

console.log('multipleConcat', multipleConcat(['hello', 'world'], ['from', 'Luxembourg'], ['Grand', 'Duchy']))



const clone = source => Object.assign({}, source);


console.log('clone', clone({this: 'is', a: 'cloned', obj: 'from source'}))



const merge = (source, target) => Object.assign({}, source, target);

const merge1 = {name: "Maria", surname: "Ibañez", country: "SPA"};
const merge2 = {name: "Luisa", age: 31, married: true};
console.log('merge', merge(merge1, merge2))


interface BooksInterface {
  title: string,
  isRead: boolean
}

const isBookRead = (books:BooksInterface[], titleToSearch:string) => {
  let isRead = false;
  books.map(book => {isRead = book.title === titleToSearch})

  return isRead;
}

const books = [
  {title: "Harry Potter y la piedra filosofal", isRead: true},
  {title: "Canción de hielo y fuego", isRead: false},
  {title: "Devastación", isRead: true},
];


console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


class SlothMachine {

  coins: number = 0;

  roller1: boolean;
  roller2: boolean;
  roller3: boolean;

  getRandom() {
    return Math.random() >= 0.5;
  }
  executeRoller() {
    this.roller1 = this.getRandom();
    this.roller2 = this.getRandom();
    this.roller3 = this.getRandom();

    this.roller1 && this.roller2 && this.roller3
      ? console.log(`Congratulations!!!. You won ${this.coins} coins!!`)
      : console.log("Good luck next time!!!")
  }

  play() {
    this.coins++;
    this.executeRoller();
  }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"