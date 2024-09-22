import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import Setting from "./routes/setting/setting.component";
import Support from "./routes/support/support.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import ResetPassword from "./routes/reset-password/reset-password.component";
import ProtectedRoutes from "./utils/protected-routes/protected-routes";
import Header from "./components/header/header.component";
import Decks from "./routes/decks/decks.component";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes type="Dashboard" />}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/support" element={<Support />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/*" element={<Dashboard />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoutes type="Auth" />}>
        <Route path="/" element={<Header />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<SignIn />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
