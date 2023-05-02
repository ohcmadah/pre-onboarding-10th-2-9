import { Recommendation } from './recommendation';

export type GetRecommendationsReponse = Recommendation[];

interface APIError {
  isSuccess: false;
  message: string;
}

interface APISuccess<T> {
  isSuccess: true;
  data: T;
}

export type APIResponse<T> = APISuccess<T> | APIError;
