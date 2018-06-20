import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../logo.png';
import Button from '@material-ui/core/Button';
import { render } from 'react-dom';
import Select from 'react-select';
import AutoComplete from '../AutoComplete';
import CompleteEstados from '../CompleteEstados';


const styles = theme => ({
  root: theme.mixins.gutters({
    height: 800,
    paddingBottom: 90,
    backgroundColor: '#312b45',
  }),
  grid: {
    marginTop: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#312b45',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    marginLeft: 20,
  },
  searchAutoComplete: {
    marginRight: 10,
  },
});


function PaperSheet(props) {
  const { classes } = props;

  return (


    <div className={classes.root}>


      <p className={classes.logo}>
        <img
          src={logo}
          className={classes.logo}
          alt="Easy Guide"
        />
      </p>
      <Grid container spacing={8} className={classes.grid}>
        <Grid item xs={4} sm={3}>
          <AutoComplete />


        </Grid>
        <Grid item xs={4} sm={2}>

          <CompleteEstados />
        </Grid>
        <Button variant="contained" color="secondary">Pesquisar</Button>

      </Grid>

    </div>
  );
}


PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
