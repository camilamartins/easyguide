import React from 'react';
import NavBar from '../NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import Accessible from '@material-ui/icons/Accessible';
import Language from '@material-ui/icons/Language';
import AddIcon from '@material-ui/icons/Add';

import ModalDetails from '../ModalDetails';
import allnight from '../../allnight.jpg';
import libras from '../../libras.png';
import banzeiro from '../../banzeiro.jpg';
import map from '../../map.png';
import manauara from '../../manauara.jpg';
import teatro from '../../teatro.jpg';
import crepe from '../../crepe.jpg';
import cinemark from '../../cinemark.jpg';
import praia from '../../praia.jpg';
import csu from '../../csu.jpg';
import braile from '../../braile.png';

const librasStyle = {
  height: 25,
  width: 35,
};

const root = {
  height: 900,
  paddingBottom: 90,
  backgroundColor: '#312b45',
};

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

const grid = {
  marginTop: 0,
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

const colStyle = {
  display: 'flex',
  flexDirection: 'row',
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

const gridRow = {
  display: 'flex',
  flexDirection: 'row',
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

const details = {
  marginRight: 0,
  marginLeft: 230,
}

const details2 = {
  marginRight: 0,
  marginLeft: 180,
}

const details3 = {
  marginRight: 0,
  marginLeft:200,
}

const details4 = {
  marginRight: 0,
  marginLeft:120,
}

const details5 = {
  marginRight: 0,
  marginLeft:180,
}

const details6 = {
  padding: 0,
  marginRight: 0,
  marginLeft:260,
}

class ModalListPlace extends React.Component {
  constructor() {
    super();

    this.state = {
        modalDetails: false,
    };
  }

  handleDetailsOpen = () => {
    this.setState({ modalDetails: true });
  };

  render() {
    return (
      <div style={root}>
        <NavBar />
        {this.state.modalDetails &&
      <ModalDetails
        modalVisible={this.state.modalDetails}
        onClose={() => this.setState({
          modalDetails: false,
        })}
      />
      }
        <Grid container spacing={2} style={grid}>
          <Grid item xs={4} sm={7} >

            <Paper style={styleCard}>
              <div style={colStyle}>
                <img
                  src={crepe}
                  alt="Teatro"
                  style={placeImage}
                />
                <div style={info}>
                  <div style={gridRow}>
                  <div style={colStyle}>
                    <h4 style={title}> 1. Crêpe Bistrô </h4>
                    <Tooltip id="tooltip-icon" title="Com base na avaliação de usuários">
                      <Paper style={paper}> 9.0 </Paper>
                    </Tooltip>
                    <div style={details}>
                    <Button variant="contained" color="secondary" onClick={this.handleDetailsOpen}  >
                  Ver detalhes
              </Button>
              </div>
              </div>
                  </div>
                  <h6 style={title}> Creperia </h6>
                  <div style={gridRow}>
                    <h6 style={title}>Rua Amapá, 01 (Rio Madeira), Manaus
                    </h6>
                    <Tooltip id="tooltip-icon" title="Esse lugar possui locais apropriados para cadeirantes!">
                      <Accessible style={{ marginLeft: 280 }} />
                    </Tooltip>
                    <Tooltip id="tooltip-icon" title="Os funcionários deste local falam libras!">
                    <img
                  src={libras}
                  alt="Teatro"
                  style={librasStyle}
                />
                    </Tooltip>
                    <Tooltip id="tooltip-icon" title="Possui cardápio em braile">
                    <img
                  src={braile}
                  alt="Teatro"
                  style={librasStyle}
                />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Paper>
            <Paper style={styleCard}>
              <div style={colStyle}>
                <img
                  src={manauara}
                  alt="Manauara"
                  style={placeImage}
                />
                <div style={info}>
                  <div style={gridRow}>
                  <div style={colStyle}>
                    <h4 style={title}> 2. Manauara Shopping </h4>
                    <Tooltip id="tooltip-icon" title="Com base na avaliação de usuários">
                      <Paper style={paper}> 8.7 </Paper>
                    </Tooltip>
                    <div style={details2}>
                    <Button variant="contained" color="secondary" aria-label="add"  onClick={this.handleDetailsOpen}>
                Ver detalhes
              </Button>
              </div>
              </div>
                  </div>
                  <h6 style={title}> Shopping Center</h6>
                  <div style={gridRow}>
                    <h6 style={title}>Av. Mário Ypiranga, 1300 (Av. Humberto Calderado), Manaus
                    </h6>
                    <Tooltip id="tooltip-icon" title="Esse lugar possui locais apropriados para cadeirantes!">
                      <Accessible style={icon} />
                    </Tooltip>
                    <Tooltip id="tooltip-icon" title="Os funcionários deste local falam libras!">
                    <img
                  src={libras}
                  alt="Teatro"
                  style={librasStyle}
                />
                    </Tooltip>
                    <Tooltip id="tooltip-icon" title="Possui cardápio em braile">
                    <img
                  src={braile}
                  alt="Teatro"
                  style={librasStyle}
                />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Paper>
            <Paper style={styleCard}>
              <div style={colStyle}>
                <img
                  src={teatro}
                  alt="Teatro"
                  style={placeImage}
                />
                <div style={info}>
                  <div style={gridRow}>
                  <div style={colStyle}>
                    <h4 style={title}> 3. Teatro Amazonas </h4>
                    <Tooltip id="tooltip-icon" title="Com base na avaliação de usuários">
                      <Paper style={paper}> 7.0 </Paper>
                    </Tooltip>
                    <div style={details3}>
                    <Button variant="contained" color="secondary" aria-label="add"  onClick={this.handleDetailsOpen} >
            Ver detalhes
              </Button>
              </div>
              </div>
                  </div>
                  <h6 style={title}> Teatro </h6>
                  <div style={gridRow}>
                    <h6 style={title}>R. Tapajós, s/n, Manaus
                    </h6>
                    <Tooltip id="tooltip-icon" title="Esse lugar possui locais apropriados para cadeirantes!">
                      <Accessible style={{ marginLeft: 350 }} />
                    </Tooltip>
                    <Tooltip id="tooltip-icon" title="Os funcionários deste local falam libras!">
                    <img
                  src={libras}
                  alt="Teatro"
                  style={librasStyle}
                />
                    </Tooltip>
                    <Tooltip id="tooltip-icon" title="Possui cardápio em braile">
                    <img
                  src={braile}
                  alt="Teatro"
                  style={librasStyle}
                />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Paper>
            <Paper style={styleCard}>
              <div style={colStyle}>
                <img
                  src={csu}
                  alt="Teatro"
                  style={placeImage}
                />
                <div style={info}>
                  <div style={gridRow}>
                  <div style={colStyle}>
                    <h4 style={title}> 4. CSU - Centro Social Urbano</h4>
                    <Tooltip id="tooltip-icon" title="Com base na avaliação de usuários">
                      <Paper style={paper}> 8.0 </Paper>
                    </Tooltip>
                    <div style={details4}>
                    <Button variant="contained" color="secondary" aria-label="add"  onClick={this.handleDetailsOpen} >
                    Ver detalhes
              </Button>
              </div>
              </div>
                  </div>
                  <h6 style={title}> Parque </h6>
                  <div style={gridRow}>
                    <h6 style={title}>Av. Perimetral, 22, Parque 10 de Novembro, Manaus
                    </h6>
                    <Tooltip id="tooltip-icon" title="Esse lugar possui locais apropriados para cadeirantes!">
                      <Accessible style={{ marginLeft: 210 }} />
                    </Tooltip>
                    <Tooltip id="tooltip-icon" title="Os funcionários deste local falam libras!">
                    <img
                  src={libras}
                  alt="Teatro"
                  style={librasStyle}
                />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Paper>
            <Paper style={styleCard}>
              <div style={colStyle}>
                <img
                  src={praia}
                  alt="Teatro"
                  style={placeImage}
                />
                <div style={info}>
                  <div style={gridRow}>
                  <div style={colStyle}>
                    <h4 style={title}> 6. Orla da Ponta Negra </h4>
                    <Tooltip id="tooltip-icon" title="Com base na avaliação de usuários">
                      <Paper style={paper}> 6.2 </Paper>
                    </Tooltip>
                    <div style={details5}>
                    <Button variant="contained" color="secondary" aria-label="add" onClick={this.handleDetailsOpen} >
                    Ver detalhes
              </Button>
              </div>
              </div>
                  </div>
                  <h6 style={title}> Praça</h6>
                  <div style={gridRow}>
                    <h6 style={title}>Av. Coronel Teixeira, S/N (Praia da Ponta Negra), Manaus
                    </h6>
                    <Tooltip id="tooltip-icon" title="Esse lugar possui locais apropriados para cadeirantes!">
                      <Accessible style={{ marginLeft: 210 }} />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Paper>
            <Paper style={styleCard}>
              <div style={colStyle}>
                <img
                  src={allnight}
                  alt="Teatro"
                  style={placeImage}
                />
                <div style={info}>
                  <div style={gridRow}>
                  <div style={colStyle}>
                    <h4 style={title}> 5. All Night </h4>
                    <Tooltip id="tooltip-icon" title="Com base na avaliação de usuários">
                      <Paper style={paper}> 6.0 </Paper>
                    </Tooltip>
                    <div style={details6}>
                    <Button variant="contained" color="secondary" aria-label="add"  onClick={this.handleDetailsOpen} >
                    Ver detalhes 
              </Button>
              </div>
              </div>
                  </div>
                  <h6 style={title}> Casa Noturna </h6>
                  <div style={gridRow}>
                    <h6 style={title}>Av. Efigênio Sales, 2085, Manaus
                    </h6>
                    <Tooltip id="tooltip-icon" title="Esse lugar possui locais apropriados para cadeirantes!">
                      <Accessible style={{ marginLeft: 330 }} />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ModalListPlace;
