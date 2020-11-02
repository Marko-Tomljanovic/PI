/* 
Marko Tomljanović
Zadatak JS-401
2. (JS-401) Sastavi listu od 10 studenata sa sljedećim svojstvima: ime , prezime , upisan
(Boolean true / false ). Vrijednosti svojstava proizvoljno odaberi. Sastavi funkciju
provjeri(lista, pojam) koja vraća true ukoliko postoji student na lista čije ime ili
prezime je baš pojam , a upisan je.
*/

const provjeri=function(lista, pojam){
    let rez=false;
    for(let i=0; i<lista.length; i++){             //prolazi kroz listu
        if(pojam==lista[i].ime || pojam==lista[i].prezime || pojam==lista[i].ime + " " + lista[i].prezime){  //provjerava da li je upisan pojam jedan sa imenom, prezimenom ili zajedno
                if(lista[i].upisan===true){  //nakon prve provjere gledamo da li je upisan
                   rez=lista[i].upisan;
                    
            }
    }}
    return rez;
}

let lista = [
    {
    ime: "Marko",
    prezime: "Tomljanović",
    upisan: true
    },
    {
    ime: "Filip",
    prezime: "Guncević",
    upisan: false
    },
    {
    ime: "Bruno",
    prezime: "Kolesar",
    upisan: true
    },
    {
    ime: "Marin",
    prezime: "Marinčić",
    upisan: false
    },
    {
    ime: "Izabela",
    prezime: "Izebalović",
    upisan: true
    },
    {
    ime: "Ranka",
    prezime: "Ranković",
    upisan: false
    },
    {
    ime: "Ivana",
    prezime: "Ivančić",
    upisan: true
    },
    {
    ime: "Iva",
    prezime: "Ivić",
    upisan: false
    },
    {
    ime: "Dora",
    prezime: "Doričić",
    upisan: true
    },
    {
    ime: "Nikola",
    prezime: "Nikolić",
    upisan: false
    }
   ];
   console.log(provjeri(lista,"Filip"));  //za upisanog studenta
   console.log(provjeri(lista,"Dora"));  //za studenta koji nije upisan
   console.log(provjeri(lista,"Ivana Ivančić"));  //za upisanog studenta koji ima za ulaz puno ime i prezime
  //console.log(lista[0].ime + " " + lista[0].prezime);