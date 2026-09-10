import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './Components/context/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    // <Provider store={store}>
    <AuthProvider>
         {/* <CartProvider> */}
        <App />
         {/* </CartProvider> */}
    </AuthProvider>
    // </Provider>
    // </BrowserRouter>
    
);
