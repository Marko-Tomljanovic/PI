/* 
Marko Tomljanović
Zadatak JS-302
2. (JS-102) Napiši program koji prima broj bodova sa kolegija i ispisuje ocjenu (prema previlniku o
    ocjenjivanju). Ukoliko je ocjena pozitivna ispisati teskt sa cestitkom i ocjenom.
*/

let bodovi = prompt("Unesi broj bodova");
//proba
//let bodovi=75;
let ocjena;
let poruka;
// tvoj kod
if(bodovi<50){
    poruka="Ocjena nije pozitivna!";
}else{
    poruka="Čestitam imate dovoljan broj bodova!"
}
if(bodovi<50) ocjena=1;
if(bodovi>50 && bodovi<60) ocjena=2;
if(bodovi>60 && bodovi<70) ocjena=3;
if(bodovi>70 && bodovi<80) ocjena=4;
if(bodovi>80) ocjena=5;

console.log(poruka+"\nOcjena: "+ocjena);