import { newsData } from '../data/newsData';
import NewsCard from '../components/NewsCard';
import Carousel from '../components/Carousel';
import BreakingNews from '../components/BreakingNews';
import JadwalSholat from '../components/JadwalSholat'; // 1. Import Widget Jadwal Sholat

const Home = () => {
  return (
    <>
      <BreakingNews />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        <Carousel />

        {/* 2. LAYOUT SIDEBAR (Dibagi 2 kolom) */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          
          {/* KOLOM KIRI: Daftar Berita (Lebar 70% di layar besar) */}
          <div className="lg:w-2/3">
            <div className="border-b border-gray-200 pb-4 mb-8 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Berita Terkini</h2>
                <p className="text-gray-500 mt-2 text-base">Informasi terbaru dan paling update untuk Anda hari ini.</p>
              </div>
            </div>
            
            {/* Grid Berita (Karena ruangnya mengecil, kita jadikan 2 kolom saja) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsData.map((news) => (
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
          </div>

          {/* KOLOM KANAN: Sidebar Widget (Lebar 30% di layar besar) */}
          <div className="lg:w-1/3">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Info Lokal</h2>
            </div>
            
            {/* Tampilkan Widget Jadwal Sholat di sini */}
            <JadwalSholat />
            
            {/* Kamu bisa menambahkan banner iklan atau widget lain di bawah ini nantinya */}
            <div className="mt-8 bg-gray-100 rounded-3xl h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
              <p className="text-gray-400 font-medium">Ruang Iklan</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;