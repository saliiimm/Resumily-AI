import React from 'react';
import Card from '@mui/material/Card';

interface FeatureCardProps {
  feature: {
    title: string;
    paragraph: string;
  };
  style: {
    featuresCard: string;
    iconContainer: string;
    CardTitle: string;
    featuresCardParagraph: string;
    textsContainer: string;
  };
  icon: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, feature, style }) => {
  return (
    <Card
      className={style.featuresCard}
      sx={{ borderRadius: '1rem', backgroundColor: '#191a1e' }}>
      <div className={style.iconContainer}>{icon}</div>
      <div className={style.textsContainer}>
        <h4 className={style.CardTitle}>{feature.title}</h4>
        <p className={style.featuresCardParagraph}>{feature.paragraph}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
