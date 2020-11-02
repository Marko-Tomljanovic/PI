/* 
Marko Tomljanović
Zadatak JS-402
4. (JS-403) Napiši funkciju zagrade koja će provjeriti jesu li zagrade valjano ugnježdene:
Hint: stog može pomoći :)
*/

const zagrade = function(s) {
    let rez=false;
    let druga="";
    if((s.length%2)!=0){
        return rez;
    }else{
       return provjera(s);
    }};
    

// const provjera=function(s){
//     let druga="";
//     let lista=[];
//     for(let i=0;i<s.length;i++){
//         lista[i]=s.charAt(i);
//     }
//     for(let i=0;i<s.length;i++){
//         if(lista[i]=="("){
//             druga=")";
//             for(let j=i+1;j<s.length;j++){
//                 if(lista[j]==druga){
//                     lista[i]="*";
//                     lista[i+1]="*";
//                 }

//             }
            
//         }
//     }
    
    

//     return lista;
// }



const provjera=function(s){
    let obicna1=0;obicna2=0;uglata1=0;uglata2=0;viticasta1=0;viticasta2=0;
    let druga="";
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
        return raspored(lista,s,obicna1,obicna2,uglata1,uglata2,viticasta1,viticasta2);
    }else{
        return false;
    }    
}



const raspored=function(lista,s,obicna1,obicna2,uglata1,uglata2,viticasta1,viticasta2){
    for(let i=0;i<s.length;i++){
        if(lista[i]==obicna1 || lista[i]==uglata1 || lista[i]==viticasta1){
            for(let j=i+1;i<s.length;j++){
                if(lista[j]==obicna2 || lista[j]==uglata2 || lista[j]==viticasta2){
                    lista[i]="*";
                    lista[j]="*";
                }
            }
        }
    }
    return lista;
}



    console.log(zagrade("[()]()()")); // ! true
 //   console.log(zagrade("{[((()))]}")); // ! true
   // console.log(zagrade("({)}")); // ! false