import { BsSend } from 'react-icons/bs';
import Chip from '@mui/material/Chip';
const style = {
  Container: 'w-full mt-2 flex flex-col items-center justify-center mb-3',
  TextAreaDiv: 'mt-[15px] flex items-center justify-center',
  ChipsContainer:
    'flex items-center justify-start md:justify-center w-[100%] md:w-[60%] mx-auto overflow-x-scroll lg:overflow-x-hidden',
  textAreaStyle:
    'h-[40px] w-[70vw] md:w-[40vw] bg-gray-800 text-white p-2 rounded resize-none',
  SendIcon: 'ml-[10px] mt-[5px]',
};

const TextArea = ({
  inputText,
  handleSummarize,
  loading,
  handleInputChange,
  selectedLength,
  handleLengthSelection,
  selectedTemperature,
  handleTemperatureSelection,
}: {
  inputText: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSummarize: () => void;
  loading: boolean;
  selectedLength: string;
  handleLengthSelection: (length: string) => void;
  selectedTemperature: number | undefined;
  handleTemperatureSelection: (temperature: number) => void;
}) => {
  return (
    <div className={style.Container}>
      <div className={style.ChipsContainer}>
        <Chip
          label="Small"
          variant={selectedLength === 'small' ? 'filled' : 'outlined'}
          color="primary"
          sx={{ marginInline: '10px' }}
          onClick={() => handleLengthSelection('small')}
        />
        <Chip
          label="Long"
          variant={selectedLength === 'long' ? 'filled' : 'outlined'}
          color="primary"
          sx={{ marginInline: '10px' }}
          onClick={() => handleLengthSelection('long')}
        />
        <Chip
          label="High Temperature"
          color="success"
          sx={{ marginInline: '10px' }}
          variant={selectedTemperature === 0.7 ? 'filled' : 'outlined'}
          onClick={() => handleTemperatureSelection(0.7)}
        />
        <Chip
          label="Medium Temperature"
          color="success"
          sx={{ marginInline: '10px' }}
          variant={selectedTemperature === 0.5 ? 'filled' : 'outlined'}
          onClick={() => handleTemperatureSelection(0.5)}
        />
        <Chip
          label="Low Temperature"
          color="success"
          sx={{ marginInline: '10px' }}
          variant={selectedTemperature === 0.3 ? 'filled' : 'outlined'}
          onClick={() => handleTemperatureSelection(0.3)}
        />
      </div>
      <div className={style.TextAreaDiv}>
        <textarea
          className={style.textAreaStyle}
          placeholder="Enter the text to summarize"
          value={inputText}
          onChange={handleInputChange}
          rows={1}
          cols={70}
        />
        <BsSend
          size={20}
          onClick={handleSummarize}
          disabled={loading || !inputText}
          className={style.SendIcon}
          style={{ color: '#5200FF', marginLeft: '10px', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default TextArea;
