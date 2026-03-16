import { Link } from 'react-router-dom';

const NewsCard = ({ id, title, category, date, image, content }) => {
  // Potong teks konten jadi 120 huruf saja dan bersihkan tanda bintang (**)
  const snippet = content.replace(/\*\*/g, '').substring(0, 120) + '...';

  return (
    <Link to={`/news/${id}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Bagian Gambar */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      {/* Bagian Konten */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-gray-400 text-sm mb-2">{date}</span>
        
        {/* Judul maksimal 2 baris */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        {/* Ini bagian yang menampilkan cuplikan pendek saja */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {snippet}
        </p>
        
        {/* Tombol "Baca Selengkapnya" */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-800 flex items-center">
            Baca Selengkapnya 
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;