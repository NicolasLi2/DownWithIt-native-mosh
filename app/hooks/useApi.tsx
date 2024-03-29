import { ApiResponse } from 'apisauce';
import { useState } from 'react';

export default function useApi(
  apiFunc: () => Promise<ApiResponse<unknown, unknown>>
) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };
  return { data, error, loading, request };
}
