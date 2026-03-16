import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DetailNews from './pages/DetailNews';
import DummyPage from './pages/DummyPage'; // 1. Import halaman dummy

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<DetailNews />} />
          <Route path="/kategori/:namaKategori" element={<DummyPage />} /> {/* 2. Rute kategori */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;