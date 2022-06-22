import DashBoard from "../components/DashBoard";
import NotFound from "./NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App/App";
const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Dashboard" element={<DashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default ApplicationRouter;
