import MagnifierImg from '../../assets/Magnifier.png';
import PaintBrushImg from '../../assets/PaintBrush.png';
import EarthImg from '../../assets/Earth.png';
import PuzzleImg from '../../assets/Puzzle.png';
import GiftImg from '../../assets/Gift.png';
import CheckMarkImg from '../../assets/Checkmark.png';
import { featureData } from '../../Data/HomeData';
import FeatureCard from '../CustomMuiComponents/FeatureCard';

const style = {
  box: ' mt-10 flex flex-col items-center justify-center ',
  title: 'mb-3 text-4xl',
  paragraph: 'max-w-[90%] text-center ',
  featuresContainer:
    'w-full xl:max-w-[75vw] md:max-w-[95vw] mx-auto my-2  flex flex-wrap  justify-center md:justify-between ',
  featuresCard:
    '  w-[80vw] md:w-[40vw]  xl:w-[30%] h-104 m-4  flex flex-col items-center justify-center  rounded-lg',
  CardTitle: 'text-lg md:text-xl font-medium text-white text-center  ',
  featuresCardParagraph:
    ' mb-8 text-center   text-medium text-xs md:text-base text-paragraphcolor ',
  icon: '  w-[150px] md:w-[180px]',
  iconContainer: ' w-full  h-[55%] md:h-[50%]  grid place-items-center',
  textsContainer:
    ' w-[90%] h-[45%] md:h-[50%]  flex flex-col item-center justify-start',
};

const features = [
  {
    icon: <img src={MagnifierImg} className={style.icon} />,
  },
  {
    icon: <img src={PaintBrushImg} className={style.icon} />,
  },
  {
    icon: <img src={EarthImg} className={style.icon} />,
  },
  {
    icon: <img src={PuzzleImg} className={style.icon} />,
  },
  {
    icon: <img src={GiftImg} className={style.icon} />,
  },
  {
    icon: <img src={CheckMarkImg} className={style.icon} />,
  },
];

const Features = () => {
  return (
    <section className={style.box} id="features">
      <h2 className={style.title}>Features</h2>
      <p className={style.paragraph}>
        Résumily is constantly growing just like the possibilities of what you
        can achieve.
      </p>
      <div className={style.featuresContainer}>
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            icon={features[index].icon}
            style={style}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
