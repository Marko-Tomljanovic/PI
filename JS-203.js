/* 
Marko Tomljanović
Zadatak JS-203
3. (JS-203) Napiši program koji ispisuje šahovsko polje koristeci razmak ( " " ) i znak # :
Napravi program tako da postoji na pocetku definirana varijabla velicina koja oznacava velicinu
kvadrata.
*/

let velicina=8;
for(let i=1;i<=velicina;i++){
    if(i%2!=0){
        console.log(" #".repeat(4));
    }else{console.log("# ".repeat(4));}
 }
