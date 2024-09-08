import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Setting from "./routes/setting/setting.component";
import Support from "./routes/support/support.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import ResetPassword from "./routes/reset-password/reset-password.component";
import ProtectedRoutes from "./utils/protected-routes/protected-routes";
import AuthRoutes from "./utils/auth-routes/auth-routes";
function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Route>
      <Route element={<AuthRoutes />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
