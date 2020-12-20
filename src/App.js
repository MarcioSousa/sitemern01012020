import React from 'react'
import './App.css'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider} from '@material-ui/core'

/**cores */
import { orange, lightBlue, blue, deepOrange} from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'

export default function App(){
    const temaDark = false
    const tipoPaleta = temaDark ? 'dark' : 'light'
    const corPrimaria = temaDark ? orange[500] : blue[500]
    const corSecundaria = temaDark ? deepOrange[900] : lightBlue[400]

    let theme = createMuiTheme(
        {
            palette: {
                palette: tipoPaleta,
                primary:{ main: corPrimaria},
                secondary: { main: corSecundaria}
            }
        })

    theme = responsiveFontSizes(theme)

    return(
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Button variant = "contained" color='primary'>Teste</Button>
            <Button variant = "contained" color='secondary'>Teste 2</Button>
        </MuiThemeProvider>
    )

}