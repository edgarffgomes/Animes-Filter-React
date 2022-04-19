import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import InputSearch from "./InputSearch"
import './App.css';

function App() {
  //inicializando variável que será utilizada para monitorar o texto inserido pelo usuário
  const [text, setText] = useState('')
  
 
  return (
    <div className="App">
      <h1>Animes</h1>
      {/*Chamando componente que irá setar o text com o valor imposto pelo usuário*/}
      <InputSearch value={text} onChange={(search)=> setText(search)}/>
    </div>
  );
}

export default App
