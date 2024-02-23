import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import video from '../assets/videos/video.mp4';

export const Home = () => {
  return (
    <>
      <Link to="/movies" style={{ paddingTop: '34px', display: 'block' }}>
        <Box sx={{ maxWidth: '100%', margin: '10px auto' }}>
          <video autoPlay controls={false} style={{ maxWidth: '100%', height: '100%' }}>
            <source src={video} type="video/mp4" />
          </video>
        </Box>
      </Link>
    </>
  );
};
