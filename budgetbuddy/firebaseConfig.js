// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA5WBJEDEMVRL6pi3OoTfosvQQ9zH3of3A',
  authDomain: 'budgetbuddy-faf42.firebaseapp.com',
  projectId: 'budgetbuddy-faf42',
  storageBucket: 'budgetbuddy-faf42.appspot.com',
  messagingSenderId: '672846762551',
  appId: '1:672846762551:web:6bd079a8c1ec13d46d65b2',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
