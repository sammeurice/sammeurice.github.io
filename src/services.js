import axios from "axios";

const API_URL = "https://rankd-api-dev.azurewebsites.net";
const API_KEY = "VpHZ8QZ-l_8N6Y90KKtB3lGWaiABcrcQrsVnHmm6xk-aAzFuzvC_NA==";

//Ping
const PING = `${API_URL}/api/Ping`;

export async function ping() {
  try {
    const res = await axios.get(PING, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return { data: res.data };
  } catch (e) {
    console.log(e);
  }
}

//Forgot password End Point
const RESET_PASSWORD = `${API_URL}/api/auth/resetpassword`;

export async function resetPassword(data) {
  try {
    const res = await axios.post(RESET_PASSWORD, data);
    return { data: res.data };
  } catch (e) {
    console.log(e);
  }
}
