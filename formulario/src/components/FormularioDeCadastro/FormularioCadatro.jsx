import React, { useState } from 'react'

import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core'

export const FormularioCadatro = ({ aoEnviar, validarCPF }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [isPromotionActive, setIsPromotionActive] = useState(true);
    const [isNewsActive, setIsNewsActive] = useState(true);

    const [errors, setErrors] = useState({cpf:{valido:true, texto:""}})

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, isPromotionActive, isNewsActive });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id='nome'
                label='Nome'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {

                    setSobrenome(event.target.value);
                }}
                
                id='sobrenome'
                label='Sobrenome'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={(event)=>{
                    const ehValido = validarCPF(cpf);
                    setErrors({cpf:ehValido})
                }}
                error={!errors.cpf.valido}
                helperText={errors.cpf.texto}
                id='cpf'
                label='CPF'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <FormControlLabel
                label='Promoções'
                control={<Switch checked={isPromotionActive} name='promocoes' onChange={(event) => {
                    setIsPromotionActive(event.target.checked)
                }} defaultChecked={isPromotionActive} color='primary' />}
            />

            <FormControlLabel
                label='Novidades'
                control={<Switch checked={isNewsActive} name='novidades' onChange={(event) => {
                    setIsNewsActive(event.target.checked)
                }} defaultChecked={isNewsActive} color='primary' />}
            />
            <Button
                variant="contained"
                color="primary"
                type='submit'>
                Cadastrar
            </Button>
        </form>
    )
}
