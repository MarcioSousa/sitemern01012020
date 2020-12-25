// cSpell:Ignore Tarefas, valorInicial, Formulário, Salvar, Descrição, Pessoal, Faculdade, Trabalho, descricao, mudaAtributo, Tabela, Cadastro, Tarefa, Código
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

import SaveIcon from '@material-ui/icons/Save'

export default function Tarefas(){
    const [tarefas, setTarefas] = useState([])
    const valorInicial = {id:'', tipo:'', descricao:'', dataFim:''}
    const [tarefa, setTarefa] = useState(valorInicial)

    const mudaAtributo = e => {
        const { name, value } = e.target
        setTarefa({...tarefa, [name]: value})
    }

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form>
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
                    <p>Tabela</p>
                </Grid>
            </Grid>
        </div>
    )
}
