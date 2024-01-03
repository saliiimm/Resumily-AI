import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import clipboardCopy from 'clipboard-copy';
import { FiClipboard } from 'react-icons/fi';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type NewSummaryProps = {
  summary: string | undefined;
  error: string;
  loading: boolean;
};
const style = {
  progressContainer: 'w-full grid place-items-center',
  errorText: 'text-[#b91c1c]',
  SummaryContainer: 'my-6 w-[90vw]  mx-auto',
  SummaryTitle: 'text-xl mb-2',
  SummaryParagraph: 'bg-blue-900 p-2 rounded  w-[90%]',
  SummaryCopyBTN: 'cursor-pointer',
  SummaryItem:
    'bg-blue-900 flex items-center border-white border-2 rounded my-2 w-[97%] justify-center',
};
const NewSummary: React.FC<NewSummaryProps> = ({ summary, loading, error }) => {
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);

  const openErrorSnackbar = (message: string) => {
    setErrorMessage(message);
    setIsErrorSnackbarOpen(true);
  };

  const handleCopy = (summary: string) => {
    clipboardCopy(summary)
      .then(() => {
        setCopied(true);
        setSnackbarOpen(true); // Show the Snackbar
        setTimeout(() => {
          setCopied(false);
          setSnackbarOpen(false); // Hide the Snackbar
        }, 1500); // Reset the "Copied" message after 1.5 seconds
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
        openErrorSnackbar(error);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close the Snackbar
  };
  return (
    <div>
      {loading && (
        <div className={style.progressContainer}>
          <CircularProgress size={40} />
        </div>
      )}
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={isErrorSnackbarOpen}
          autoHideDuration={5000} // Adjust the duration as needed
          onClose={() => setIsErrorSnackbarOpen(false)}>
          <Alert severity="error" onClose={() => setIsErrorSnackbarOpen(false)}>
            {errorMessage}
          </Alert>
        </Snackbar>
      )}

      {summary && (
        <div className={style.SummaryContainer}>
          <h3 className={style.SummaryTitle}>New Summary:</h3>
          <div className={style.SummaryItem}>
            <p className={style.SummaryParagraph}>{summary}</p>
            <FiClipboard
              onClick={() => handleCopy(summary)}
              className={style.SummaryCopyBTN}
            />
          </div>
        </div>
      )}
      {copied && (
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={1500}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <Alert severity="success" onClose={handleSnackbarClose}>
            Copied!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default NewSummary;
