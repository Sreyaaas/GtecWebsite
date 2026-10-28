import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileActionBar } from './components/MobileActionBar';
import { LocaleProvider, useCopy, type Locale } from './i18n';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

const SkipLink = () => {
  const label = useCopy({ en: 'Skip to content', ar: 'انتقل إلى المحتوى' });
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
    >
      {label}
    </a>
  );
};

const Layout: React.FC<{ locale: Locale }> = ({ locale }) => (
  <LocaleProvider locale={locale}>
    <SkipLink />
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  </LocaleProvider>
);

const pageRoutes = (home: string) => (
  <>
    <Route index element={<HomePage />} />
    <Route path="products" element={<ProductsPage />} />
    <Route path="products/:categorySlug" element={<ProductDetailPage />} />
    <Route path="services" element={<ServicesPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="privacy" element={<PrivacyPage />} />
    <Route path="*" element={<Navigate to={home} replace />} />
  </>
);

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/ar" element={<Layout locale="ar" />}>
          {pageRoutes('/ar')}
        </Route>
        <Route path="/" element={<Layout locale="en" />}>
          {pageRoutes('/')}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
