import "expo-env";
import { withBuildProperties } from "expo-build-properties";

export default {
  expo: {
    name: "clientapp",
    slug: "clientapp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
    android: {
      "package": "com.anonymous.clientapp",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      [
        withBuildProperties,
        {
          ios: {
            useFrameworks: "static",
          },
        },
      ],
      [
        "react-native-auth0",
        {
          "domain": "dev-mkdb0weeluguzopu.us.auth0.com"
        }
      ]
    ],
    "extra": {
      "eas": {
        "projectId": "1f6e3590-1f9f-41c2-87e1-e9156b03d266"
      }
    }
  },
};
