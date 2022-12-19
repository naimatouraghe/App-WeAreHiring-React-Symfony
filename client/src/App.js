import './App.css';
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Offers from './pages/Offers'
import SingleOffer from './pages/SingleOffer'
import ApplyForm from './pages/ApplyForm'
import ApplyThanks from './pages/ApplyThanks'
import ContactForm from './pages/ContactForm'
import ContactThanks from './pages/ContactThanks'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="offer" element={<SingleOffer />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/contact-thanks" element={<ContactThanks />} />
        <Route path="/application" element={<ApplyForm />} />
        <Route path="/apply-thanks" element={<ApplyThanks />} />

      </Routes>
    </div>
  );
}

export default App;
