import React, { useState, useContext } from 'react'

import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core'
import validacoresCadastro from '../../contexts/ValidacoesCadastro';
import { useErrors } from '../../hooks/useErrors';

export const DadosPessoais = ({ aoEnviar }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [isPromotionActive, setIsPromotionActive] = useState(true);
    const [isNewsActive, setIsNewsActive] = useState(true);
    const validacoes = useContext(validacoresCadastro)

    const [errors, validarCampos, possoEnviar] = useErrors(validacoes);


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, isPromotionActive, isNewsActive });
                }
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
                name='nome'
                fullWidth
                required
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
                name='sobrenome'
                fullWidth
                required
                margin='normal'
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={validarCampos}
                error={!errors.cpf.valido}
                helperText={errors.cpf.texto}
                id='cpf'
                name='cpf'
                label='CPF'
                variant='outlined'
                fullWidth
                required
                margin='normal'
            />

            <FormControlLabel
                value={isPromotionActive}
                label='Promoções'
                control={<Switch checked={isPromotionActive} name='promocoes' onChange={(event) => {
                    setIsPromotionActive(event.target.checked)
                }} defaultChecked={isPromotionActive} color='primary' />}
            />

            <FormControlLabel
                value={isNewsActive}
                label='Novidades'
                control={<Switch checked={isNewsActive} name='novidades' onChange={(event) => {
                    setIsNewsActive(event.target.checked)
                }} defaultChecked={isNewsActive} color='primary' />}
            />
            <Button
                variant="contained"
                color="primary"
                type='submit'>
                Proximo
            </Button>
        </form>
    )
}
