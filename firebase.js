// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLBQBC5jIkZJdc3jrmIUK89yuCDjj1bUo",
  authDomain: "streamflix-bd675.firebaseapp.com",
  projectId: "streamflix-bd675",
  storageBucket: "streamflix-bd675.appspot.com",
  messagingSenderId: "955765027297",
  appId: "1:955765027297:web:61268d0a4ce5dd073aa2a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
