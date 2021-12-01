let marouane = "coding 21";

let tabExo5 = ["string", marouane, 1, 2, false];

console.log(tabExo5);
// 2
console.log(tabExo5.length);
// 3
tabExo5.pop();
console.log(tabExo5);
// 4
tabExo5.shift();
console.log(tabExo5);
// 5
tabExo5.push("marouane", "vingt-six");
console.log(tabExo5);
// 6
tabExo5.unshift("site", "du", "chef");
console.log(tabExo5);
//7
console.log(tabExo5.reverse());
//8
let elias = [];
elias.push("objet1")
elias.push("objet2")
// alert(elias);

elias.unshift("objet3");
// alert(elias);

elias.push("objet4", "objet5", "objet6");
// alert(elias);

console.log(elias);

elias.splice("", 3);
// console.log(elias);

elias.push("objet7");
// alert(elias.length);

elias.splice(1, 2);
elias.splice("", 2);
alert(elias);