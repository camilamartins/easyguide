import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from "axios";
import {ROOT_URL} from "../../utils/root_url";

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2em',
  marginRight: '2em',
  padding: '2em',
  justifyContent: 'center',
  alignItems: 'center',
};

class Cadastro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            username: '',
            password: ''
        };
    };

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    submit = () => {
        axios({
            method:'POST',
            url: `${ROOT_URL}/users`,
            headers: {
                'Content-type': 'application/json'
            },
            data: this.state
        })
            .then(res => {
                this.props.onClose();
                alert(`Usuario ${res.data.user.username} cadastado com sucesso`);
            })
            .catch(err => {
                this.props.onClose();
                alert('Erro ao cadastrar usuario, verifique seus dados!');
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
            <DialogTitle id="alert-dialog-title">Cadastre-se</DialogTitle>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome"
              type="name"
              value={this.state.name}
              onChange={this.handleNameChange}
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
              autoFocus
              margin="dense"
              id="name"
              label="E-mail"
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
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
              autoFocus
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
              <Button variant="contained" color="secondary" onClick={this.submit} >
              Cadastrar
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Cadastro;
