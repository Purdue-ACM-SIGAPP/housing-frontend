import { API_BASE_URL } from "@env";

export const fetchDevAccessToken = async () => {
  console.log("fetch development access token...");
  try {
    const access_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InB6WkY3aVZhZTQxY1MzbW5ZVWp6biJ9.eyJodHRwczovL215LWFwcC5leGFtcGxlLmNvbS9lbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaHR0cHM6Ly9teS1hcHAuZXhhbXBsZS5jb20vcm9sZXMiOlsiUkEiLCJ0ZXN0Il0sImlzcyI6Imh0dHBzOi8vZGV2LTJnb3d5eWwza2luNjg1dWEudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDY3NGZhYmUzMTNkMjQxYzE3ODU1ZjExMSIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjUxMjgiLCJodHRwczovL2Rldi0yZ293eXlsM2tpbjY4NXVhLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3Mzk5MjY2MzYsImV4cCI6MTczOTkzMzgzNiwic2NvcGUiOiJvcGVuaWQgZW1haWwiLCJhenAiOiI0RG40VWh6S2RVR3RTY00yVFRObWhmUjNyZHVRb3hCZCJ9.TPiMnWNNu5Js8WMXuCDkM4RaeqvOEPoQCe7cg8lHq2mbNxkOpSQYamP6oj59Zpp2e1hLIpKQ4drxXa0fttQTTnlZcgOS9mHOY6FA8epieBdznbIcgTPMJ8InFv6cfoWeQgdO7wpDCu7q5hCu1aJqpLJn-iTmssrEeD5_W1ux8Mk8Z8489IWs9DTCGS_g-N0GZXAJdoVv2gOeWPfo2c-Y3antrq_xw-8p-98Z6PWlzWLuFPqMp56kk8FESlVm3ZYyQkE4potd1H2u9NIBS-gN5ZHHxj0iuzf8757ZxyHynEUv5cl1DHPC3dHkS182GgVEAR4UhINCmgCL9N7uPuT8ag";
    const token_type = "Bearer";

    // const response = await fetch(`${API_BASE_URL}/api/token`, {
    //   method: "GET",
    // });
    // const { access_token, token_type } = await response.json();
    return { access_token, token_type };
  } catch (error) {
    console.error(error, ": Failed to fetch development access token for API");
  }
};