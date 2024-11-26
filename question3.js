// 3. Filtrera namn (2p)
// Skriv en funktion, filter names, som tar en array med namn och en bokstav
// som input och returnerar en ny array med de namn som börjar med bokstaven.
// funktionen behöver bara hantera en stor bokstav som input

// Exempel:
// filterNames(["John", "Mary", "Peter", "Jane"], "J") // Returnerar ["John", "Jane"]
// filterNames(["John", "Mary", "Peter", "Jane"], "P") // Returnerar ["Peter"]
// filterNames(["John", "Mary", "Peter", "Jane"], "X") // Returnerar []

function filterNames(names, letter) {
  // Din kod här
  const filtredName = names.filter((name) => {
    return name[0] === letter;
  });

  return filtredName;
}

console.log('Task 3 : ', filterNames(['John', 'Mary', 'Peter', 'Jane'], 'J'));
console.log('Task 3 : ', filterNames(['John', 'Mary', 'Peter', 'Jane'], 'P'));
console.log('Task 3 : ', filterNames(['John', 'Mary', 'Peter', 'Jane'], 'X'));

module.exports = filterNames;
