import Home from './pages/Home';
import Summarizer from './pages/Summarizer/Summarizer';
import Error404 from './pages/Error404';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summarizer" element={<Summarizer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
