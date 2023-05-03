import { APIResponse, GetRecommendationsReponse } from '../@types/api';

export const getRecommendations = async (
  name: string,
  options?: Omit<RequestInit, 'method'>,
): Promise<APIResponse<GetRecommendationsReponse>> => {
  try {
    const res = await fetch(`/api/?name=${name}`, {
      method: 'GET',
      ...(options || {}),
    });
    if (res.ok) {
      const data = (await res.json()) as GetRecommendationsReponse;
      return { isSuccess: true, data };
    }
    throw new Error(res.statusText);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return { isSuccess: false, message: 'API 호출이 취소되었습니다.' };
      }
      return {
        isSuccess: false,
        message: error.message,
      };
    }
    return { isSuccess: false, message: '알 수 없는 에러입니다.' };
  }
};

export default {};
