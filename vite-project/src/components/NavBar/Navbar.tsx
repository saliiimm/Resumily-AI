import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import SummarizeLogo from '../../assets/SummarizeLogo.png';
//mui imports
import { Box, Avatar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveMenu from '../CustomMuiComponents/ResponsiveMenu';

const style = {
  navContainer:
    'fixed top-3 left-[5vw] md:left-[30vw]  w-[90%] md:w-[40vw] h-[50px] mx-auto  p-2 flex items-center justify-between rounded-[45px] z-50 bg-slate-700 bg-opacity-40 backdrop-blur-lg ',
  navList: 'w-[60%] flex items-center justify-around ',
  navListItem: '  xl:block text-base text-white hidden',
  navButton:
    ' w-[120px] h-[35px] p-3 hidden xl:flex items-center justify-center text-base text-white bg-sky-500 rounded-[45px]  ',
  navButtonMenu:
    ' w-[120px] h-[35px] p-3 flex xl:hidden items-center justify-center text-base text-white bg-sky-500 rounded-[45px] ',
  nav: `
    background-color: rgba(31, 32, 35, 0.7);
    backdrop-filter: blur(24px);
    transition: background-color 0.2s ease;
    button {
      background-color: #248aff;
    }`,
};
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSummarizeClick = () => {
    navigate('/summarizer');
  };
  return (
    <nav className={style.navContainer}>
      <a onClick={handleHomeClick}>
        <Avatar src={SummarizeLogo} alt="Résumily Logo" />
      </a>
      <ul className={style.navList}>
        <li className={style.navListItem}>
          <a href="#features" onClick={handleHomeClick}>
            Features
          </a>
        </li>
        <li className={style.navListItem}>
          <a href="#example" onClick={handleHomeClick}>
            Examples
          </a>
        </li>
      </ul>
      <a onClick={handleSummarizeClick}>
        <button className={style.navButton}>Get started</button>
      </a>
      <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <MenuIcon />
        </IconButton>
      </Box>
      <ResponsiveMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        handleHomeClick={handleHomeClick}
        handleSummarizeClick={handleSummarizeClick}
      />
    </nav>
  );
};

export default Navbar;
