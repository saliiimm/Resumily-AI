import { useState, useEffect, useRef } from 'react';
import clipboardCopy from 'clipboard-copy';
import { FiClipboard } from 'react-icons/fi';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type OldSummariesProps = {
  oldSummaries: string[];
};
const style = {
  OldSummariesContainer: 'mt-4 w-[90vw]  mx-auto',
  OldSummariesTitle: 'text-xl mb-2',
  OldSummariesList: 'md:max-h-[40vh] max-h-[32vh] overflow-y-scroll',
  OldSummariesListitem:
    'bg-gray-700  flex items-center border-white border-2 rounded my-2 w-[97%] justify-center',
  OldSummariesParagraph: 'bg-gray-700 text-white p-2 rounded mb-2  w-[90%] ',
  OldSummariesCopyBTN: 'cursor-pointer',
};

const OldSummaries: React.FC<OldSummariesProps> = ({ oldSummaries }) => {
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close the Snackbar
  };
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [oldSummaries]);

  return (
    <div className={style.OldSummariesContainer}>
      {oldSummaries.length > 0 && (
        <h3 className={style.OldSummariesTitle}>Old Summaries:</h3>
      )}
      <div className={style.OldSummariesList} ref={containerRef}>
        {oldSummaries
          .slice(1)
          .reverse()
          .map((oldSummary, index) => (
            <div className={style.OldSummariesListitem} key={index}>
              <p className={style.OldSummariesParagraph}>{oldSummary}</p>
              <FiClipboard
                onClick={() => handleCopy(oldSummary)}
                className={style.OldSummariesCopyBTN}
              />
            </div>
          ))}
      </div>
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

export default OldSummaries;
