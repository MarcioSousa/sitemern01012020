// cSpell:Ignore Cartao, Vindo, Seja, Missão, Nossa, Saiba, Compartilhe, Mais
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 320,
  }
});

export default function Cartao() {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/featured/computer"
          title="Seja bem Vindo!"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nossa Missão
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A missão de Delta é com o ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant='outlined'>
          Compartilhe
        </Button>
        <Button size="small" color="secondary" variant='outlined'>
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
