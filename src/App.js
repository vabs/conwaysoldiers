import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

import CellGrid from './components/Grid/Grid';

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" component="h2" gutterBottom align="center">
          Conway's Soldiers
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg"> 
          <Grid container spacing={1}>
            <Grid item xs={8} align="center">
              <CellGrid x={20} y={20} />
            </Grid>
            <Grid item xs={4}>
              <Box pb={2}>
                <Typography variant="h5" gutterBottom>
                  How To Play: <br />
                  1. The square can only move when it has a nearby square to jump over. <br />
                  2. The move can be done horizontally or vertically.<br />
                  3. Diagonal moves are not allowed.<br />
                </Typography>
              </Box>

              <Divider />
              <Divider />
              <Box pb={2} pt={2}>
                <Typography variant="h6">
                  <Typography>
                    Further Reading
                  </Typography>
                  <Link href="https://en.wikipedia.org/wiki/Conway%27s_Soldiers" target="_blank" rel="noopener">
                    Conway's Soldiers - Wikipedia
                  </Link>
                </Typography>
              </Box>

              <Divider />
              <Divider />
              <Box pt={2}>
                <Typography variant="h6">
                  Related Videos
                  <Box pb={3} pt={1}>
                    <CardMedia
                      component='iframe'
                      title='test'
                      src='https://www.youtube.com/embed/Y7hm0Xeicus'
                    />
                  </Box>
                  <Divider />
                  <Box>
                    <CardMedia
                      component='iframe'
                      title='test'
                      src='https://www.youtube.com/embed/Or0uWM9bT5w'
                    />
                  </Box>
                </Typography>
              </Box>
            </Grid>
          </Grid> 
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
