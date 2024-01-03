import { ReactNode } from 'react';
import Card from '@mui/material/Card';

interface ExampleCardProps {
  icon: ReactNode;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ icon }) => (
  <Card
    className="w-56 h-36 m-4 flex flex-col items-center justify-center"
    sx={{ borderRadius: '23px', backgroundColor: '#191a1e' }}>
    {icon}
  </Card>
);

export default ExampleCard;
