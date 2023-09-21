import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAxXRPaKfkZlXi_v2WDZCHG4hVVsXUBA1Q",
    authDomain: "drag-and-drop-react-auth.firebaseapp.com",
    projectId: "drag-and-drop-react-auth",
    storageBucket: "drag-and-drop-react-auth.appspot.com",
    messagingSenderId: "685585107559",
    appId: "1:685585107559:web:91afae277a12366a7922c2",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;