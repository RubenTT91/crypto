import React from 'react'
import { useState } from 'react';

function Encryptor({valueText, valueKey}){
  const [result, setResult] =useState('');
  console.log(valueText);
  console.log(valueKey);
return (<div>    

    <p>{result}</p>
    
  </div>
  )
  }
  export default Encryptor;
