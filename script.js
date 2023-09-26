function run(n1, n2, n3){
  if ( n1 < n2 && n2 < n3 && ( (n1 + n2 + n3)/3 ) > 90 ){
    out = "benar"
  } 
  else {
   out = "salah"
  }

  return out;
}

alert(run(89 , 93, 95))