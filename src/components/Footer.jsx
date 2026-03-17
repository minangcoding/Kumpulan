import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Otomatis mengambil tahun saat ini

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid 4 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/Kumpulan.jpg" alt="Logo Kumpulan News" className="h-10 w-10 object-cover rounded-lg shadow-sm" />
              <span className="text-2xl font-black tracking-tighter text-white">
                KUMPULAN<span className="text-blue-500">NEWS</span>.
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Portal berita independen masa kini yang menyajikan informasi teraktual seputar teknologi, otomotif, pendidikan, dan petualangan. Berpusat di kawasan Kumpulan, Bonjol, Pasaman.
            </p>
            {/* Ikon Sosial Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Kategori Berita */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Kategori Utama</h3>
            <ul className="space-y-4">
              <li><Link to="/kategori/teknologi" className="text-gray-400 hover:text-blue-500 transition-colors">Teknologi & AI</Link></li>
              <li><Link to="/kategori/otomotif" className="text-gray-400 hover:text-blue-500 transition-colors">Otomotif</Link></li>
              <li><Link to="/kategori/olahraga" className="text-gray-400 hover:text-blue-500 transition-colors">Olahraga</Link></li>
              <li><Link to="/kategori/pendidikan" className="text-gray-400 hover:text-blue-500 transition-colors">Pendidikan</Link></li>
              <li><Link to="/kategori/traveling" className="text-gray-400 hover:text-blue-500 transition-colors">Traveling & Petualangan</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Informasi */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Informasi</h3>
            <ul className="space-y-4">
              <li><Link to="/info/tentang-kami" className="text-gray-400 hover:text-blue-500 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/info/redaksi" className="text-gray-400 hover:text-blue-500 transition-colors">Susunan Redaksi</Link></li>
              <li><Link to="/info/pedoman-media-siber" className="text-gray-400 hover:text-blue-500 transition-colors">Pedoman Media Siber</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Bantuan & FAQ</a></li>
            </ul>
          </div>

          {/* Kolom 4: Berlangganan (Mini) */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Berlangganan</h3>
            <p className="text-gray-400 text-sm mb-4">Jangan lewatkan berita terbaru. Berlangganan newsletter kami sekarang juga.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="bg-gray-800 text-white px-4 py-2.5 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-r-lg transition-colors font-medium">
                Kirim
              </button>
            </div>
          </div>

        </div>

        {/* Garis Bawah & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} <strong className="text-gray-400">Kumpulan News</strong> by Muhammad Fadel. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm font-medium">
            Developed by RAA
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;