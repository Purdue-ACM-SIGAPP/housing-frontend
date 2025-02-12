import React, { createContext, useContext, useState } from "react";
import Constants from "expo-constants";
import { Auth0Provider, useAuth0 } from "react-native-auth0";

import { fetchDevAccessToken } from "../../services/authApi";

const AuthContext = createContext();

const CustomAuthProvider = ({ children }) => {
  const isExpoGo = Constants.executionEnvironment === "storeClient";
  const [user, setUser] = useState(null);

  const expoGoLogin = async () => {
    if (isExpoGo) {
      const _token = await fetchDevAccessToken();
      if (_token === undefined) return;

      const { access_token, token_type } = _token;
      setUser({ token: access_token, user: { email: "testuser@purdue.edu"} }); // mocking a test user and using a dev access token
    }
  };

  const expoGoLogout = async () => {
    if (isExpoGo) {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, expoGoLogin, expoGoLogout, isExpoGo, setUser}}>
      {isExpoGo ? (
        children
      ) : (
        <Auth0Provider
          domain={"dev-2gowyyl3kin685ua.us.auth0.com"}
          clientId={"msmF9orDejtFmve1CUV9odgovT2LBvpQ"}
        >
          {children}
        </Auth0Provider>
      )}
    </AuthContext.Provider>
  );
};

const useCustomAuth = () => useContext(AuthContext);

export { CustomAuthProvider, useCustomAuth };