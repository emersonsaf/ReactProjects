import { TextField, Button } from "@material-ui/core"
import { useContext, useState } from "react";
import validacoresCadastro from "../../contexts/ValidacoesCadastro";
import { useErrors } from "../../hooks/useErrors";

const DadosUsuario = ({ aoEnviar }) => {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const validacoes = useContext(validacoresCadastro)

    const [errors, validarCampos, possoEnviar] = useErrors(validacoes);
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}
        >
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                id='email'
                label='email'
                type='email'
                name='email'
                fullWidth
                required
                margin='normal'
                variant='outlined'
            />

            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!errors.senha.valido}
                helperText={errors.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button
                type='submit'
                variant="contained"
                color="primary"
            >Proximo
            </Button>

        </form>
    )
}


export default DadosUsuario





