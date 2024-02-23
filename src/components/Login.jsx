import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { AuthContext } from './AuthProvider';

export const Login = () => {
  const [loginUser, setLoginUser] = useState();

  const { login } = useContext(AuthContext);

  const handleInput = (e) => {
    setLoginUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Prisijungti
            </Typography>
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Vardas" variant="outlined" onChange={handleInput} />
          </Grid>

          <Grid item>
            <Button variant="outlined" type="submit" onClick={() => login(loginUser)}>
              Prisijungti
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
