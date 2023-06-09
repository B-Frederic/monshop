import App from './App';
// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
// Redux
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// Firebase
import { app } from './firebase/firebase.config';
// Css
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} app={app} >
        <PersistGate loading={"loading"} persistor={persistor} >
            <App className="scroll-smooth" />
        </PersistGate>
    </Provider>
);
