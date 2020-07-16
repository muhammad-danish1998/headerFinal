import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        marginTop: 150,

    },
}));

export function HeaderComp(props) {
    const{btn_name , image} = props;
    const classes = useStyles();

    return (
        <div className={classes.root} style={{}} >
            <Grid container spacing={3} style={{}}>
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper}>
                        <h1>Are You Ready For </h1>
                        <strong className='brand-name'>4IRU</strong>
                        <p className='intro'>
                            The fourth industrial revolution, which has
             also been referred to as <strong style={{ color: '#3498db' }}> 4IR </strong> or Industry 4.0,
             describes the age of intelligence and encompasses
             technologies like artificial intelligence
             </p>
                        <div className='mt-3'>
                            <a href='#' className='btn-get-started' style={{textDecoration:'none'}}>
                                {btn_name}
                            </a>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <img src={image}  className='img-fluid animated' alt='home image' style={{borderRadius:'20%',}}/>
                    </Paper>
                    
                </Grid>

            </Grid>
        </div>
    );
}
