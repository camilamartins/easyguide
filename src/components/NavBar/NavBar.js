import React from 'react';
import PropTypes from 'prop-types';

import Cadastro from '../Cadastro';
import Login from '../Login';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {ROOT_URL} from "../../utils/root_url";

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

const loginButton = {
  border: '2px solid white',
  borderRadius: '24px',
  marginLeft: 8,
  marginRight: 3,
};

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
        modalCadastroVisible: false,
        modalLoginVisible: false,
        isLogged: false,
        loggedUser: ''
    };
  }



  handleCadastroOpen = () => {
    this.setState({ modalCadastroVisible: true });
  };

  handleLoginOpen = () => {
    this.setState({ modalLoginVisible: true });
  };


  render() {
    return (
      <div style={root}>
      {this.state.modalCadastroVisible &&
      <Cadastro
        modalVisible={this.state.modalCadastroVisible}
        onClose={() => this.setState({
          modalCadastroVisible: false,
        })}
      />
      }
      {this.state.modalLoginVisible &&
      <Login
        modalVisible={this.state.modalLoginVisible}
        onClose={() => this.setState({
          modalLoginVisible: false,
        })}
      />
      }
        <AppBar position="static">
          <Toolbar style={toolBarColor}>
            <Typography variant="title" color="inherit" style={title}>
            EasyGuide
            </Typography>
              {this.state.isLogged &&
              <Button color="inherit" style={loginButton} onClick={this.logout}>Logout</Button>
              }
              {!this.state.isLogged &&
              <div>
                  <Button color="inherit" style={loginButton} onClick={this.handleLoginOpen}>Login</Button>
                  <Button color="inherit" style={loginButton} onClick={this.handleCadastroOpen}>Cadastre-se</Button>
              </div>
              }
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
