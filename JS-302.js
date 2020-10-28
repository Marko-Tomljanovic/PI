/* 
Marko Tomljanović
Zadatak JS-302
2. (JS-302) Napisati funkciju koja prima string i vraća najveći broj uzastopno istih znakova u tom stringu.
*/

const isti_znakovi = function(a) {
     let count=0;
     let s=0;
     let rezultat=0;
do{
    for(let i=0;i<a.length;i++){
        if(a.charAt(s)==a.charAt(i)){
            count++;
        }
    }
    if(count>rezultat){
        rezultat=count;
    }
    count=0;
    s++;
}while(s<a.length); 
     return rezultat;
         };

   console.log("Najveci br uzastopno istih znakova u stringu-baaaccd:  ",isti_znakovi("baaaccd"));
   console.log("Najveci br uzastopno istih znakova u stringu-ba2dll:  ",isti_znakovi("ba2dll"));