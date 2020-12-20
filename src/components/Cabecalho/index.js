// cSpell:Ignore Cabecalho, Empresa
import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/core/styles'

import ApartmentIcon from '@material-ui/icons/Apartment'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const useStyles = makeStyles((theme) => ({
    toolbarTitle: {
        flex: 1
    }
}))

const Cabecalho = () => {
    const classes = useStyles()
    return(
        <>
            <AppBar position='relative'>
                <Toolbar>
                    <ApartmentIcon />
                    <Typography component='h1'
                    color='inherit'
                    align='center'
                    noWrap
                    className={classes.toolbarTitle}>
                        Empresa Delta
                    </Typography>
                    <Button variant='contained'
                    startIcon={<LockOutlinedIcon/>}
                    color='secondary'
                    size='small'
                    href='/login'>Login</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Cabecalho