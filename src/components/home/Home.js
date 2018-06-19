import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 8,
    marginRight: 3,
  },
};

const toolBarColor = {
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: '#EF5350',
};

const loginButton = {
  border: '1px solid white',
  borderRadius: '24px',
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={toolBarColor}>
          <Typography variant="title" color="inherit" className={classes.flex}>
            EasyGuide
          </Typography>
          <Button color="inherit" style={loginButton} className={classes.menuButton}>Login</Button>
          <Button color="inherit" style={loginButton} className={classes.menuButton}>Cadastre-se</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);