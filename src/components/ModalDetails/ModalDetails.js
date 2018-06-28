import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Star from '@material-ui/icons/Star';
import Modal from '@material-ui/core/Modal';
import crepe from '../../crepe.jpg';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';

import check from '../../check.png';

const styleCard = {
  width: '50vw',
  height: 100,
  display: 'inline-flex',
  flexDirection: 'column',
  margin: '0.4em',
  padding: '1em',
  paddingTop: 16,
  paddingBottom: 16,
};

const placeImage = {
  height: 100,
  width: 100,
};

const imagePerson = {
  height: 30,
  width: 50,
};

const colStyle = {
  display: 'flex',
  flexDirection: 'row',
  margin: 10,
};

const info = {
  display: 'flex',
  flexDirection: 'column',
};

const title = {
  margin: 10,
};

const icon = {
  marginLeft: 170,
};

const languageIcon = {
  marginLeft: 5,
};

const star = {
  color: 'yellow',
  height: 15, 
}

const starSmall = {
  color: 'yellow',
  margin: 0,
  padding: 0,
  height: 10, 
}

const checkStyle = {
  height: 30,
  width: 20,
}


const gridRow = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 0,
};

const gridReview = {
  marginTop: 0,
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 2,
}

const colStyleButton = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2em',
  marginRight: '2em',
  padding: '1em',
  justifyContent: 'center',
  alignItems: 'center',
};


const paper = {
  fontSize: 15,
  backgroundColor: '#00b551',
  color: 'white',
  fontWeight: 'bold',
  width: 40,
  height: 25,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const comentario = {
  marginTop: 8,
  marginLeft: 5,
  fontSize: 11,
  color: 'grey',
  fontStyle: 'italic',
}


class ModalDetails extends React.Component {

  
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
                <img
                  src={crepe}
                  alt="Teatro"
                  style={placeImage}
                />
                <div style={info}>
                  <div style={gridRow}>
                    <h4 style={title}> Crêpe Bistrô </h4>
                    <Tooltip id="tooltip-icon" title="Com base na avaliação de usuários">
                      <Paper style={paper}> 9.0 </Paper>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div style={gridRow}> 
              <img
                  src={check}
                  alt="Teatro"
                  style={checkStyle}
                />
                <h5> Banheiro adaptado para cadeirantes </h5>
                </div>
                <div style={gridRow}> 
                <img
                  src={check}
                  alt="Teatro"
                  style={checkStyle}
                />
                <h5> Vaga especial para deficientes físicos </h5>
                </div>
                <div style={gridRow}> 
                <img
                  src={check}
                  alt="Teatro"
                  style={checkStyle}
                />
                <h5> Rampa para cadeirantes </h5>
                </div>
                <div style={gridRow}> 
                <img
                  src={check}
                  alt="Teatro"
                  style={checkStyle}
                />
                <h5> Conhecimento de libras </h5>
              </div>
              <div style={gridRow}> 
                <img
                  src={check}
                  alt="Teatro"
                  style={checkStyle}
                />
                <h5> Cardápio em Braile </h5>
              </div>
              <div style={colStyleButton}>
            <DialogActions>
            <Button variant="contained" color="secondary" onClick={this.props.onClose} >
              OK
              </Button>
            </DialogActions>
            </div>
        </Dialog>
      </div>
    );
  }
}

export default ModalDetails;
