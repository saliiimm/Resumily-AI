import MoneyImg from '../../assets/PurpleMoney.png';
import BooksImg from '../../assets/Books.png';
import TamponImg from '../../assets/Tampon.png';
import PoliticalDocsImg from '../../assets/PoliticalDocs.png';
import { exampleTitles } from '../../Data/HomeData';
import ExampleCard from '../CustomMuiComponents/ExampleCard';

const style = {
  box: ' mt-10  flex flex-col items-center justify-center ',
  title: 'mb-3 text-4xl',
  paragraph: 'text-center',
  CardContent: 'flex flex-col items-center justify-center',
  examplesContainer:
    'w-full max-w-[80vw] my-2  flex flex-wrap   justify-center  md:justify-between ',
  card: 'w-56 h-36 m-4  flex flex-col items-center justify-center ',
  icon: 'w-[150px]',
};

const exampleImgs = [
  {
    icon: <img src={MoneyImg} className={style.icon} />,
  },
  {
    icon: <img src={BooksImg} className={style.icon} />,
  },
  {
    icon: <img src={TamponImg} className={style.icon} />,
  },
  {
    icon: <img src={PoliticalDocsImg} className={style.icon} />,
  },
];

const ExamplesSection = () => {
  return (
    <section className={style.box} id="example">
      <h2 className={style.title}>Usage Examples </h2>
      <p className={style.paragraph}>You can try our AI in this cases</p>
      <div className={style.examplesContainer}>
        {exampleImgs.map((example, index) => (
          <div className={style.CardContent} key={index}>
            <ExampleCard icon={example.icon} />
            <p>{exampleTitles[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamplesSection;
