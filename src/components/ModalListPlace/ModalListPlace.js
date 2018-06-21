import React from 'react';
import NavBar from '../NavBar';
import Paper from '@material-ui/core/Paper';
import map from '../../map.png';
import Grid from '@material-ui/core/Grid';

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
  marginLeft: 1,
  height: 100,
}

class ModalListPlace extends React.Component {
 
  render() {
    return (
      <div style={root}>
              <NavBar />
        <Grid container spacing={2} style={grid}>
        <Grid item xs={4} sm={7}  >
        <Paper style={styleCard}> 
        </Paper>
        <Paper style={styleCard}> 
        </Paper>
        <Paper style={styleCard}> 
        </Paper>
        <Paper style={styleCard}> 
        </Paper>
        <Paper style={styleCard}> 
        </Paper>
        <Paper style={styleCard}> 
        </Paper>
        </Grid>

        <Grid item xs={4} sm={2} style={image}>
        <img
          src={map}
          alt="Easy Guide"
        />
      </Grid>
      </Grid>
      </div>
    );
  }
}

export default ModalListPlace;
