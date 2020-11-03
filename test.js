const arr = [
    {a:'Abc', b:'efg', c:'hij'},
    {a:'abc', b:'efg', c:'hij'},
    {a:'123', b:'456', c:'789'},
  ];
  

  const usporedba=function(lista, pojam){
  
    const rez = arr.filter(obj => Object.values(obj).some(val => val.includes(pojam)));
    return rez;
  }
  
  
  
  console.log(usporedba(arr, "ab"));