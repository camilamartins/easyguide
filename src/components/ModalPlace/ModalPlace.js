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

import Accessible from '@material-ui/icons/Accessible';
import Language from '@material-ui/icons/Language';
import allnight from '../../allnight.jpg';
import person1 from '../../person1.jpg';
import person2 from '../../person2.jpg';
import person3 from '../../person3.jpg';

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

const image = {
  marginTop: '0.1em',
  marginLeft: 1,
  height: 900,
  width: 550,
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


class ModalPlace extends React.Component {
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
                  <div style={gridRow}>
                 <Star style={starSmall} />
                 <Star style={starSmall} />
                 <Star style={starSmall} />
                 <Star style={starSmall} />
                 </div>
                  <h6 style={title}> Creperia </h6>
                  <div style={gridRow}>
                    <h6 style={title}>Rua Amapá, 01 (Rio Madeira), Manaus
                    </h6>
                    <Tooltip id="tooltip-icon1" title="Esse lugar possui locais apropriados para cadeirantes!">
                      <Accessible style={{ marginLeft: 200 }} />
                    </Tooltip>
                    <Tooltip id="tooltip-icon2" title="Os funcionários deste local falam libras!">
                      <Language style={languageIcon} />
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div style={gridReview}>
                <h4> Comentários sobre o local </h4>
                </div>
                <div style={gridRow}>
                <img
                  src={person1}
                  alt="Teatro"
                  style={imagePerson}
                />
                <div style={info}>
                <div style={gridRow}>
                 <Star style={star} />
                 <Star style={star} />
                 <Star style={star} />
                 <Star style={star} />
                 <Star style={star} />
                 </div>
                <h6 style={comentario}> Crepe sensacional. Os funcionários são bem treinados para atender deficientes físicos. O lugar é acessível para cadeirantes e os funcionários falam libras! 
                  </h6>
                  </div>
                  </div>
                  <div style={gridRow}>
                <img
                  src={person3}
                  alt="Teatro"
                  style={imagePerson}
                />
                <div style={info}>
                <div style={gridRow}>
                 <Star style={star} />
                 <Star style={star} />
                 <Star style={star} />
                 <Star style={star} />
                 <Star style={star} />
                 </div>
                <h6 style={comentario}> O lugar possui banheiros adaptados para cadeirantes e os funcionários são super treinados para atender todos os tipos de pessoa. Voltarei sempre!!
                  </h6>
                  </div>
                  </div>
                  <div style={gridRow}>
                <img
                  src={person2}
                  alt="Teatro"
                  style={imagePerson}
                />
                <div style={info}>
                <div style={gridRow}>
                 <Star style={star} />
                 <Star style={star} />
                 <Star style={star} />
                 <Star style={star} />
                 </div>
                <h6 style={comentario}> A estrutura do local é muito boa para cadeirantes, mas o local não tem vaga especial para cadeirantes. Fora isso, o local é muito bom!
                  </h6>
                  </div>
                  </div>
              <div style={colStyleButton}>
            <DialogActions>
            <Button variant="contained" color="secondary" onClick={this.props.onClose} >
              Avaliar
              <Star style={{marginLeft:3}} />
              </Button>
            <Button variant="contained" color="secondary" onClick={this.props.onClose} >
              Favoritar
              <FavoriteIcon  style={{marginLeft:3}}/>
              </Button>
            </DialogActions>
            </div>
        </Dialog>
      </div>
    );
  }
}

export default ModalPlace;
