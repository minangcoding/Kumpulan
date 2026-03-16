import { newsData } from '../data/newsData';
import NewsCard from '../components/NewsCard';

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="border-b border-gray-200 pb-4 mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Berita Terkini</h1>
          <p className="text-gray-500 mt-2 text-lg">Informasi terbaru dan paling update untuk Anda hari ini.</p>
        </div>
      </div>
      
      {/* Grid List Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </main>
  );
};

export default Home;