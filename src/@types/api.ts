import { Recommendation } from './recommendation';

export interface GetRecommendationsRequest {
  name: string;
  options?: Omit<RequestInit, 'method'>;
}
export type GetRecommendationsReponse = Recommendation[];

export interface APIError {
  isSuccess: false;
  message: string;
}

export interface APISuccess<T> {
  isSuccess: true;
  data: T;
}

export type APIResponse<T> = APISuccess<T> | APIError;
