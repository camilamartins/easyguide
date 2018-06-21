import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import { loginUser } from '../../utils/auth/Auth';
import axios from "axios";
import {ROOT_URL} from "../../utils/root_url";

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2em',
  marginRight: '2em',
  padding: '1em',
  justifyContent: 'center',
  alignItems: 'center',
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        username: '',
        password: '',
    };
}

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  login = () => {
      axios({
          method:'POST',
          url: `${ROOT_URL}/users/auth`,
          headers: {
              'Content-type': 'application/json'
          },
          data: this.state
      })
          .then(res => {
              this.props.onClose();
              localStorage.setItem('clientToken', `Bearer ${res.data.token}`);
          })
          .catch(err => {
              this.props.onClose();
              alert('Erro ao fazer login! Verifique seus dados.');
          });
  };
  
  render() {
    return (
      <div>
        <Dialog
          open={this.props.modalVisible}
          onClose={this.props.onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div style={colStyle}>
            <DialogTitle id="alert-dialog-title">Login</DialogTitle>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome de usuário"
              type="name"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              style={{ marginRight: 30 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="dense"
              id="password"
              label="Senha"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              style={{ marginRight: 30 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <DialogActions>
              <Button variant="contained" color="secondary" onClick={this.login} >
              Entrar
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Login;
