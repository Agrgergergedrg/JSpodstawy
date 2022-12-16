'use strict';
// Zadanie 2

// 1.
const znowuCyfry = [];
for(let i = 0; i < 5; i++){
    znowuCyfry.push("1 2 3 4 5");
}
console.log(znowuCyfry.join("\n"));

// 2.
for(let i = 1; i<6;i++){
    let iks = "*"
    const pTata = document.createElement("p");
    const xZapetlacz = document.createTextNode(iks.repeat(i));
    pTata.appendChild(xZapetlacz);
    const element = document.getElementById("p1");
    element.appendChild(pTata);
}

// 3. 
for(let i = 5; i<6;i--){
    let iks = "*"
    const pTata = document.createElement("p");
    const xZapetlacz = document.createTextNode(iks.repeat(i));
    pTata.appendChild(xZapetlacz);
    const element = document.getElementById("p1");
    element.appendChild(pTata);
}