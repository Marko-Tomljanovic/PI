/* 
Marko Tomljanović
Zadatak JS-403
4. (JS-403) Napiši funkciju zagrade koja će provjeriti jesu li zagrade valjano ugnježdene:
Hint: stog može pomoći :)
*/

const zagrade = function(s) {       //eliminacijska provjera da li je string paran
    let rez=false;
    if((s.length%2)!=0){
        return rez;
    }else{
       return provjera(s);
    }};


const provjera=function(s){                       //eliminacijska provjera da li svaka zagrada ima par
    let obicna1=0;obicna2=0;uglata1=0;uglata2=0;viticasta1=0;viticasta2=0;
    let lista=[];
    for(let i=0;i<s.length;i++){
        lista[i]=s.charAt(i);
    }
    for(let i=0;i<s.length;i++){
        if(lista[i]=="("){ obicna1++; 
        }else if(lista[i]==")"){ obicna2++; 
        }else if(lista[i]=="["){ uglata1++; 
        }else if(lista[i]=="]"){ uglata2++; 
        }else if(lista[i]=="{"){ viticasta1++; 
        }else{ viticasta2++; 
        }
    }if(obicna1==obicna2 && uglata1==uglata2 && viticasta1==viticasta2){
        return raspored(lista,s);
    }else{
        return false;
    }    
}

//eliminacijska provjera da li za sve tri vrste zagrada da li su korektno matematicki smjestene
const raspored=function(lista,s){
    for(let i=0;i<s.length;i++){
        if(lista[i]=="{"){
            for(let j=(s.length-1);j>=0;j--){
                if(lista[j]=="}"){
                    if((j-i-1)%2!=0){
                        return false;
                    }else{
                        lista[i]="*";
                        lista[j]="*";
                   }{break;}
                }
            }
        }}   
    for(let i=0;i<s.length;i++){
        if(lista[i]=="["){
            for(let j=(s.length-1);j>=0;j--){
                if(lista[j]=="]"){
                    if((j-i-1)%2!=0){
                        return false;
                    }else{
                        lista[i]="*";
                        lista[j]="*";
                   }{break;}
                }
            }
        }}
    for(let i=0;i<s.length;i++){
            if(lista[i]=="("){
                for(let j=(s.length-1);j>=0;j--){
                    if(lista[j]==")"){
                        if((j-i-1)%2!=0){
                            return false;
                        }else{
                            lista[i]="*";
                            lista[j]="*";
                       }{break;}
                    }        
                }
            }}
return true; 
}

    

//console.log(zagrade("{{[()]}()}")); // ! true
  console.log(zagrade("[[()]]()()")); // ! true
  console.log(zagrade("{[((()))]}")); // ! true
  console.log(zagrade("({)}")); // ! false