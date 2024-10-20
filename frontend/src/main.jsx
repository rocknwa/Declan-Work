import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./fonts/fonts.css"
import '@rainbow-me/rainbowkit/styles.css';
import '@coinbase/onchainkit/styles.css';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { AuthProvider } from './context/AuthContext.jsx'
import { SnackbarProvider } from "notistack";
import OnchainProviders from './onchainkit/OnchainProviders.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OnchainProviders>
      <Provider store={store}>
        <AuthProvider>
          <SnackbarProvider action={(snackbarId) => (
            <button onClick={() => closeSnackbar(snackbarId)}>Dismiss</button>
          )}>
                <App />
          </SnackbarProvider>
        </AuthProvider>
      </Provider>
    </OnchainProviders>
  </StrictMode>
)
