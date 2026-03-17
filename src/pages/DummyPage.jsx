import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import NewsCard from '../components/NewsCard';

const DummyPage = () => {
  const { namaKategori } = useParams();
  
  // Memfilter data berita yang kategorinya sama persis dengan nama URL
  const filteredNews = newsData.filter(
    (news) => news.category.toLowerCase() === namaKategori.toLowerCase()
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[60vh]">
      
      {/* Header Halaman Kategori */}
      <div className="border-b border-gray-200 pb-4 mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight capitalize">
          Berita {namaKategori}
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Kumpulan berita dan *update* terbaru seputar {namaKategori}.
        </p>
      </div>

      {/* Tampilkan Card jika datanya ada, tampilkan pesan jika kosong */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <NewsCard 
              key={news.id}
              id={news.id}
              title={news.title}
              category={news.category}
              date={news.date}
              image={news.image}
              content={news.content}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"></path>
          </svg>
          <p className="text-gray-500 text-xl mb-6 font-medium">Belum ada berita untuk kategori {namaKategori}.</p>
          <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            Kembali ke Beranda Utama
          </Link>
        </div>
      )}
      
    </main>
  );
};

export default DummyPage;