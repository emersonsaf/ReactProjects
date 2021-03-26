import React, { useEffect, useState } from 'react';
import { TextField, Button } from "@material-ui/core";

const Formulario = ({ aoSalvar, id }) => {

    const [placa, setPlaca] = useState("");
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    useEffect(() => {
        let vTime = new Date();

        setYear(vTime.getFullYear().toString())
        setMonth((vTime.getUTCMonth() + 1).toString())
        setDay(vTime.getUTCDate().toString())
        setHour(vTime.getHours().toString())
        setMinutes((vTime.getMinutes()).toString())
        setSeconds(vTime.getSeconds().toString())
    }, [])

    return (
        <form
            onSubmit={(event) => {
                aoSalvar({ id, placa, hour, minutes, seconds, day, month, year })
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