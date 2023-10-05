import { useState } from 'react'
import './index.scss';

function App() {
  const [filtro, setFiltro] = useState(false)
  const [mais, setMais] = useState(true)
  const [perfil, setPerfil] = useState(true)
  const [imagem, setImagem] = useState(null);

  function MudarF() {
    setFiltro(!filtro);
    setMais(false);
    setPerfil(false)
  }
  function MudarP() {
    setPerfil(!perfil);
   
  }

  function MudarM() {
    setMais(!mais)
    setFiltro(false)
  }

  const handleImagemChange = (event) => {
    const arquivoSelecionado = event.target.files[0];
    setImagem(URL.createObjectURL(arquivoSelecionado));
  };




  return (
    <div className="App">

      <div className="cabecalho">
        <div className='c1' > <p>Boo Shoes</p> </div>

        <div className="c2" >
          <button onClick={MudarF}>

            {filtro ? (
              <img src="/assets/images/filtrocom.png" alt="Imagem True" />
            ) : (
              <img src="/assets/images/filtro.png" alt="Imagem False" />
            )}

          </button>


          <div className="input"> <input type="text" placeholder="pesquise pelo produto" /> <img src="/assets/images/lupa.png" alt="" /> </div>
          
          <button onClick={MudarM}>
            {mais ? (
              <img src="/assets/images/maiscom.png" alt="Imagem True" />
            ) : (
              <img src="/assets/images/mais.png" alt="Imagem False" />
            )}
          </button>

        <div className='up'>
        <button onClick={MudarP}>
          {mais ? (
              <img src="/assets/images/perfilcom.png" alt="" />
            ) : (
              <img src="/assets/images/user.png" alt="" />
            )}
          </button>

        {perfil === true &&
          <>
          <div className='position'>

            <h3>colaboradores</h3>

            <div className='side'> 
            <img alt='' src='/assets/images/user.png'/> 
            <div className='up1'><p>Davi Cavalcanti</p><p>  • Api</p> </div>
            </div>

            <div className='side'> <img alt='' src='/assets/images/user.png'/> 
            <div className='up1'><p>Kewry Brito</p><p>  • Conexão api+react</p></div>
            </div>

            <div className='side'> <img alt='' src='/assets/images/user.png'/> 
            <div className='up1'><p>Maria Clara Siqueira</p><p>  • Conexão api+react</p></div>
            </div>

            <div className='side'> <img alt='' src='/assets/images/user.png'/> 
            <div className='up1'><p>Paloma Jonson</p><p>  • Reactjs e banco de dados</p></div>
            </div>


          </div>
          </>
            

          }
 
        </div>
          

          



        </div>
      </div>

      
        
 


      <div className='s1'>

        <div className='s1-1'>
          {filtro === true &&
            <>
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
            </>
          }


        </div>

        <div className='s1-2' >
          {mais === true &&
            <>
              <div className='s1-eve'>
                <div className='s1-1-lado'>
                  <input type="file" accept="image/*" className='input-imagem' onChange={handleImagemChange} />
                  <img
                    src={imagem} alt="Imagem Selecionada" className="imagem-preview"/>
                </div>

                <div className='s1-2-1'>
                  <input type='text' placeholder='nome' className='nome' />
                  <div className='s1-2-lado'>
                    <select id='select_tamanho' className='dois'>
                      <option disabled selected>nº</option>
                      <option>34</option>
                      <option>35</option>
                      <option>36</option>
                      <option>37</option>
                      <option>38</option>
                      <option>39</option>
                      <option>40</option>
                    </select>
                    <input type='text' placeholder='marca' className='dois' />
                  </div>
                  <textarea className='nome' id='area_texto' placeholder='descrição'></textarea>
                  <input type='number' placeholder='preço' className='nome' />
                  <div className='botoes'>
                    <button className='botao'> <img src='/assets/images/ok.png' alt='' /></button>
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

export default App;
