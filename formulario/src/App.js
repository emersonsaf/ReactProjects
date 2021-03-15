import { Component } from 'react';
import './App.css';
import { FormularioCadatro } from './components/FormularioDeCadastro/FormularioCadatro';

import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

import { validarCPF, validarSenha } from './models/cadastro'
import validacoresCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth='sm' >
        <Typography variant='h3' align='center'>Formulario de Cadastro</Typography>
        <validacoresCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
          <FormularioCadatro aoEnviar={aoEnviar} />
        </validacoresCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviar(dados) {
  console.log(dados);
}


export default App;
