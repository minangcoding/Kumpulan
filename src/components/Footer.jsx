import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white inline-block mb-4">
              KUMPULAN<span className="text-blue-500">NEWS</span>.
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Portal berita statis modern yang menyajikan informasi paling update, tajam, dan terpercaya dengan antarmuka yang elegan serta super cepat.
            </p>
          </div>

          {/* Kolom 2: Kategori */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-100 text-sm">Kategori</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium">Teknologi</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium">Otomotif</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium">Desain</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Sosial Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-100 text-sm">Terhubung</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">X / Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bagian Bawah: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kumpulan News. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
