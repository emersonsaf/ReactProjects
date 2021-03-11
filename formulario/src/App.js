import { Component } from 'react';
import './App.css';
import { FormularioCadatro } from './components/FormularioDeCadastro/FormularioCadatro';

import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth='sm' >
        <Typography variant='h3' align='center'>Formulario de Cadastro</Typography>
        <FormularioCadatro aoEnviar={aoEnviar} validarCPF={validarCPF}/>
      </Container>
    );
  }
}

function aoEnviar(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false,texto:"CPF Precisa ter 11 caracteres."}
  }else{
    return {valido:true,texto:""}
  }
}

export default App;
