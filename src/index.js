import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>


);

//client side rendered app: react (cra)
// -> connect to our database which us firebase
// -> external dependecies, react-loading-skeleton
// for styling tailwind

// folder structure
//src
//-> components,
//-> constants,
//-> context,
//-> helpers,
//-> hooks,
//-> pages,
//-> lib (firebase is going to live in here),
//-> services (firebase functions is here)
//-> styles (tailwind's folder (app/tailwind))

