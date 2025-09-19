import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { FooterMinimal } from './components/footer-minimal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlatformPage } from './pages/PlatformPage';
import { HardwarePage } from './pages/HardwarePage';
import { UseCasesPage } from './pages/UseCasesPage';
import { SafetyPage } from './pages/SafetyPage';
import { PricingPage } from './pages/PricingPage';
import { DevelopersPage } from './pages/DevelopersPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/hardware" element={<HardwarePage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <FooterMinimal />
      </div>
    </Router>
  );
}