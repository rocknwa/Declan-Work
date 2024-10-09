import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./fonts/fonts.css";
import { SnackbarProvider } from "notistack";

import { closeSnackbar } from "notistack";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SnackbarProvider
			action={(snackbarId) => (
				<button onClick={() => closeSnackbar(snackbarId)}>Dismiss</button>
			)}
		>
			<App />
		</SnackbarProvider>
	</StrictMode>
);
