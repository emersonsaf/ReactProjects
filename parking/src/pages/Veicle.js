import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { busca } from '../api/api';

export const Veicle = () => {
    let history = useHistory();
    const { id } = useParams();
    const [veicle, setVeicle] = useState({});

    useEffect(() => {
        busca(`/veicles/${id}`, setVeicle)
            .catch(() => {
                history.push('/404')
            })
    }, [id])

    return (
        <div>
            <h1>PLACA DO VEICULO: {veicle.placa}</h1>
            <h1>Data DA ENTRADA: {veicle.date}</h1>

            <div>
                <Link to='/veiculos'  style={{ textDecoration: 'none', color: 'white' }}>
                    <button>Voltar</button>
                </Link>
            </div>
        </div>

    )
}