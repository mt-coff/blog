const API_BASE_URL = process.env.MICROCMS_API_URL;
const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;

export const microCmsApi = async <T>(
  path: string,
  body: unknown
): Promise<T> => {
  if (!API_BASE_URL || !MICROCMS_API_KEY) {
    throw new Error("Missing required parameters.");
  }

  try {
    const request: RequestInit = {
      body: JSON.stringify(body),
      headers: {
        "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
      },
    };

    const response = await fetch(`${API_BASE_URL}${path}`, request);
    return response.json();
  } catch (error) {
    throw error;
  }
};
