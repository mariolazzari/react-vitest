import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { WrappedApp } from "./App";
import { store } from "./app/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>
);
