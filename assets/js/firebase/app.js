
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAI8PPUQhXX6UP_pCDk6DJuzdTXLwkuKDM",
    authDomain: "projeto-teste-ac5a7.firebaseapp.com",
    projectId: "projeto-teste-ac5a7",
    storageBucket: "projeto-teste-ac5a7.appspot.com",
    messagingSenderId: "1058680051436",
    appId: "1:1058680051436:web:3c3133cc6865d3ab9c37c9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app