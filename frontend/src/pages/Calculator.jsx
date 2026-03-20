import { useState, useEffect } from 'react';
import BmiForm from '../components/BmiForm';
import BmiResult from '../components/BmiResult';
import CaloricSimulator from '../components/CaloricSimulator';
import { saveBmi, getLatestBmi } from '../services/api';

const Calculator = () => {
  const [latestResult, setLatestResult] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const clientId = localStorage.getItem('bmi_client_id');

  const [isFreshStart] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('fresh') === 'true';
  });

  useEffect(() => {
    fetchData(isFreshStart);

    if (isFreshStart) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const fetchData = async (isFresh = false) => {
    try {
      if (!clientId) return;
      
      if (!isFresh) {
        const latestRes = await getLatestBmi(clientId);
        if (latestRes.data) {
          setLatestResult(latestRes.data);
        }
      } else {
        setLatestResult(null);
      }
    } catch (err) {
      console.error('Failed to fetch BMI data:', err);
    }
  };

  const handleCalculate = async (payloadArgs) => {
    if (!clientId) return;
    setLoading(true);
    
    try {
      const payload = {
        clientId,
        ...payloadArgs
      };
      
      const response = await saveBmi(payload);
      setLatestResult(response.data);
    } catch (err) {
      console.error('Calculation error:', err);
      alert('Failed to calculate BMI. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-white tracking-tight">Main Calculator Engine</h1>
        <p className="text-gray-400 mt-2">All data is processed anonymously and stored safely on your localized browser.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-12">
        <div className="xl:col-span-5">
            <BmiForm onCalculate={handleCalculate} loading={loading} />
        </div>
        
        <div className="xl:col-span-7 flex flex-col justify-start">
            <BmiResult result={latestResult} />
            
            {latestResult?.tdee && <CaloricSimulator tdee={latestResult.tdee} />}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
