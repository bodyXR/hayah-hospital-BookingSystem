import {CssBaseline, ThemeProvider } from "@mui/material";
import Login from "./pages/Login.tsx";
import CreateAccount from "./pages/CreateAccount.tsx";
import { theme } from "./theme.js";
import { Route, Routes } from "react-router-dom";
import { DOCTOR_INFOS_ROUTE, FORGOT_PASSWORD_ROUTE, HOME_PAGE_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "./routes/paths.ts";
import Layout from "./Components/Layout.tsx";
import Missing from "./pages/Missing.tsx";
import Home from "./pages/Home.jsx";
import RequireAuth from "./Components/RequireAuth.tsx";
import DoctorInfos from "./pages/DoctorInfos.tsx";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path={LOGIN_ROUTE} element={<Login/>}/>
          <Route path={SIGNUP_ROUTE} element={<CreateAccount/>}/>

          <Route path={FORGOT_PASSWORD_ROUTE} element={<CreateAccount/>}/>
          
          {/* protected routes */}
          <Route element={<RequireAuth/>}>
            <Route path={HOME_PAGE_ROUTE} element={<Home/>}/>
            <Route path={`${DOCTOR_INFOS_ROUTE}/:name`} element={<DoctorInfos/>}/>
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
