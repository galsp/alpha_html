function run(operator, bilangan1, bilangan2){
  let hasil=0
  if(operator == "+"){
    hasil = bilangan1 + bilangan2
  }
  else if (operator == "-"){
    hasil = bilangan1 - bilangan2
  }
  else if (operator == "*"){
    hasil = bilangan1 * bilangan2
  }
  else if (operator == "/"){
    if (bilangan2 !== 0 && bilangan1!==0){
    hasil = bilangan1 / bilangan2
    }
    else{
      hasil = "Eror"
      
    }
  }
  return(hasil);
  
}

let akhir = run("/", 5, 1)
console.log(akhir)