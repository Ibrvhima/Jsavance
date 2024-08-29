// ### Question 1

//Écrivez un programme JavaScript pour vérifier si la chaîne "Code" est présente à la 5ème position (index 4) dans une chaîne donnée. Si "Code" est présent, renvoyez la chaîne sans "Code", sinon renvoyez la chaîne originale.

const sentence = "Faut crois que les Code java script sont cool";
const wordByWord = sentence.split(" ");
const word = "Code";

const positionWord = wordByWord.indexOf(word);
console.log(positionWord);
if (wordByWord.includes(word) && positionWord === 4) {
  console.log(sentence.replace(word, " "));
} else {
  console.log(sentence);
}

//### Question 2

//Écrivez un programme JavaScript pour capitaliser la première lettre de chaque mot d'une chaîne donnée.

wordByWord.forEach((element) => {
  const uperCase = element =>
    element.charAt(0).toUpperCase() + element.slice(1);
  console.log(uperCase(element));
});
