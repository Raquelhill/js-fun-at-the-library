class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.morning = true;
  };

  greetPatron(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  };

  findBook(title) {
    var shelves = this.library.shelves.fantasy
    for (var i = 0; i < shelves.length; i++) {
      if (shelves[i].title === title) {
        shelves.splice([i], 1);
        return `Yes, we have ${title}`
      }
    }
    return `Sorry, we do not have ${title}`
  };

  calculateLateFee(fee) {
    return fee/3
  }
};
module.exports = Librarian;