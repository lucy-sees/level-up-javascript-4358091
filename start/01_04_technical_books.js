class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition){
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition(){
    return `The current version of this book is ${this.edition}`;
  }
}

const CrackingTheCodingInterview = new TechnicalBook("Cracking The Coding Interview", "Gayle Laakmann McDowell", 120912, 1, 6);
console.log(CrackingTheCodingInterview.getAvailability());
console.log(CrackingTheCodingInterview.availability)
console.log(CrackingTheCodingInterview.getEdition());