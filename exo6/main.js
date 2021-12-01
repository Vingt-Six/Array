// 1
let monTab = ['pomme', 'fraise', 'melon', 'citron'];
monTab.pop();
monTab.shift();
monTab.push("pastèque");
monTab.unshift("mangue");
monTab[1] = monTab[1].toUpperCase();
console.log(monTab.reverse());

// 2
let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();
chiffres =  chiffres.join();
console.log(chiffres);
chiffres = chiffres.split(",");
// console.log(chiffres);

// 3
let vide = [];
vide.push("elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7", "elem8", "elem9", "elem10");
console.log(vide , vide.length);
console.log(vide.indexOf("elem4"));


let coding = [];
coding.push("Alixe", "Anthony", "Cyril", "Geoffrey", "Hedi", "Ismail", "Johan", "Jonathan", "Louis", "Margaux", "Marouane", "Nassim", "Soufiane", "Stephan", "Steven", "Walid");
console.log(coding[Math.floor(Math.random()*coding.length)]);

coding.splice(coding.indexOf("Marouane"), 1);
console.log(coding);