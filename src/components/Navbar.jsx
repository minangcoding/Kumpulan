import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // STATE BARU: Untuk mengontrol buka/tutup menu di layar HP
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(today.toLocaleDateString('id-ID', options));
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubscribed(false);
    }, 3000);
  };

  const filteredNews = newsData.filter((news) => 
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* 1. TOP BAR GELAP */}
      <div className="bg-gray-900 text-gray-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-medium tracking-wide">
            {currentDate} <span className="mx-2 hidden sm:inline">|</span> <span className="hidden sm:inline">Edisi Kumpulan, Pasaman</span>
          </div>
          <div className="hidden sm:flex space-x-4">
            <Link to="/info/tentang-kami" className="hover:text-white transition-colors">Tentang Kami</Link>
            <Link to="/info/redaksi" className="hover:text-white transition-colors">Redaksi</Link>
            <Link to="/info/pedoman-media-siber" className="hover:text-white transition-colors">Pedoman Media Siber</Link>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR UTAMA */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center z-20">
              <Link to="/" className="flex items-center gap-3">
                <img src="/Kumpulan.jpg" alt="Logo Kumpulan News" className="h-10 w-10 object-cover rounded-lg shadow-sm" />
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-gray-900">
                  KUMPULAN<span className="text-blue-600">NEWS</span>.
                </span>
              </Link>
            </div>

            {/* Menu Desktop (Sembunyi di HP) */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Terbaru</Link>
              <Link to="/kategori/teknologi" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Teknologi</Link>
              <Link to="/kategori/otomotif" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Otomotif</Link>
            </div>

            {/* Ikon Search & Tombol Subscribe Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => { setIsSearchOpen(true); setSearchQuery(''); }} className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
              <div className="h-6 w-px bg-gray-200"></div>
              <button onClick={() => setIsModalOpen(true)} className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors shadow-sm">
                Subscribe
              </button>
            </div>

            {/* TOMBOL HAMBURGER MENU UNTUK HP */}
            <div className="md:hidden flex items-center gap-4 z-20">
              {/* Tombol Search (Mobile) */}
              <button onClick={() => { setIsSearchOpen(true); setSearchQuery(''); }} className="text-gray-600 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
              {/* Tombol Garis Tiga (Mobile) */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
              </button>
            </div>
            
          </div>
        </div>

        {/* 3. MENU DROPDOWN UNTUK HP (Animasi Slide) */}
        <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out border-t border-gray-100 ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
          <div className="px-6 flex flex-col space-y-4 text-center">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-900 hover:text-blue-600">Terbaru</Link>
            <div className="w-12 h-px bg-gray-100 mx-auto"></div>
            <Link to="/kategori/teknologi" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-900 hover:text-blue-600">Teknologi</Link>
            <div className="w-12 h-px bg-gray-100 mx-auto"></div>
            <Link to="/kategori/otomotif" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-gray-900 hover:text-blue-600">Otomotif</Link>
            
            {/* Tombol Subscribe Mobile */}
            <button 
              onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-md w-full"
            >
              Berlangganan Sekarang
            </button>

            {/* Link Info Mobile */}
            <div className="mt-8 flex justify-center space-x-4 text-sm text-gray-500 font-medium pt-6 border-t border-gray-100">
              <Link to="/info/tentang-kami" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
              <span>•</span>
              <Link to="/info/redaksi" onClick={() => setIsMobileMenuOpen(false)}>Redaksi</Link>
              <span>•</span>
              <Link to="/info/pedoman-media-siber" onClick={() => setIsMobileMenuOpen(false)}>Pedoman</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* MODAL PENCARIAN & SUBSCRIBE (Kodenya tetap sama seperti sebelumnya, jangan diubah) */}
      {/* ... (Pastikan bagian ini tidak terhapus saat menimpa kode) ... */}
      
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity" onClick={() => setIsSearchOpen(false)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all">
            <div className="p-6 border-b border-gray-100 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" autoFocus placeholder="Cari berita, topik, atau kategori..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full text-xl md:text-2xl text-gray-900 font-medium placeholder-gray-400 focus:outline-none bg-transparent" />
              <button onClick={() => setIsSearchOpen(false)} className="ml-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto bg-gray-50/50 p-6">
              {searchQuery === '' ? (
                <div className="text-center py-10 text-gray-400"><p>Ketik sesuatu untuk mulai mencari...</p></div>
              ) : filteredNews.length > 0 ? (
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Hasil Pencarian ({filteredNews.length})</p>
                  {filteredNews.map((news) => (
                    <Link to={`/news/${news.id}`} key={news.id} onClick={() => setIsSearchOpen(false)} className="group flex gap-4 bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-all hover:border-blue-100">
                      <img src={news.image} alt={news.title} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                      <div className="flex flex-col justify-center">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{news.category}</span>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 line-clamp-2 transition-colors">{news.title}</h4>
                        <span className="text-sm text-gray-400 mt-1">{news.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p className="text-gray-500 font-medium">Yah, tidak ada berita yang cocok dengan "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform transition-all">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            {!isSubscribed ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Berlangganan Newsletter</h3>
                <p className="text-gray-500 mb-6 text-sm">Dapatkan update berita terbaru seputar Muhammad Fadel langsung ke inbox email Anda.</p>
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <input type="email" required placeholder="Masukkan alamat email Anda..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">Berlangganan Sekarang</button>
                </form>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Terima Kasih!</h3>
                <p className="text-gray-500">Email Anda telah berhasil didaftarkan. Anda bisa kembali membaca berita sekarang.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;