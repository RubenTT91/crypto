function Encryptor(valueText, valueKey) {
  let texto = valueText;
  let llave = valueKey;
  let newText=[];
  let convertKey =0;
  console.log(valueKey);
  console.log(typeof(valueKey));
  


  for (let i =0; i < valueKey.length; i++) {
      convertKey += llave%10;
      llave = Math.floor(llave/10);      
    }    
    

    for (let j = 0; j < texto.length; j++) {

      let newCode;
      if(j%2===0){
         newCode = convertKey + Number(texto[j].codeCharAt(j));
         newText[j] = String.fromCharCode(newCode);
        }
        else{
          newCode = convertKey - Number(texto[j].codeCharAt(j));
          newText[j] = String.fromCharCode(newCode);
        }    
    }
    
  return "Se ejecuto el encriptador";

}

export default Encryptor;
