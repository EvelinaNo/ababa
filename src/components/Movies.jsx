import React, { useContext, useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import favMovies from '../assets/favMovies';
import { AuthContext } from './AuthProvider';

export const Movies = () => {
  const { user } = useContext(AuthContext);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDialog = () => {
    setSelectedMovie(null);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredMovies = selectedYear === 'all' ? favMovies : favMovies.filter((movie) => movie.year === selectedYear);

  return (
    <Box mt={10}>
      <Typography variant="h5">Labas, {user.username}. Ar matei šiuos filmus?</Typography>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {filteredMovies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card onClick={() => handleMovieClick(movie)} style={{ cursor: 'pointer', height: '100%' }}>
              <CardMedia
                component="img"
                image={movie.image}
                alt={movie.title}
                sx={{
                  height: '73%',
                  objectFit: 'cover',
                  paddingTop: '0',
                }}
              />
              <CardContent style={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {movie.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={!!selectedMovie} onClose={handleCloseDialog}>
        <DialogTitle>Filmo informacija</DialogTitle>
        <DialogContent>
          {selectedMovie && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <img src={selectedMovie.image} alt={selectedMovie.title} style={{ width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>
                  <strong>Pavadinimas:</strong> {selectedMovie.title}
                  <br />
                  <strong>Metai:</strong> {selectedMovie.year}
                  <br />
                  <strong>Aprašymas:</strong> {selectedMovie.description}
                </Typography>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Uždaryti</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
