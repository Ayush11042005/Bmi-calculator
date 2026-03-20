import { useState, useEffect } from 'react';
import BmiHistoryContainer from '../components/BmiHistory';
import { getBmiHistory, deleteBmiRecord } from '../services/api';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const clientId = localStorage.getItem('bmi_client_id');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    if (!clientId) {
      setLoading(false);
      return;
    }
    
    try {
      const response = await getBmiHistory(clientId);
      setHistory(response.data);
    } catch (err) {
      console.error('Failed to fetch history:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBmiRecord(id, clientId);
      fetchHistory();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">Full History</h1>
        <p className="text-gray-400 mt-2">A complete ledger of your documented weigh-ins tied to this device.</p>
      </div>
      
      <BmiHistoryContainer records={history} onDelete={handleDelete} loading={loading} />
    </div>
  );
};

export default History;
