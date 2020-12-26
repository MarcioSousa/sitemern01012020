// cSpell:Ignore Reservada, Endereço, Senha, vazio, botao, apenas, executa, usuario, Voltar, Carregando, certo, mensagemErro, setErro, setMensagemErro, erro, logado, inválidos, evitar o carregamento da página, lembrar, usuário, validaLogin, setLembrarUsuario, lembrarUsuario, botaoDesabilitado, setBotaoDesabilitado
import React , { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Avatar from '@material-ui/core/Avatar'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

/**icons */
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles(theme =>({
    principal:{
        //marginTop: theme.spacing(4),
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main
    },
    botao:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10)
    }
}))

export default function Login() {
    const classes = useStyles()  //hook
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [botaoDesabilitado, setBotaoDesabilitado] = useState(true)
    const [lembrarUsuario, setLembrarUsuario] = useState(false)
    const [erro, setErro] = useState(false)
    const [mensagemErro, setMensagemErro] = useState('')

    useEffect(() => {
        if(email.trim() && senha.trim()){
            setBotaoDesabilitado(false)
        }else{
            setBotaoDesabilitado(true)
        }
    },[email, senha])
    
    useEffect(() => {
        document.title = 'Área Reservada'
        if(localStorage.getItem('usuario')){
            setEmail(localStorage.getItem('usuario'))
            setLembrarUsuario(true)
        }// [] quando vazio, no useEffect, executa apenas uma vez
    },[])
    
    useEffect(() => {
        if(lembrarUsuario){
            localStorage.setItem('usuario', email)
        }else{
            localStorage.removeItem('usuario')
        }
    },[lembrarUsuario])

    function validaLogin(e){
        e.preventDefault() //evitar o carregamento da página
        if(email === process.env.REACT_APP_USER && 
            senha === process.env.REACT_APP_PASSWORD){
            setErro(false)
            setMensagemErro('')
            localStorage.setItem('logado', btoa(email))
            //alert('Carregando o Menu...')
            history.push('/menu')
        }else{
            setErro(true)
            setMensagemErro('Usuário com senha inválidos!')
            localStorage.removeItem('logado')
        }
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper elevation={3}>
                <div className={classes.principal}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>
                        Área Reservada
                    </Typography>
                    <form onSubmit={validaLogin}>
                        <TextField 
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Endereço de Email' 
                            autoComplete='email'
                            autoFocus
                            value={email}
                            error={erro}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <TextField 
                            variant='outlined'
                            required
                            fullWidth
                            id='senha'
                            label='Senha' 
                            autoComplete='current-password'
                            type='password'
                            value={senha}
                            error={erro}
                            helperText={mensagemErro}
                            onChange={e => setSenha(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Switch id='lembrar' 
                                    checked={lembrarUsuario} 
                                    disabled={botaoDesabilitado}
                                    onChange={e => setLembrarUsuario(!lembrarUsuario)}
                                    />
                            }
                            label='Lembrar o usuário'
                        />
                        <Button 
                            type='submit'
                            fullWidth
                            variant='contained'
                            //className={classes.login}
                            disabled={botaoDesabilitado}
                            color='primary'>
                                <LockOutlinedIcon /> Login
                        </Button>
                        <Button 
                            fullWidth
                            variant='outlined'
                            color='secondary'
                            className={classes.botao}
                            href='/'><HomeIcon/>Voltar Ao Início
                        </Button>
                    </form>
                </div>
            </Paper>
        </Container>
    )
}