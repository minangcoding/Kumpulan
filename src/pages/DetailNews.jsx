import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const DetailNews = () => {
  // 1. Ambil ID dari URL
  const { id } = useParams();
  
  // 2. Cari data berita yang ID-nya cocok
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  // 3. Jika berita tidak ditemukan (misal user asal ketik URL)
  if (!newsItem) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-4xl font-black text-gray-900 mb-4">404 - Berita Tidak Ditemukan</h2>
        <p className="text-gray-500 mb-8">Maaf, artikel yang Anda cari tidak ada atau sudah dihapus.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // 4. Tampilan jika berita ditemukan
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tombol Kembali */}
      <Link to="/" className="text-gray-500 hover:text-blue-600 font-medium mb-8 inline-flex items-center transition-colors">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke Beranda
      </Link>

      {/* Header Artikel */}
      <div className="mb-10 text-center md:text-left">
        <span className="bg-blue-50 text-blue-600 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4">
          {newsItem.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          {newsItem.title}
        </h1>
        <p className="text-gray-500 flex items-center justify-center md:justify-start">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {newsItem.date}
        </p>
      </div>

      {/* Gambar Utama */}
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-auto md:h-[500px] object-cover rounded-3xl mb-12 shadow-sm"
      />

      {/* Isi Konten */}
      <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed pb-12">
        {newsItem.content.split('\n').map((paragraph, index) => {
          // Bersihkan tanda ** supaya teksnya rapi
          const cleanParagraph = paragraph.replace(/\*\*/g, '');
          
          return paragraph.trim() !== '' ? (
            <p key={index} className="mb-6">
              {/* Jadikan lokasi Kumpulan, Bonjol, Pasaman menjadi cetak tebal */}
              {cleanParagraph.includes('[Kumpulan, Bonjol, Pasaman]') ? (
                <span><strong>[Kumpulan, Bonjol, Pasaman]</strong>{cleanParagraph.split(']')[1]}</span>
              ) : (
                cleanParagraph
              )}
            </p>
          ) : (
            <br key={index} />
          );
        })}
      </div>
    </article>
  );
};

export default DetailNews;