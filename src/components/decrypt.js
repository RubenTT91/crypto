function Decrypt(valueText, valueKey) {
  let texto = valueText;
  let llave = Number(valueKey);
  let newText = [];
  let convertKey = 0;

/** CONVERSIÓN DE LA LLAVE */
  for (let i = 0; i < valueKey.length; i++) {
    convertKey += llave % 10;
    llave = Math.floor(llave / 10);
  }

/** CONVERSIÓN DEL TEXTO */
  for (let j = 0; j < texto.length; j++) {
    let newCode;
    if (j % 2 === 0) {
      newCode = convertKey - texto.charCodeAt(j);      
      newText[j] = String.fromCharCode(newCode);
    } 
    else {      
      newCode = convertKey + Number(texto.charCodeAt(j));
      newText[j] = String.fromCharCode(newCode);
    }
  }
  return newText;
}
export default Decrypt;