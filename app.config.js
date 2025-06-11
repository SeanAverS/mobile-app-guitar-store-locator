import 'dotenv/config'; 

export default { 
  expo: {
    name: "mobile-app-guitar-store-locator",
    slug: "mobile-app-guitar-store-locator",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "mobileappguitarstorelocator",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      package: "com.seanavers.nearbyguitarstores" 
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      [
        "expo-location", {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ],
      [
        "react-native-maps", {
          "androidApiKey": process.env.EXPO_PUBLIC_Maps_API_KEY, 
          "iosApiKey": process.env.EXPO_PUBLIC_Maps_API_KEY 
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      EXPO_PUBLIC_Maps_API_KEY: process.env.EXPO_PUBLIC_Maps_API_KEY,
      EXPO_PUBLIC_MAP_ID: process.env.EXPO_PUBLIC_MAP_ID,
      EXPO_PUBLIC_BACKEND_URL: process.env.EXPO_PUBLIC_BACKEND_URL || "http://10.0.2.2:5000",
    }
  }
}; 