import { useEffect, useState } from 'react';
import { getRecommendations } from '../api';
import debounce from '../utils/debounce';
import { GetRecommendationsRequest } from '../@types/api';
import { Recommendation } from '../@types/recommendation';

const useRecommendations = ({ name, options }: GetRecommendationsRequest) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const { signal: _, ...restOptions } = options || {};

  useEffect(() => {
    if (name.trim() !== '') {
      const controller = new AbortController();
      const { signal } = controller;

      const debounced = debounce(async () => {
        const res = await getRecommendations({ name, options: { ...restOptions, signal } });
        if (res.isSuccess) {
          setRecommendations(res.data);
        }
      }, 500);
      debounced();

      return () => {
        debounced.clear();
        controller.abort();
      };
    }
    return undefined;
  }, [name]);

  return recommendations;
};

export default useRecommendations;
