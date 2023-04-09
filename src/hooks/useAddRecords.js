import { useState } from "react";
import axios from 'axios';

const useAddRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const addRecord = (items) => {
    setLoading(true);
    axios.post('records/', items).then((resp) => {
      setData(resp);
      setLoading(false);
    });
  }

  return { addRecord, data, loading, error };
};

export default useAddRecords;
