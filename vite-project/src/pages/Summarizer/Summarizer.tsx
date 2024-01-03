import React, { useState, useEffect } from 'react';
//to use the api:
import { summarizeText } from '../../Data/SummarizerAPI';
//import useQuery to cache data
import { useQuery } from 'react-query';
// Import the new components
import TextArea from '../../components/DashboardSections/CustomTextArea';
import NewSummary from '../../components/DashboardSections/NewSummary';
import OldSummaries from '../../components/DashboardSections/OldSummary';
import TopBar from '../../components/DashboardSections/TopBar';
const SummarizationQueryKey = 'summarization';

const Summarizer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [selectedLength, setSelectedLength] = useState('small');
  const [selectedTemperature, setSelectedTemperature] = useState<
    number | undefined
  >(undefined);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [oldSummaries, setOldSummaries] = useState<string[]>([]);

  // Load old summaries from localStorage when the component mounts
  useEffect(() => {
    const storedOldSummaries = localStorage.getItem('oldSummaries');
    if (storedOldSummaries) {
      setOldSummaries(JSON.parse(storedOldSummaries));
    }
  }, []);
  //add it to the list of old summaries
  const addOldSummary = (oldSummary: string) => {
    setOldSummaries((prevSummaries) => {
      const updatedSummaries = [...prevSummaries];
      updatedSummaries.unshift(oldSummary);
      localStorage.setItem('oldSummaries', JSON.stringify(updatedSummaries));
      return updatedSummaries;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleLengthSelection = (length: string) => {
    setSelectedLength(length);
  };

  const handleTemperatureSelection = (temperature: number) => {
    setSelectedTemperature(temperature);
  };

  const handleSummarize = () => {
    setLoading(true);
    setError('');
    setInputText('');
    SummarizationQuery.refetch();
  };

  const SummarizationQuery = useQuery<string>(
    SummarizationQueryKey,
    () => summarizeText(inputText, selectedLength, selectedTemperature),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (SummarizationQuery.isError) {
      setError('An error occurred while summarizing the text.');
    }

    if (SummarizationQuery.isSuccess && SummarizationQuery.data) {
      setLoading(false);
      addOldSummary(SummarizationQuery.data);
    }
  }, [
    SummarizationQuery.data,
    SummarizationQuery.isError,
    SummarizationQuery.isSuccess,
  ]);
  const style = {
    SummarizerContainer:
      'relative bg-black h-screen w-full overflow-x-hidden flex flex-col-reverse text-white',
  };

  return (
    <div className={style.SummarizerContainer}>
      <TextArea
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleSummarize={handleSummarize}
        selectedLength={selectedLength}
        handleLengthSelection={handleLengthSelection}
        selectedTemperature={selectedTemperature}
        handleTemperatureSelection={handleTemperatureSelection}
        loading={loading}
      />
      <NewSummary
        summary={SummarizationQuery.data}
        loading={loading}
        error={error}
      />
      <OldSummaries oldSummaries={oldSummaries} />
      <TopBar />
    </div>
  );
};

export default Summarizer;
