import storage from "./storage";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';

import {
  ThemeProvider,
  createTheme
} from "@mui/material";

import {
  deepPurple,
  teal,
  pink,
  deepOrange,
  lightBlue,
  cyan
} from '@mui/material/colors';

import Signup from "./cmp/Signup/Signup";
import Login from "./cmp/Login/Login";
import Forgot from "./cmp/Forgot/Forgot";
import Admin from "./cmp/Admin/Admin";
import Modern from "./cmp/Admin/Dashboard/Modern/Modern";
import Notfound from "./cmp/Notfound/Notfound";
import AuthGuard from "./guard/AuthGuard";
import "@fontsource/poppins/500.css";

const App = ()=>{
  const Theme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: teal,
      error: pink,
      warning: deepOrange,
      success: cyan,
      info: lightBlue
    },
    typography: {
      fontFamily: "Poppins"
    }
  });

  const design = (
    <>
      <Provider store={storage}>
        <ThemeProvider theme={Theme}>
            <Router>
              <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="forgot-password" element={<Forgot />} />
                <Route element={<AuthGuard />}>
                  <Route path="admin-panel" element={<Admin />}>
                    <Route path="dashboard/modern" element={<Modern />} />
                    <Route path="*" element={<Notfound />} />
                  </Route>
                </Route>
                <Route path="*" element={<Notfound />} />
              </Routes>
            </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
  return design;
}

export default App;
