import { useState } from 'react';
import './style.css';

function SignUp(){

  //variaveis
  //funções
  const [  nome, setNome  ] = useState("")
  const [  email, setEmail  ] = useState("")
  const [  senha, setSenha  ] = useState("")
  const [  resultado, setResultado  ] = useState("")
  
  function handleSubmit(event){

    //aqui vai as coontas dos exercicios 
      event.preventDefault();
      console.log(nome, email, senha)
      setResultado(1+1);
  }

    return (
     <>
          <h2>Criar Conta</h2>

          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={ (event) => setNome(event.target.value) }
            
            />
                

            <label>Email</label>
            <input
             type="email"
             value={email}
             onChange={ (e) => setEmail(e.target.value) }
            
            />

            <label>Senha</label>
            <input
             type="password"
             value={senha}
             onChange={ (e) => setSenha(e.target.value) }
        

            />

            <p>{resultado}</p>
            <button type="submit">Cadastrar</button>
          </form>
     </>
    )
}


export default SignUp