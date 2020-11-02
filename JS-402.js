/* 
Marko Tomljanović
Zadatak JS-402
3. (JS-402) Nadogradi prethodni zadatak na način da ime i prezime ne moraju biti istovjetni pojmu, već
je dovoljno da taj pojam sadržavaju. Neka pretraga bude neosjetljiva na velika i mala slova. Dodaj u tu
funkciju još jedan parametar status na način da funkcija provjerava jeli student.status
istovjetan primljenom parametru status . Drugim riječima, ne provjerava samo upisane studente
nego se može specificirati status upisa.
*/

const provjeri=function(lista, pojam, status){
    pojam=pojam.toLowerCase();
    let rez=false;
    for(let i=0; i<lista.length; i++){           
        if(pojam==lista[i].ime.toLowerCase() || pojam==lista[i].prezime.toLowerCase() || pojam==lista[i].ime.toLowerCase() + " " + lista[i].prezime.toLowerCase() || status==lista[i].upisan){   
                    rez=lista[i].upisan;
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
    upisan: true
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
  console.log(provjeri(lista,"FILIP",true));  //za upisanog studenta sa velikim slovima i dodatnim parametrom status
  console.log(provjeri(lista,"nikola",true)); //za studenta sa razlicitim statusom
