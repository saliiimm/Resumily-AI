import SummarizeLogo from '../../assets/SummarizeLogo.png';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const style = {
  TopBarContainer:
    'w-full flex justify-center items-center absolute top-0 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-gray-900',
  TopBarText: 'ml-10 text-3xl',
};

const TopBar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };
  return (
    <div className={style.TopBarContainer}>
      <a onClick={handleHomeClick}>
        <Avatar src={SummarizeLogo} alt="Résumily Logo" />
      </a>
      <h1 className={style.TopBarText}>Résumily</h1>
    </div>
  );
};

export default TopBar;
