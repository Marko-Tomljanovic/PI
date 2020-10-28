/* 
Marko Tomljanović
Zadatak JS-202
2. (JS-202) FizzBuzz. Napiši program koji ce ispisati sve brojeve od 1 do 100 uz dvije iznimke. Ukoliko je
broj djeljiv s 3 umjesto njega ce ispisati "Fizz", ukoliko je djeljiv s 5, umjesto njega ce ispisati "Buzz", a
ako je djeljiv s 3 i 5, ispisat ce umjesto njega "FizzBuzz".
*/

for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");continue;
    }
    if(i%3==0){
        console.log("Fizz"); continue;
    } 
    if(i%5==0){
        console.log("Buzz");continue;
    } 
    else{console.log(i);
    } 
}
