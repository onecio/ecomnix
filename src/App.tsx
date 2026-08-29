import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Diagnostico from './modules/1-diagnostico/Diagnostico';
import Biblioteca from './modules/2-biblioteca/Biblioteca';
import Calculadora from './modules/3-calculadora/Calculadora';
import Simulador from './modules/4-simulador/Simulador';
import AppMockup from './modules/5-app/AppMockup';
import Conhecimento from './modules/6-conhecimento/Conhecimento';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="section">
      <div className="wrap wrap--narrow">
        <h1>Página não encontrada</h1>
        <p>O endereço acessado não existe.</p>
        <a className="btn btn--primary" href="#/">Voltar ao início</a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <TopBar />
      <main id="main">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/app" element={<AppMockup />} />
          <Route path="/conhecimento" element={<Conhecimento />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
