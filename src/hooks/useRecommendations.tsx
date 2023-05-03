import { useEffect, useState } from 'react';
import { getRecommendations } from '../api';
import { Cache, debounce } from '../utils';
import { GetRecommendationsRequest } from '../@types/api';
import { Recommendation } from '../@types/recommendation';

const cache = new Cache();

const useRecommendations = ({ name, options }: GetRecommendationsRequest) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const { signal: _, ...restOptions } = options || {};

  useEffect(() => {
    const searchText = name.trim();
    if (searchText !== '') {
      const cachedData = cache.get<Recommendation[]>(searchText);
      if (cachedData) {
        setRecommendations(cachedData);
        return undefined;
      }

      const controller = new AbortController();
      const { signal } = controller;

      const debounced = debounce(async () => {
        const res = await getRecommendations({ name, options: { ...restOptions, signal } });
        if (res.isSuccess) {
          setRecommendations(res.data);
          cache.set(searchText, res.data);
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
