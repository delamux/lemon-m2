var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log("This is your playground, experiment with TS code and check the console");
var head = function (_a) {
    var elements = (_a === void 0 ? ['Elements not found'] : _a)[0];
    return elements;
};
console.log('head', head(['hello', 'world']));
var tail = function (_a) {
    var elements = _a.slice(1);
    return elements;
};
console.log('tail', tail([1, 2, 4]));
var init = function (elements) { return elements.slice(0, -1); };
console.log('init', init(['hello', 'world', '!']));
var last = function (elements) { return elements[elements.length - 1]; };
console.log('last', last(['hello', 'world', '!']));
var concat = function (elements1, elements2) { return __spreadArrays(elements1, elements2); };
console.log('concat', concat(['hello', 'world'], ['from', 'Luxembourg']));
var multipleConcat = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return elements.flatMap(function (element) { return __spreadArrays(element); });
};
console.log('multipleConcat', multipleConcat(['hello', 'world'], ['from', 'Luxembourg'], ['Grand', 'Duchy']));
var clone = function (source) { return Object.assign({}, source); };
console.log('clone', clone({ this: 'is', a: 'cloned', obj: 'from source' }));
var merge = function (source, target) { return Object.assign({}, source, target); };
var merge1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
var merge2 = { name: "Luisa", age: 31, married: true };
console.log('merge', merge(merge1, merge2));
var isBookRead = function (books, titleToSearch) {
    var isRead = false;
    books.map(function (book) { isRead = book.title === titleToSearch; });
    return isRead;
};
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.coins = 0;
    }
    SlothMachine.prototype.getRandom = function () {
        return Math.random() >= 0.5;
    };
    SlothMachine.prototype.executeRoller = function () {
        this.roller1 = this.getRandom();
        this.roller2 = this.getRandom();
        this.roller3 = this.getRandom();
        this.roller1 && this.roller2 && this.roller3
            ? console.log("Congratulations!!!. You won " + this.coins + " coins!!")
            : console.log("Good luck next time!!!");
    };
    SlothMachine.prototype.play = function () {
        this.coins++;
        this.executeRoller();
    };
    return SlothMachine;
}());
var machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
