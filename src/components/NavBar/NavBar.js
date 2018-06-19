import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@meliuz/lib-ui';

const root = {
  flexGrow: 1,
};

const title = {
  flex: 1,
};

const toolBarColor = {
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: '#ff3859',
};


class NavBar extends React.Component {
  render() {
    return (
      <div style={root}>
        <AppBar position="static">
          <Toolbar style={toolBarColor}>
            <Typography variant="title" color="inherit" style={title}>
            EasyGuide
            </Typography>
            <Button>Login</Button>
            <Button>Cadastre-se</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default NavBar;
