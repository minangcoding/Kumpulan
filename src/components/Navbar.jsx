import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Gambar & Teks */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              {/* Memanggil logo Kumpulan.jpg dari folder public */}
              <img 
                src="/Kumpulan.jpg" 
                alt="Logo Kumpulan News" 
                className="h-10 w-10 object-cover rounded-lg shadow-sm" 
              />
              <span className="text-2xl font-black tracking-tighter text-gray-900">
                KUMPULAN<span className="text-blue-600">NEWS</span>.
              </span>
            </Link>
          </div>

          {/* Menu Navigasi (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">
              Terbaru
            </Link>
            {/* Link diarahkan ke halaman kategori dummy */}
            <Link to="/kategori/teknologi" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">
              Teknologi
            </Link>
            <Link to="/kategori/otomotif" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">
              Otomotif
            </Link>
          </div>

          {/* Tombol Langganan / Aksi */}
          <div className="hidden md:flex items-center">
            <button className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;