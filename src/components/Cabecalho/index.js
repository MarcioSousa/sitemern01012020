// cSpell:Ignore Cabecalho
import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import ApartmentIcon from '@material-ui/icons/Apartment'
import { makeStyles} from '@material-ui/core/styles'

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
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Cabecalho