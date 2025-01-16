import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Services from "./pages/ServicesPage";
import OneServicePage from "./pages/OneServicePage";
import OneArticlePage from "./pages/oneArticlepage";
import Products from "./pages/products";
import Industries from "./pages/industries";
import OneIndustriePage from "./pages/oneIndustrie";
import Articles from "./pages/articles";
import Contacts from "./pages/contactus";
import Quote from "./components/quote";
import PrivacyPolicy from "./pages/privacy-policy";
import ThankYou from "./pages/thankyou";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";
import ProtectedAdminRoute from "./components/adminroute";
import ArticlesAdmin from "./pages/admin/articlesadmin";
import SingleArticleAdmin from "./pages/admin/SingleArticleAdmin";
import AddArticleAdmin from "./pages/admin/AddArticleAdmin";
import AddIndustryAdmin from "./pages/admin/AddIndustryAdmin";
import SingleIndustryAdmin from "./pages/admin/SingleIndustryAdmin";
import IndustriesAdmin from "./pages/admin/IndustriesAdmin";
import ServicesAdmin from "./pages/admin/ServicesAdmin";
import AddServiceAdmin from "./pages/admin/AddServiceAdmin";
import SingleServiceAdmin from "./pages/admin/SingleServiceAdmin";

function App() {
  return (
    <BrowserRouter>
      <div id="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<OneServicePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:id" element={<OneIndustriePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<OneArticlePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          >
            {/* Subroutes for Admin Dashboard */}
            <Route path="articles" element={<ArticlesAdmin />} />
            <Route path="articles/:id" element={<SingleArticleAdmin />} />
            <Route path="articles/add" element={<AddArticleAdmin />} />
            <Route
              path="/admin/dashboard/industries"
              element={<IndustriesAdmin />}
            />
            <Route
              path="/admin/dashboard/industries/add"
              element={<AddIndustryAdmin />}
            />
            <Route
              path="/admin/dashboard/industries/:id"
              element={<SingleIndustryAdmin />}
            />
          </Route>
          <Route path="/admin/dashboard/services" element={<ServicesAdmin />} />
          <Route
            path="/admin/dashboard/services/add"
            element={<AddServiceAdmin />}
          />
          <Route
            path="/admin/dashboard/services/:id"
            element={<SingleServiceAdmin />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
