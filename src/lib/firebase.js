import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//here i want to import the seed file
//import {seedDatabase} from "../seed";

const config = {
    apiKey: "AIzaSyC_Ta_I259pM56rYb7_I8b9OTGcxr8k7a0",
    authDomain: "encontrarte-dadbd.firebaseapp.com",
    projectId: "encontrarte-dadbd",
    storageBucket: "encontrarte-dadbd.appspot.com",
    messagingSenderId: "261992166334",
    appId: "1:261992166334:web:323b78d67f317e4ad2bfef",
    measurementId: "G-HJ9JK2BTWM"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here is where i want to call the seed file (only ONCE!)
//seedDatabase(firebase);

export { firebase, FieldValue };