import { useEffect, useState } from 'react';

import Formulario from '../components/Formulario';
import { busca, url } from '../api/api'

import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { ButtonBase, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme: Theme) =>
createStyles({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}),
)(TableRow);

const useStyles = makeStyles({
table: {
  minWidth: 700,
},
});


const Veicles = () => {

    const [isActive, setIsActive] = useState(false)
    const [veicles, setVeicles] = useState([])

    useEffect(() => {
        busca(`/veicles`, setVeicles)
    }, [isActive])

    const aoSalvar = async (placa) => {
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(placa),
        })
        const data = await res.json()
        setVeicles([...veicles, data])
    }

    const fetchVeicle = async (id) => {
        const res = await fetch(`http://localhost:5000/veicles/${id}`)
        const data = await res.json()
        return data
    }

    const onClick = () => {
        return (
            setIsActive(!isActive)
        )
    }

    const onDelete = async (id) => {
        const veicleDeleted = await fetchVeicle(id)
        const updVeicle = { ...veicleDeleted, isDeleted: !veicleDeleted.isDeleted }

        const res = await fetch(`http://localhost:5000/veicles/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updVeicle)
        })

        const data = await res.json()

        setVeicles(
            veicles.map((veicle) =>
                veicle.id === id ? { ...veicle, isDeleted: data.isDeleted } : veicle
            )
        )
    }

    const inativeItem = async (id, quit) => {
        const veicleInative = await fetchVeicle(id)
        const updVeicle = { ...veicleInative, isActive: !veicleInative.isActive }

        const res = await fetch(`http://localhost:5000/veicles/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updVeicle)
        })

        const data = await res.json()

        setVeicles(
            veicles.map((veicle) =>
                veicle.id === id ? { ...veicle, isActive: data.isActive } : veicle
            )
        )
    }

    const valorAPagar = (minutos) => {
        const valorPorHora = 6
        const hora = Math.trunc(minutos / 60)

        alert(`Valor Total a Pagar é de RS ${valorPorHora * hora},00`)
    }

    const onFinish = (veicle) => {
        if (veicle.isActive === true) {
            const startDate = new Date(veicle.date)
            const timeEnd = new Date()

            const diff = Math.abs(timeEnd - startDate);
            const minutes = Math.ceil((diff / (1000 * 60)))
            const hour = Math.ceil((diff / (1000 * 60 * 60)) - 1)

            inativeItem(veicle.id,timeEnd)
            valorAPagar(minutes)
        }
    }


    const classes = useStyles();
    return (
        <>
            <div className='conteudo'>
                {!isActive
                    ? (<div className='contentParking'>

                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Status</StyledTableCell>
                                        <StyledTableCell>Placa</StyledTableCell>
                                        <StyledTableCell align="right">Data</StyledTableCell>
                                        <StyledTableCell align="right">Horario de Entrada</StyledTableCell>
                                        <StyledTableCell align="right">Ações</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {veicles.filter((veicle) => veicle.isDeleted !== true).map((veicle) => (
                                        <StyledTableRow key={veicle.id}>
                                            <StyledTableCell component="th" scope="row" style={{ color: veicle.isActive ? 'RED' : 'GREEN' }}>
                                                {
                                                    !veicle.isActive ? 'LIBERADO' : 'PENDENTE'
                                                }
                                            </StyledTableCell>
                                            <Link to={`/veiculo/${veicle.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            <StyledTableCell component="th" scope="row">
                                                {veicle.placa}
                                            </StyledTableCell>
                                            </Link>
                                            <StyledTableCell align="right">
                                                {`${veicle.day}/${veicle.month}/${veicle.year}`}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {(veicle.hour < 10) ? `0${veicle.hour}` : veicle.hour}
                  :
                  {(veicle.minutes < 10) ? `0${veicle.minutes}` : veicle.minutes}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">

                                                <ButtonBase
                                                    focusRipple
                                                    key={veicle.id}
                                                    focusVisibleClassName={classes.focusVisible}
                                                >
                                                    <CheckCircleIcon onClick={() => {
                                                        if (window.confirm(`Você deseja finalizar o período do veículo ${veicle.placa}`))
                                                            onFinish(veicle)

                                                    }
                                                    } color='primary' />
                                                </ButtonBase>

                                                <ButtonBase
                                                    focusRipple
                                                    key={veicle.id}
                                                    focusVisibleClassName={classes.focusVisible}
                                                >
                                                    <CancelIcon
                                                        onClick={() => {
                                                            if (window.confirm(`Você deseja excluir o registro do veículo ${veicle.placa}`))
                                                                onDelete(veicle.id)
                                                        }
                                                        }
                                                        color='error' />
                                                </ButtonBase>

                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>)
                    : <Formulario aoSalvar={aoSalvar} />
                }
                <div>
                    <Button onClick={onClick} type='submit' variant='contained' color={!isActive ? 'primary' : 'default'} >
                        {
                            !isActive ? `Cadastrar Veículo` : `Voltar`
                        }
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Veicles