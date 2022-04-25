import React, {useState, useEffect} from "react"
import InputSearch from "./InputSearch"
import "./App.css"
import { BiSearchAlt } from "react-icons/bi";
const api = 'https://kitsu.io/api/edge/'

function App() {
  //inicializando state que será utilizada para monitorar o texto inserido pelo usuário
  const [text, setText] = useState('')
   //inicializando state que será utilizada para receber os dados da API.
  const [info, setInfo] = useState({})
 //Pesquisando dados correspondentes ao input na API a cada mudança no state de text
  useEffect(()=>{
    if(text){
      //resetando info para que haja exibição de mensagem de carregamento mesmo que o input não esteja vazio
      setInfo({})
      fetch(`${api}anime?filter[text]=${text}&page[limit]=12`)
        .then((response)=>response.json())
          .then((response)=>{setInfo(response)})
    }
    else{
      //Esvaziando Info caso não haja nada em text
      setInfo({})
    }
  }, [text])


  return (
    <div className="App">
      <header>
        <h1><BiSearchAlt className="icon"/> Search animes</h1>
      </header>

        {/*Chamando componente que irá setar o text com o valor imposto pelo usuário*/}
        <InputSearch  value={text} onChange={(search)=> setText(search)}/>


        {/*Mensagem impressa caso o usuário não tenha feito nenhuma pesquisa*/}
        {!text && !info.data && (
            <p className="warning-search">
              Pesquise por seu anime favorito!
            </p>
          )}

        {/*Imprimindo mensagem de carregamento enquanto estiver sendo feita a leitura de dados na API*/}
        {text && !info.data && (
          <span className="loading">Carregando...</span>
         )}
         

        {/*listando dados correspondentes a pesquisa (caso exista algum valor sendo retornado pela API)*/}
        {info.data && (
          <ul className="animes-list">
            {info.data.map((anime)=>(
              <li key={anime.id}>
                <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>
                {anime.attributes.canonicalTitle}
              </li>
              ))}
          </ul>
          )}
    </div>
  );
}

export default App
