import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import defaultTheme from "../theme";
import { persistor, store } from "../app/store";

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <BrowserRouter>{children}</BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    ),
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
