import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Theme
				appearance="dark"
				accentColor="blue"
				panelBackground="solid"
				scaling="110%"
			>
				<App />
        {/* <ThemePanel /> */}
			</Theme>
		</BrowserRouter>
	</React.StrictMode>
);
