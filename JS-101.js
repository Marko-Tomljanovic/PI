// 1. (JS-101) Nadopuni kod da ispravno ispisuje.

let a = prompt("Unesi prvi broj");
let b = prompt("Unesi drugi broj");
let c = prompt("Unesi treći broj");
let d = prompt("Unesi četvrti broj");
// tvoj kod
//proba
//let a = 4;
//let b = 5;
//let c = 6;
//let d = 7;
//let maks;

if (a > b) {
    maks=a;
   }else{
       maks=b;
   }
   if (b > c) {
    maks=b;
   }else{
       maks=c;
   }
   if (c > d) {
    maks=c;
   }else{
       maks=d;
   }
console.log("Najveći između njih je: " + maks);