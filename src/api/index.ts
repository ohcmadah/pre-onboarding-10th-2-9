import { APIResponse, GetRecommendationsReponse } from '../@types/api';

// eslint-disable-next-line import/prefer-default-export
export const getRecommendations = async (
  name: string,
): Promise<APIResponse<GetRecommendationsReponse>> => {
  try {
    const res = await fetch(`/api/?name=${name}`, {
      method: 'GET',
      mode: 'cors',
    });

    if (res.ok) {
      const data = (await res.json()) as GetRecommendationsReponse;
      return { isSuccess: true, data };
    }
    throw new Error(res.statusText);
  } catch (error) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        message: error.message,
      };
    }
    return { isSuccess: false, message: '알 수 없는 에러입니다.' };
  }
};
