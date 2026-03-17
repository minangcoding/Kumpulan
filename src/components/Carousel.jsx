import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const Carousel = () => {
  // Mengambil 3 berita pertama untuk dijadikan Highlight di Carousel
  const carouselItems = newsData.slice(0, 13);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fitur Autoplay: Geser tiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  // Fungsi tombol navigasi manual
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden group mb-12 shadow-lg">
      
      {/* Kumpulan Gambar & Teks */}
      {carouselItems.map((news, index) => (
        <div
          key={news.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover"
          />
          {/* Efek gradasi gelap agar teks terbaca jelas */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          
          {/* Konten Teks di atas Carousel */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              {news.category}
            </span>
            <Link to={`/news/${news.id}`}>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-4 line-clamp-2 hover:text-blue-400 transition-colors">
                {news.title}
              </h2>
            </Link>
            <Link to={`/news/${news.id}`} className="inline-flex items-center text-white font-medium hover:text-blue-400 transition-colors">
              Baca Selengkapnya
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}

      {/* Tombol Panah Kiri */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>

      {/* Tombol Panah Kanan */}
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      {/* Titik Indikator di Bawah (Dots) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-blue-600' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default Carousel;