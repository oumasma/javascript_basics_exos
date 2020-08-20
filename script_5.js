const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//Est-ce que tous les livres ont été au moins empruntés une fois ?

bookRente = []
for(let index in books) {
  let rented = books[index].rented;
  bookRente.push(rented);
  console.log(bookRente[index]);
  if (bookRente[index] > 0) {
    console.log("Le livre a ete empreinte au moins une fois");
  }
}

//Quel est livre le plus emprunté ?

let max = 0;
let name = "";
books.forEach(book => {
if (book.rented > max) {
    max = book.rented;
    name = book.title;
  }
});
console.log(max + " " + name);


//Quel est le livre le moins emprunté ?

let minRented = books.reduce(function(prev, curr) {
    return prev.rented < curr.rented ? prev : curr;
});
console.log(minRented);

//Trouve le livre avec l'ID: 873495

let find = 0;

books.forEach(book => {
if (book.id > find) {
    find = book.id;
  }
});
console.log(find);

// Supprime le livre avec l'ID: 133712

console.log(books.shift())
console.log(books)

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)

let arrayBooksTitle = [];
books.forEach((book) =>{

  arrayBooksTitle.push(book.title);

});
console.log(arrayBooksTitle.sort());

