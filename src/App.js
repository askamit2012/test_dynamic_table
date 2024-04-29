import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './pages/homepage'
import Loader from './components/loader'

function App() {
  useEffect(() => {
  }, [])
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="App">
      <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
      <Homepage isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;
