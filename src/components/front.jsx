import React, { useState } from "react";
import Encryptor from "./encryptor";
import Decrypt from "./decrypt";

function Front() {
  const [key, setKey] = useState('');
  const [text, setText] = useState('');
  const [txt, setTxt] =useState('');
  const [ky,setKy]= useState('');

  function handClick(){    
    setTxt(text);
    setKy(key);  
    setKey('');
    setText('');
  }
  



  return (
    <div>
      <h1>Crypto Ruben</h1>
      <div className="tuto">
        <h3>Encrypt</h3>
        <p>
          Easy to use, first write a number password with only four characters,
          then writter the words that you want encrypti in the text Box.
          Finally, push the "Encriptar" button. At the end of page, you'll see
          the result ecnrypted.
        </p>
      </div>
      <div className="container-inputs">
        {/* Contenedor Llave y Texto
         * Para encriptar se usan 2 contenedors, uno para la llave (tipo contraseña)
         * y otor tipo text, para el texto que vamos a convertir.
         */}

        <div className="container-short">
          <label for="key">Llave</label>
          <br />
          <input
            type="password"
            onChange={(e) => setKey(e.target.value)}
            value={key}
          />
        </div>
        <br />
        <div className="container-short">
          <label for="text">Texto</label>
          <br />
          <textarea
            type="text"
            onChange={(e) =>setText(e.target.value)}
            value={text}
            placeholder="..."
          ></textarea>
        </div>
        <br />
        {/* Contendor de Botones,
         * Tambien necesitamos un contenedor para botones,
         * Para encriptar, enviará la informacion a encriptar
         * Para Desencriptar,
         * Para limpiar los campos.
         */}

        <div className="container-buttons">
          <button onClick={handClick}>Encriptar</button>
          <button>Desencriptar</button>
          <button>Limpiar</button>
        </div>

        {/** Contenedor Resultado final
         * Este permite mostrar el contenido final, aquí llegará la información final.
         */}

        <br />
        <hr />
        <div className="text-result">
          <p>
            <Encryptor valueText={txt} valueKey={ky}/>
            <Decrypt />
          </p>
          <hr />
          <br />
        </div>
      </div>

      <footer>
        <p>
          RubenTT{" "}
          <a href="https://github.com/RubenTT91" target="_new">
            Git{" "}
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Front;