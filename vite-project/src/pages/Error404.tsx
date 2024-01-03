import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Error404() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}>
      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant="h1" style={{ color: 'white' }}>
          404 error
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          Go Back
        </Button>
      </Box>
    </Box>
  );
}
