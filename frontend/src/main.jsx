import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./fonts/fonts.css"
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { SnackbarProvider } from "notistack";
import './index.css'
import Providers from './context/Providers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
        <Providers>
          <SnackbarProvider action={(snackbarId) => (
            <button onClick={() => closeSnackbar(snackbarId)}>Dismiss</button>
          )}>
                <App />
          </SnackbarProvider>
        </Providers>
      </Provider>
  </StrictMode>
)
