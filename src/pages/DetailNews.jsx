import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const DetailNews = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  // Ambil 3 berita acak (selain berita yang sedang dibaca) untuk bagian "Baca Juga"
  const relatedNews = newsData
    .filter((item) => item.id !== parseInt(id))
    .slice(0, 3);

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

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      
      {/* Tombol Kembali / Breadcrumb */}
      <div className="flex items-center text-sm font-medium text-gray-500 mb-8">
        <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
        <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        <Link to={`/kategori/${newsItem.category.toLowerCase()}`} className="hover:text-blue-600 transition-colors uppercase">{newsItem.category}</Link>
      </div>

      {/* Header Artikel */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          {newsItem.title}
        </h1>
      </div>

      {/* 1. INFO PENULIS & TOMBOL SHARE (SUDAH AKTIF) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-y border-gray-100 mb-10 gap-6">
        
        {/* Profil Penulis */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Foto profil kecil (menggunakan salah satu foto Fadel) */}
            <img src="/Fadel Wisuda.jpg" alt="Author" className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <p className="font-bold text-gray-900 leading-none mb-1">Muhammad Fadel</p>
            <p className="text-sm text-gray-500">{newsItem.date} • Jurnalis Independen</p>
          </div>
          <button className="hidden sm:block ml-4 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors">
            + Ikuti
          </button>
        </div>

        {/* Tombol Share */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-400 mr-2">Bagikan:</span>
          
          {/* TOMBOL WHATSAPP (SUDAH AKTIF) */}
          <a 
            href={`https://wa.me/?text=${encodeURIComponent(newsItem.title + " - Baca selengkapnya di KUMPULAN NEWS: " + window.location.href)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
            title="Bagikan ke WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>

          {/* TOMBOL X (TWITTER) (SUDAH AKTIF) */}
          <a 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(newsItem.title)}&url=${encodeURIComponent(window.location.href)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
            title="Bagikan ke X (Twitter)"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>

          {/* TOMBOL COPY LINK (SUDAH AKTIF) */}
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link berhasil disalin!");
            }}
            className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" 
            title="Salin Tautan"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          </button>
        </div>
      </div>

      {/* Gambar Utama */}
      <img
        src={newsItem.image}
        alt={newsItem.title}
        className="w-full h-auto md:h-[450px] object-cover rounded-3xl mb-12 shadow-md"
      />

      {/* Isi Konten */}
      <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed pb-16 border-b border-gray-200">
        {newsItem.content.split('\n').map((paragraph, index) => {
          const cleanParagraph = paragraph.replace(/\*\*/g, '');
          return paragraph.trim() !== '' ? (
            <p key={index} className="mb-6">
              {cleanParagraph.includes('[Kumpulan, Bonjol, Pasaman]') ? (
                <span><strong className="text-gray-900">[Kumpulan, Bonjol, Pasaman]</strong>{cleanParagraph.split(']')[1]}</span>
              ) : (
                cleanParagraph
              )}
            </p>
          ) : (
            <br key={index} />
          );
        })}
      </div>

      {/* 2. BAGIAN "BACA JUGA" */}
      <div className="mt-16">
        <div className="flex items-center mb-8">
          <h3 className="text-2xl font-black text-gray-900 tracking-tight">Baca Juga</h3>
          <div className="flex-grow h-px bg-gray-200 ml-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedNews.map((news) => (
            <Link to={`/news/${news.id}`} key={news.id} className="group block">
              <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {news.category}
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 line-clamp-2 leading-snug transition-colors">
                {news.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
      
    </article>
  );
};

export default DetailNews;