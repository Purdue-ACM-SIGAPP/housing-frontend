const API_URL = '10.186.10.57';

export const fetchDevAccessToken = async () => {
  console.log("fetch development access token...");
  try {
    const response = await fetch(`${API_URL}/api/token`, {
      method: "GET",
    });
    const { access_token, token_type } = await response.json();
    return { access_token, token_type };
  } catch (error) {
    console.error(error, ": Failed to fetch development access token for API");
  }
};