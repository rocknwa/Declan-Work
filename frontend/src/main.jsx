import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./fonts/fonts.css"
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { AuthProvider } from './context/AuthContext.jsx'
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
	<SnackbarProvider action={(snackbarId) => (
		<button onClick={() => closeSnackbar(snackbarId)}>Dismiss</button>
	)}>
        <App />
	</SnackbarProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>
)
