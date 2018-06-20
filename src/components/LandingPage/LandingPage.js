import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../logo.png';

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
        <Grid item xs={4} sm={4}>
          <h2> Coloca aqui seu componente 1, Lucas </h2>
        </Grid>
        <Grid item xs={4} sm={2}>
          <h2> Coloca aqui seu componente 2, Lucas </h2>
        </Grid>
        <h2> Seu botão </h2>
      </Grid>

    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
