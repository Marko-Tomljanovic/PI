/* 
Marko Tomljanović
Zadatak JS-301
1. (JS-301) Napisati funkciju min koja prima dva argumenta i vraća natrag manjeg.
*/

const min = function(a,b) {
    if(a<b){
        return a;
    }if(a>b){
        return b;
    }else{
        return "Brojevi su jednaki!";
    }
    };
    let a,b;
    console.log(min(0,4));
    console.log(min(0,-4));
    console.log(min(4,4));