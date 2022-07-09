import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Router from "./routes";
import theme from "./components/theme";
import AuthContextProvider from "./context/AuthContextProvider";
import ProjectContextProvider from "context/ProjectContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";

import itLocale from "date-fns/locale/it";
import PortalContextProvider from "context/PortalContextProvider";
import { SnackbarProvider } from "notistack";
import axios from "axios";
import "./styles/style.scss";
import { useAuth } from "context/AuthContext";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL.replaceAll('"', "");
axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_API_KEY;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={itLocale}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <SnackbarProvider>
              <PortalContextProvider>
                <AuthContextProvider>
                  <App />
                </AuthContextProvider>
              </PortalContextProvider>
            </SnackbarProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  const { isLogged } = useAuth();

  const RouterComponent = useMemo(() => <Router />, []);
  if (isLogged) return <ProjectContextProvider>{RouterComponent}</ProjectContextProvider>;
  else return RouterComponent;
}
