import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';

function SignUp() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('Cliclou')
  }

    return (
      <div className="container-center">
        <div className="login">

          <div className="logo-area">
            <img src={logo} alt="Logo" />
          </div>

          <form onSubmit={handleSubmit}>

            <h1>Entrar</h1>
            <input type="text" placeholder="Seu nome" value={nome} onChange={ (e) => setNome(e.target.nome)} />
            <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.email)} />
            <input type="password" placeholder="********" value={password} onchange={ (e) => setPassword(e.target.value)} />
            
            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>

          </form>

          <Link to="/">Já possuo uma conta</Link>

        </div>
      </div>
    );
  }
  
  export default SignUp;
  