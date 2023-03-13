import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Rate from './Rate';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Rate></Rate>
    </QueryClientProvider>
  );
}

export default App;
