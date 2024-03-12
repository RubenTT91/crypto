function Encryptor(valueText, valueKey) {
  let texto = valueText;
  let llave = Number(valueKey);
  let newText = [];
  let convertKey = 0;

  for (let i = 0; i < valueKey.length; i++) {
    convertKey += llave % 10;
    llave = Math.floor(llave / 10);
  }

  for (let j = 0; j < texto.length; j++) {
    let newCode;

    if (j % 2 === 0) {
      newCode = convertKey + texto.charCodeAt(j);
      newCode>126 ? newCode = 126 - newCode : newCode=newCode ;
      newText[j] = String.fromCharCode(newCode);
    } else {
      newCode>126 ? newCode = 126 -newCode : newCode=newCode;
      newCode = convertKey - Number(texto.charCodeAt(j));
      newText[j] = String.fromCharCode(newCode);
    }
  }

  return newText;
}

export default Encryptor;
