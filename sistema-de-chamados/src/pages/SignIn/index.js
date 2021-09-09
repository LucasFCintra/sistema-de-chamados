import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';

function SignIn() {

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
            <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.email)} />
            <input type="password" placeholder="********" value={password} onchange={ (e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" type="submit">Primary</Button>

          </form>

          <Link to="/register">Criar uma conta</Link>

        </div>
      </div>
    );
  }
  
  export default SignIn;
  