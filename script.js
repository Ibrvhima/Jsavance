"use strict";

//### Question 5
//Écrivez une fonction JavaScript pour convertir un objet en une liste de paires [clé, valeur].//

const person = {
  hisName: "Diallo",
  hisDjob: "Student",
};
function convertToListKeyValues() {
  return Object.entries(person);
}

console.log(convertToListKeyValues());

//### Question 6
//Écrivez une fonction qui prend un objet représentant une personne et retourne son nom complet.//

function aPerson(objet) {
  return console.log({ firstName: "diallo", lastName: "ibrahima" });
}
aPerson();

//### Question 7
//Créez un objet avec vos détails personnels. Imprimez maintenant toutes les clés de l'objet dans l'ordre croissant.

const Me = {
  myName: "diallo",
  myAge: 20,
  myHeight: 178,
  job: "student",
};
console.log(Object.keys(Me));

//## Question 8
//Créez un objet avec vos détails personnels. Filtrez maintenant toutes les valeurs de l'objet et affichez-les dans l'ordre décroissant.
const me = {
  myName: "diallo",
  myAge: 20,
  myHeight: 178,
  job: "student",
};

console.log(Object.values(Me));

//## Question 9

//Créez un objet pour contenir des informations sur votre recette préférée. Il doit avoir des propriétés pour le titre (une chaîne de caractères), les portions (un nombre) et les ingrédients (un tableau de chaînes de caractères). Sur des lignes séparées (une instruction `console.log` pour chaque), affichez les informations de la recette de sorte qu'elles ressemblent à ceci :

const myFavoriteFood = {
  title: "Salad",
  portion: 2,
  ingredients: ["salades", "tomatos", "salt", "eggs","oignons"],
};
console.log(myFavoriteFood.title);
console.log(myFavoriteFood.portion);
console.log("ingredient :");
myFavoriteFood.ingredients.forEach((element) => {
  console.log(element);
});

//### Question 10

//Créez une fonction JavaScript à l'intérieur d'un objet qui trouve le maximum de 3 nombres. Appelez maintenant cette fonction de l'objet et imprimez le nombre maximum.

const findMaximumNumber = {
  maxNumber: function (number1, number2, number3) {
    return Math.max(number1, number2, number3);
  },
};
const maximum = findMaiximumNumber.maxNumber(1, 2, 3)
console.log(`le maximum est : ${maximum}`);
