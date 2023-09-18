function Movie(title, director, genre,releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function() {
  return `${this.title}, a ${this.genre} film directed by ${this.director} was released in
  ${this.releaseYear} and received a rating of ${this.rating}`;
}

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2008, 87);
const Batman = new Movie("Batman", "Christopher Nolan", "Action", 2008, 83);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman);
console.log(Batman.getOverview());