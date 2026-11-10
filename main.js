//1. feladat

const foCim = document.getElementById("focim")
foCim.textContent = "Mátrix rendszer";

//2. feladat

const statuszElemek = document.getElementsByClassName("statusz-szoveg")

//3. feladat

console.log(statuszElemek.length);

//4. feladat

statuszElemek[0].textContent = "Rendszer ellenőrzése folyamatban..."

//5. feladat
statuszElemek[1].textContent = "Kapcsolódás a hálózathoz..."


//6. feladat 

const listaElemek = document.querySelectorAll(".lista-elem")

//7. feladat

console.log(listaElemek[0].textContent)

//8. feladat

listaElemek[1].textContent = "Szerver állapot: ONLINE"

//9. feladat 

const nevInput = document.querySelector("#jatekos-nev-input")

//10.

const inditoGomb = document.querySelector("#indito-gomb")

//11.

const eredmenyDiv = document.getElementById("eredmeny")

//12 13,14,15.


inditoGomb.addEventListener("click", function(){
    const gombSzovege = inditoGomb.textContent;
    const jatekosNev = nevInput.value;
    eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzovege}`;
 })