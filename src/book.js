function createTitle(bookIdea) {
  return `The ${bookIdea}`
};

function buildMainCharacter(name, age, pronouns) {
  return {
  name: name,
  age: age,
  pronouns: pronouns
  }
};

function saveReview(review, reviews) {
    if (!reviews.includes(review)) {
      reviews.push(review)
    }
  };

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
};

function writeBook(title, mainCharacter, genre) {
  return book = {
    title: title,
    mainCharacter:  mainCharacter,
    pageCount: title.length * 20,
    genre: genre
  }
};

function editBook(book) {
  book.pageCount = book.pageCount * .75
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}