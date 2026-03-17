import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const BreakingNews = () => {
  const breakingNews = newsData.slice(0, 14);

  return (
    // TAMBAHKAN KELAS INI: sticky top-20 z-40 (karena navbar tingginya kira-kira 20 atau 5rem)
    <div className="sticky top-[80px] z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-4">
      <div className="bg-blue-600 text-white flex items-center p-1.5 shadow-md rounded-xl overflow-hidden relative border border-blue-500/50">
        
        <div className="flex-shrink-0 font-black tracking-wider bg-blue-800 px-4 py-2 rounded-lg z-10 flex items-center shadow-sm relative">
          <span className="relative flex h-3 w-3 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          BREAKING NEWS
        </div>
        
        <div className="overflow-hidden flex-grow flex items-center h-10 ml-2">
          
          <style>
            {`
              @keyframes ticker {
                0% { transform: translateX(0); } 
                100% { transform: translateX(-100%); }
              }
              .animate-ticker {
                display: inline-block;
                white-space: nowrap;
                padding-left: 100%; 
                animation: ticker 35s linear infinite; 
              }
              .animate-ticker:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          
          <div className="animate-ticker">
            {breakingNews.map((news) => (
              <span key={news.id} className="mx-6 text-sm md:text-base font-medium">
                <span className="mr-3 text-blue-300">◆</span>
                <Link to={`/news/${news.id}`} className="hover:text-blue-200 transition-colors">
                  {news.title}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;