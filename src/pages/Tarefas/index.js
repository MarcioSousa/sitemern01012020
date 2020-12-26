// cSpell:Ignore Tarefas, valorInicial, salvaDados, apagarRegistro, editando, setEditando, Relação, índice, Parâmetro, apagaRegistro, Opções, número, itens, removidos, serão, Apagar, Editar, limparemos, carrega, página, salvaRegistro, Formulário, Salvar, Descrição, Pessoal, Faculdade, Trabalho, descricao, mudaAtributo, Tabela, Cadastro, Tarefa, Código
import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

export default function Tarefas(){
    const [tarefas, setTarefas] = useState([])
    const valorInicial = {id:'', tipo:'', descricao:'', dataFim:''}
    const [tarefa, setTarefa] = useState(valorInicial)
    const [editando, setEditando] = useState(false)

    const mudaAtributo = e => {
        const { name, value } = e.target
        setTarefa({...tarefa, [name]: value})
    }

    function salvaRegistro(e){
        e.preventDefault()// Não carrega a página
        if(editando){
            apagaRegistro(tarefa.id)
        }
        setTarefa({id: tarefa.id, tipo: tarefa.tipo, descricao: tarefa.descricao, dataFim: tarefa.dataFim})
        setTarefas([...tarefas, tarefa])
        setTarefa(valorInicial) //limparemos os campos
        setEditando(false)
    }

    const apagaRegistro = id =>{
        let index = tarefas.map((tarefa) => tarefa.id).indexOf(id)
        if(index > -1){
            //O 1º Parâmetro é o índice do Array e o segundo é o número de itens que serão removidos
            tarefas.splice(index, 1)
            setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
        }
    }

    function salvaDados(){
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }

    useEffect(() => {
        setTarefas(JSON.parse(localStorage.getItem('tarefas')))
    },[])

    useEffect(() => {
        salvaDados()
    },[tarefas])

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={salvaRegistro}>
                        <Typography component='h1'
                            align='center'>
                                Cadastro de Tarefas
                        </Typography>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            name='id'
                            required
                            fullWidth
                            type='number'
                            id='id'
                            label='Código da Tarefa'
                            autoFocus
                            value={tarefa.id}
                            onChange={mudaAtributo}
                            disabled={editando}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            type='text'
                            id='descricao'
                            name='descricao'
                            label = 'Descrição da Tarefa'
                            value={tarefa.descricao}
                            onChange={mudaAtributo}
                        />
                        <FormControl fullWidth={true}>
                            <InputLabel id='tipo'>Tipo da Tarefa</InputLabel>
                            <Select labelId='tipo'
                                    id='tipo'
                                    value={tarefa.tipo}
                                    required
                                    onChange={e => setTarefa({...tarefa, tipo: e.target.value})}
                            >
                                <MenuItem value='Pessoal'>Pessoal</MenuItem>
                                <MenuItem value='Trabalho'>Trabalho</MenuItem>
                                <MenuItem value='Faculdade'>Faculdade</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='dataFim'
                            type='date'
                            label = 'Data Final'
                            name='dataFim'
                            value={tarefa.dataFim}
                            onChange={mudaAtributo}
                            InputLabelProps={{
                                shrink:true
                            }}
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'>
                                <SaveIcon/ >
                                Salvar
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TableContainer component={Paper}>
                        <Table aria-label='Relação de Tarefas'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Código</TableCell>
                                    <TableCell>Tipo</TableCell>
                                    <TableCell>Descrição</TableCell>
                                    <TableCell>DataFinal</TableCell>
                                    <TableCell>Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tarefas.map((t) => (
                                    <TableRow key={t.id}>
                                        <TableCell>{t.id}</TableCell>
                                        <TableCell>{t.tipo}</TableCell>
                                        <TableCell>{t.descricao}</TableCell>
                                        <TableCell>{t.dataFim}</TableCell>
                                        <TableCell>
                                            <Button startIcon={<DeleteIcon/>}
                                                onClick={() => apagaRegistro(t.id)}
                                                variant='outlined'
                                                color='secondary'>Apagar</Button>

                                            <Button startIcon={<EditIcon/>}
                                                onClick={() => {
                                                    setEditando(true)
                                                    setTarefa(t)
                                                }}
                                                variant='outlined'
                                                color='primary'>Editar</Button>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}
