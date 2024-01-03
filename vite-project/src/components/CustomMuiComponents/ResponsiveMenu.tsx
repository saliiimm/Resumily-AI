import { Menu, MenuItem } from '@mui/material';

type ResponsiveMenuProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  handleHomeClick: () => void;
  handleSummarizeClick: () => void;
};

const style = {
  menuItem: 'xl:hidden',
  navButtonMenu:
    'h-[35px] w-[120px] p-3 flex items-center justify-center text-base text-white bg-sky-500 rounded-[45px] flex xl:hidden',
};
const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({
  anchorEl,
  open,
  handleClose,
  handleHomeClick,
  handleSummarizeClick,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      id="basic-menu"
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: 'rgba(31,32,35,.8)',
          mt: '5px',
          color: 'white',
        },
      }}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <MenuItem onClick={handleClose} className={style.menuItem}>
        <a href="#features" onClick={handleHomeClick}>
          Features
        </a>
      </MenuItem>
      <MenuItem onClick={handleClose} className={style.menuItem}>
        <a href="#example" onClick={handleHomeClick}>
          Examples
        </a>
      </MenuItem>
      <MenuItem onClick={handleClose} className={style.menuItem}>
        <a onClick={handleSummarizeClick}>
          <button className={style.navButtonMenu}>Get started</button>
        </a>
      </MenuItem>
    </Menu>
  );
};

export default ResponsiveMenu;
