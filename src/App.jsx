import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LecturersPage from "./pages/LecturersPage";
import LecturerDetailPage from "./pages/LecturerDetailPage";
import AboutPage from "./pages/AboutPage";
import PartnersPage from "./pages/PartnersPage";
import NotFound from "./pages/NotFound";
import "./styles/main.css";

export default function App() {
  return (
    <Routes>
      {/* Layout — общий каркас: меню сверху, футер снизу, страница в <Outlet /> */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lecturers" element={<LecturersPage />} />
        <Route path="/lecturers/:id" element={<LecturerDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
