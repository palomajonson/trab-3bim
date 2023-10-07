import { useState } from 'react'
import './index.scss';

import axios from "axios";

function App() {
  const [filtro, setFiltro] = useState(false);
  const [mais, setMais] = useState(true);
  const [perfil, setPerfil] = useState(true);
  const [imagem, setImagem] = useState(null);
  const [nome, setNome] = useState('');
  const [descri, setDescri] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');

  function MudarF() {
    setFiltro(!filtro);
    setMais(false);
    setPerfil(false);
  };

  function MudarP() {
    setPerfil(!perfil);
  
    
  };

  function MudarM() {
    setMais(!mais);
    setFiltro(false);
    setPerfil(false);
  };








  const ImagemA = (event) => {
    const arquivoSelecionado = event.target.files[0];
    setImagem(URL.createObjectURL(arquivoSelecionado));
  };


  function BotaoMexer() {
    const [hover, setHover] = useState(false);
  
    const MouseEntra = () => {
      setHover(true);
    };
  
    const MouseSai = () => {
      setHover(false);
    };


  






  async function Salvar() {
    try {
      let respo = {
        nome: nome,
        tamanho: tamanho,
        descricao: descri,
        marca: marca,
        preco: preco
      };

      await axios.post('http://localhost:5000/inserir/produto,', respo);
      alert('info salvas;');


    } catch (err) {

    }
  }











  return (
    <div className="App">

      <div className="cabecalho">
        <div className='c1' >
          <img className='logo' src='/assets/images/boologo.png' alt='' />
        </div>

        <div className="c2" >
          <button onClick={MudarF}>

            {filtro ? (
              <img src="/assets/images/filtrocom.png" alt="Imagem True" />
            ) : (
              <img src="/assets/images/filtro.png" alt="Imagem False" />
            )}

          </button>


          <div className="input"> <input type="text" placeholder="pesquise pelo produto" /> <img src="/assets/images/lupa.png" alt="" /> </div>


          <div className='side-1'>

          <button onClick={MudarM}>
            {mais ? (
              <img src="/assets/images/maiscom.png" alt="Imagem True" />
            ) : (
              <img src="/assets/images/mais.png" alt="Imagem False" />
            )}
          </button>

          <div className='up'>
            <button onClick={MudarP}>
              {perfil ? (
                <img src="/assets/images/perfilcom.png" alt="" />
              ) : (
                <img src="/assets/images/user.png" alt="" />
              )}
            </button>

            {perfil === true &&
              <>
                <div className='position'>

                  <h3>Colaboradores</h3>

                  <div className='side'>
                    <img alt='' src='/assets/images/user.png' />
                    <div className='up1'><p>Davi Cavalcanti</p><p>  • Api</p> </div>
                  </div>

                  <div className='side'> <img alt='' src='/assets/images/user.png' />
                    <div className='up1'><p>Kewry Brito</p><p>  • Conexão api+react</p></div>
                  </div>

                  <div className='side'> <img alt='' src='/assets/images/user.png' />
                    <div className='up1'><p>Maria Clara Siqueira</p><p>  • Conexão api+react</p></div>
                  </div>

                  <div className='side'> <img alt='' src='/assets/images/user.png' />
                    <div className='up1'><p>Paloma Jonson</p><p>  • Reactjs e banco de dados</p></div>
                  </div>


                </div>
              </>


            }

          </div>

          </div>
         





        </div>
      </div>






      <div className='s1'>

     
          {filtro === true &&
            <>
            <div className='s1-1'>
            <div className='s11-1'>
              <select>
                <option disabled selected>Filtre pelo Preço</option>
                <option>Menor que 600</option>
                <option>Menor que 800</option>
                <option>Menor que 1000</option>
                <option>Menor que 1500</option>
                <option>Menor que 2000</option>
                <option>Menor que 2500</option>
                <option>Menor que 3000</option>
                <option>Todos os Preços</option>
              </select>
              <select>
                <option disabled selected>Filtre pela Marca</option>
                <option>Adidas</option>
                <option>Nike</option>
                <option>Puma</option>
                <option>Vans</option>
                <option>Converse</option>
                <option>New Balance</option>
                <option>Reebook</option>
                <option>Todas as Marcas</option>
              </select>
              <select>
                <option disabled selected>Filtre por Tamanho</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
              </select>
              </div>
              <div className='s11-1'>
             <button onMouseEnter={MouseEntra}
            onMouseLeave={MouseSai}>
            {hover && (
        <img src="/assets/images/filtrar.gif" alt="Meu GIF" />
           )}
             <img src='' alt=''/></button>
             </div>
           </div>
            </>
            


          }


   

        <div className='s1-2' >
          {mais === true &&
            <>
              <div className='s1-eve'>
                <div className='s1-1-lado'>
                  <input type="file" accept="image/*" className='input-imagem' onChange={ImagemA}  />
                  <img
                    src={imagem} alt="Imagem" className="imagem-preview" />
                </div>

                <div className='s1-2-1'>
                  <input type='text' placeholder='nome' className='nome'  value={nome} onChange={e => setNome(e.target.value)}/>
                  <div className='s1-2-lado'>
                    <select id='select_tamanho' className='dois' value={tamanho} onChange={e => setTamanho(e.target.value) }>
                      <option disabled selected>nº</option>
                      <option>34</option>
                      <option>35</option>
                      <option>36</option>
                      <option>37</option>
                      <option>38</option>
                      <option>39</option>
                      <option>40</option>
                    </select>
                    <input type='text' placeholder='marca' className='dois' value={marca} onChange={e => setMarca(e.target.value)}/>
                  </div>
                  <textarea className='nome' id='area_texto' placeholder='descrição' value={descri} onChange={e => setDescri(e.target.value)}></textarea>
                  <input type='number' placeholder='preço' className='nome' value={preco} onChange={e => setPreco(e.target.value)}/>
                  <div className='botoes'>
                    <button className='botao' onClick={Salvar}> <img src='/assets/images/ok.png' alt='' /></button>
                    <button className='botao'> <img src='/assets/images/lixo.png' alt='' /></button>
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
}

export default App;
