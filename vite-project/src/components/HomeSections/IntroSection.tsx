import BrainstormingWallImg from '../../assets/BrainstormingWall.png';
import AimArrowImg from '../../assets/AimArrow.png';
import NotesImg from '../../assets/Notes.png';
import { IoMdCheckmark } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { advantagesData, homeIntroText } from '../../Data/HomeData';
import GetstartedHomebtn from '../CustomMuiComponents/GetStartedHomeBtn';

const style = {
  IntroBox: 'h-[60vh] md:h-[100vh] pt-[100px]',
  ContentBox:
    'w-full  h-[60%] md:h-full flex flex-col items-center justify-center  ',
  Advantages:
    'relative  w-[80%] lg:w-[30%] md:w-[50%] mb-6  flex items-center justify-around ',
  AdvantagesItem: ' flex items-center justify-center',
  AdvantageText: 'ml-2  text-xs xl:text-base ',
  title:
    'text-xl md:text-3xl xl:text-5xl  max-w-xs md:max-w-xl xl:max-w-4xl  mb-6  text-center',
  imgContainer:
    'absolute top-[110px] md:top-[-330px]  w-[110%] md:w-[200%]  flex items-center justify-between',
  img: '  w-[100px] md:w-auto',
};

const IntroSection = () => {
  const navigate = useNavigate();
  const handleSummarizeClick = () => {
    navigate('/summarizer');
  };

  return (
    <div className={style.IntroBox}>
      <div className={style.ContentBox}>
        <h1 className={style.title}>{homeIntroText}</h1>
        <div className={style.Advantages}>
          {advantagesData.map((advantage, index) => (
            <div key={index} className={style.AdvantagesItem}>
              <IoMdCheckmark />
              <p className={style.AdvantageText}>{advantage.text}</p>
            </div>
          ))}
          <div className={style.imgContainer}>
            <img
              src={BrainstormingWallImg}
              alt="Brainstorming Wall"
              className={style.img}
            />
            <img src={AimArrowImg} alt="Aim Arrow" className={style.img} />
            <img src={NotesImg} alt="Notes Image" className={style.img} />
          </div>
        </div>
        <a
          onClick={handleSummarizeClick}
          style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
          <GetstartedHomebtn />
        </a>
      </div>
    </div>
  );
};

export default IntroSection;
