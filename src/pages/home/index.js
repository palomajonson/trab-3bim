import { useState } from 'react'
import './index.scss';

function App() {
  const[filtro,setFiltro]=useState(false)
  const[mais,setMais]=useState(false)

  function MudarF(){
    setFiltro(!filtro)
  }
  function MudarM(){
    setMais(!mais)
  }

  const [imagem, setImagem] = useState(null);

  const handleImagemChange = (event) => {
    const arquivoSelecionado = event.target.files[0];
    setImagem(URL.createObjectURL(arquivoSelecionado)); // 
  };




  return (
    <div className="App">
      
      <div className="cabecalho">
        <div className='c1' > <p>nome</p> </div>

        <div className="c2" >
          <button onClick={MudarF}>
          
          {filtro ? (
        <img src="/assets/images/filtrocom.png" alt="Imagem True" />
      ) : (
        <img src="/assets/images/filtro.png" alt="Imagem False" />
      )}

      </button>
          <div className="input"> <input type="text" placeholder="pesquise pelo produto" /> <img src="/assets/images/lupa.png" alt=""/> </div>
          <button onClick={MudarM}>
          {mais ? (
        <img src="/assets/images/maiscom.png" alt="Imagem True" />
      ) : (
        <img src="/assets/images/mais.png" alt="Imagem False" />
      )}
            </button>

        </div>
      </div>


      <div className='s1'>

      <div className='s1-1'>
      {filtro === true &&
        <>
        <select>
          <option>filtre pelo preço</option>
          <option>  menor que 600</option>
          <option>  menor que 800</option>
          <option>  menor que 1000</option>
          <option>  menor que 1500</option>
          <option>  menor que 2000</option>
          <option>  menor que 2500</option>
          <option>  menor que 3000</option>
          <option>  todos os preços</option>
        </select>

        <select>
          <option>filtre pela marca</option>
          <option>  adidas</option>
          <option>  nike</option>
          <option>  puma</option>
          <option>  vans</option>
          <option>  converse</option>
          <option>  new balance</option>
          <option>  reebook</option>
          <option>  todos as marcas</option>
        </select>
        </>
              }
      </div>

      <div className='s1-2' >
      {mais === true &&
        <>
        <div className='s1-eve'>
          <div className='s1-1-lado'>
            <input type="file" accept="image/*"  className='input-imagem' onChange={handleImagemChange}/>
            <img
            src={imagem}
            alt="Imagem Selecionada"
            className="imagem-preview" 
          />
          </div>
       
          <div className='s1-2-1'>
            <div className='s1-2-lado'>
            <input type='text' placeholder='nome' className='nome'/>
            <input type='number' placeholder='nº' className='dois'/>
            <input type='text' placeholder='marca' className='dois'/>
            <input type='number' placeholder='preço' className='nome'/>
            </div>
            
          <div className='botoes'>
          <button className='botao'> <img src='/assets/images/ok.png' alt=''/></button>
            <button className='botao'> <img src='/assets/images/lixo.png' alt=''/></button>
          </div>
           
         </div>
        </div>
        </>
}
      </div>


      




              


      </div>

    </div>
  );
}

export default App;
