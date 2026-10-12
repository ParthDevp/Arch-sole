import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Podiatry from './pages/Podiatry';
import Services from './pages/Services';
import Team from './pages/Team';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import AdminAppointments from './pages/AdminAppointments';
import StaticLegal from './pages/StaticLegal';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/podiatry" element={<Podiatry />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route path="/privacy" element={<StaticLegal type="privacy" />} />
        <Route path="/terms" element={<StaticLegal type="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
