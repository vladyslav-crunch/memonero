import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import { UserProvider } from "./contexts/user.context";
import { DecksRefetchProvider } from "./contexts/decks-refetch.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/memonero"}>
      <UserProvider>
        <DecksRefetchProvider>
          <App />
        </DecksRefetchProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
