import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Main from './component/main/Main';
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}

export default App
