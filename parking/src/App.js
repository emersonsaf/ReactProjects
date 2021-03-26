import './App.css';
import { useEffect, useState } from 'react';

//import Button from './components/Button';
import Formulario from './components/Formulario';

import { busca } from './api/api'

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

import Navbar from './components/Navbar';
import { ButtonBase, Button } from '@material-ui/core';


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


const url = 'http://localhost:5000/veicles'


function App() {

  const [isActive, setIsActive] = useState(false)

  const [veicles, setVeicles] = useState([])

  useEffect(() => {
    busca(`/veicles`, setVeicles)
  }, [])

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


  const onClick = () => {
    return (
      setIsActive(!isActive)
    )
  }

  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />

      <div className='conteudo'>
        {!isActive
          ? (<div className='contentParking'>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Placa</StyledTableCell>
                    <StyledTableCell align="right">Data</StyledTableCell>
                    <StyledTableCell align="right">Horario de Entrada</StyledTableCell>
                    <StyledTableCell align="right">Ações</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {veicles.map((veicle) => (
                    <StyledTableRow key={veicle.id}>
                      <StyledTableCell component="th" scope="row">
                        {veicle.placa}
                      </StyledTableCell>
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
                          <CheckCircleIcon color='primary' />
                        </ButtonBase>

                        <ButtonBase
                          focusRipple
                          key={veicle.id}
                          focusVisibleClassName={classes.focusVisible}
                        >
                          <CancelIcon color='error' />
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
        <Button onClick={onClick} type='submit' variant='contained' color='primary' fullWidth >
                {
                  !isActive ? `Cadastrar Veículo` : `Voltar`
                }
            </Button>
      </div>
      </div>
      
    </div>
  );
}



export default App;
