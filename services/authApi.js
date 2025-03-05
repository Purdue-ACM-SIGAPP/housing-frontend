import { API_BASE_URL, ACCESS_TOKEN } from "@env";

export const fetchDevAccessToken = async () => {
  console.log("fetch development access token...");
  try {
    const token_type = "Bearer";

    // const response = await fetch(`${API_BASE_URL}/api/token`, {
    //   method: "GET",
    // });
    // const { access_token, token_type } = await response.json();
    return { ACCESS_TOKEN, token_type };
  } catch (error) {
    console.error(error, ": Failed to fetch development access token for API");
  }
};