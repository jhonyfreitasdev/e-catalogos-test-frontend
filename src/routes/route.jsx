import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Purchase } from "../pages/purchase/index.jsx";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Purchase />} />
    </Routes>
  </BrowserRouter>
);