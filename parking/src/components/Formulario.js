import React, { useEffect, useState } from 'react';
import { TextField, Button } from "@material-ui/core";

const Formulario = ({ aoSalvar, id }) => {

    const [placa, setPlaca] = useState("");
    const [hour, setHora] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');


    useEffect(() => {
        let vTime = new Date();

        setAno(vTime.getFullYear().toString())
        setMes((vTime.getUTCMonth() + 1).toString())
        setDia(vTime.getUTCDate().toString())
        setHora(vTime.getHours().toString())
        setMinutes((vTime.getMinutes()).toString())
        setSeconds(vTime.getSeconds().toString())
    }, [])

    return (
        <form
            onSubmit={(event) => {
                aoSalvar({ id, placa, hour, minutes, seconds, dia, mes, ano })
            }}
        >
            <TextField
                onChange={(event) => {
                    setPlaca((event.target.value).toUpperCase())
                }}
                fullWidth
                value={placa}
                label='Placa do veículo'
                type='text'
                variant='outlined'
                margin='normal'
                required
            />

            <Button type='submit' variant='contained' color='primary' fullWidth style={{marginBottom: 10}} size='small' >
                Cadastrar Veículo
            </Button>

        </form>
    )
}

export default Formulario