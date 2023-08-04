import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../home/home";
import StartPlanning from "../start_planning/start_planning";
import NotFound from "../not_found/not_found";
import StartButton from "../start_planning/StartButton";
import LoginForm from "../login_form/login_form";
import Signup from "../login_form/signup";
import ForgotPasswordForm from "../login_form/forgot_password";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="startplanning" element={<StartPlanning />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPasswordForm />} />
        <Route
          path="startbutton"
          element={
            <StartButton
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              label={"Start Planning My Meal"}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
