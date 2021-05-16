import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA0X-Jxg1iGd3kVAbJNL6OcJ6Xf0Ey3RK0",
  authDomain: "auth-dev-eb714.firebaseapp.com",
  projectId: "auth-dev-eb714",
  storageBucket: "auth-dev-eb714.appspot.com",
  messagingSenderId: "701530536218",
  appId: "1:701530536218:web:433f239b0a32f4bee614a3",
});

export const auth = app.auth();
export default app;
