/* 
Marko Tomljanović
Zadatak JS-303
3. (JS-303) Implementirati Ackermann-ovu funkciju:
*/

const ackermann=function(m,n){
    if(m==0 && n!=0){
        return n+1;
    }else if(m>0 && n==0){
        return ackermann(m-1,1);
    }else{
        return ackermann(m-1, ackermann(m,n-1));
    }       
}

console.log(ackermann(0, 5)); // → 6
console.log(ackermann(5, 0)) // → 65533
console.log(ackermann(3, 3)) // → 61