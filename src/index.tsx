import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./hooks/useGlobalState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// Sending Global States to entire application
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
