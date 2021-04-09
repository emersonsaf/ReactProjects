import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import LocalParkingIcon from '@material-ui/icons/LocalParking';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: 50,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);


const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div>

                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        <LocalParkingIcon />
                    </Link>
                    <Link to='/veiculos' style={{ textDecoration: 'none', color: 'white' }}>
                        <NotListedLocationIcon />
                    </Link>
                    </div>
                    <Typography variant="h6" className={classes.title}>
                        Garage System
                    </Typography>
                    <a href='/login' style={{ textDecoration: 'none', color: 'white' }}>
                        <Button color="inherit">Login</Button>
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar