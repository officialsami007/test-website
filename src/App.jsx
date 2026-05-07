import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Platform from "./pages/Platform";
import Services from "./pages/Services";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import AiLlm from "./pages/solutions/AiLlm";
import Captura from "./pages/solutions/Captura";
import Xdocs from "./pages/solutions/Xdocs";
import SmartRestora from "./pages/solutions/SmartRestora";
import HajiraBook from "./pages/solutions/HajiraBook";
import SchoolManagement from "./pages/solutions/SchoolManagement";
import CoachingManagement from "./pages/solutions/CoachingManagement";
import EnterpriseDataProcessing from "./pages/solutions/EnterpriseDataProcessing";

import About from "./pages/company/About";
import Leadership from "./pages/company/Leadership";
import Compliance from "./pages/company/Compliance";
import Reviews from "./pages/company/Reviews";

import Blog from "./pages/resources/Blog";
import ResearchLab from "./pages/resources/ResearchLab";
import CaseStudies from "./pages/resources/CaseStudies";
import Documentation from "./pages/resources/Documentation";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/services" element={<Services />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/solutions/ai-llm-chatbots" element={<AiLlm />} />
        <Route path="/solutions/captura-data-scanning" element={<Captura />} />
        <Route path="/solutions/xdocs-ai-dms" element={<Xdocs />} />
        <Route path="/solutions/smartrestora-pos" element={<SmartRestora />} />
        <Route path="/solutions/hajirabook-payroll" element={<HajiraBook />} />
        <Route path="/solutions/school-management-system" element={<SchoolManagement />} />
        <Route path="/solutions/coaching-management-saas" element={<CoachingManagement />} />
        <Route
          path="/solutions/enterprise-data-processing"
          element={<EnterpriseDataProcessing />}
        />
        <Route path="/company/about-us" element={<About />} />
        <Route path="/company/leadership-team" element={<Leadership />} />
        <Route path="/company/certifications-compliance" element={<Compliance />} />
        <Route path="/company/client-reviews" element={<Reviews />} />

        <Route path="/insights/blog" element={<Blog />} />
        <Route path="/insights/research-lab" element={<ResearchLab />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/documentation" element={<Documentation />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}