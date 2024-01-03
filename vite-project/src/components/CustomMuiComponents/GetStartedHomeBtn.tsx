import Button from '@mui/material/Button/Button';
import EastIcon from '@mui/icons-material/East';

const GetstartedHomebtn = () => {
  return (
    <Button
      variant="contained"
      endIcon={<EastIcon />}
      sx={{
        width: { xs: '50%', md: 'fit-content' },
        fontSize: { xs: '9px', md: '0.875rem' },
        position: 'static',
      }}>
      Get started - It's Free
    </Button>
  );
};

export default GetstartedHomebtn;
