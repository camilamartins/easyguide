import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

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
              <Button variant="contained" color="secondary" onClick={this.props.onClose} >
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
