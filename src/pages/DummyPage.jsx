import { useParams, Link } from 'react-router-dom';

const DummyPage = () => {
  // Mengambil nama kategori dari URL (misal: "teknologi" atau "otomotif")
  const { namaKategori } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <span className="bg-blue-50 text-blue-600 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-6">
        Kategori: {namaKategori}
      </span>
      
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
        Halaman Segera Hadir
      </h1>
      
      <p className="text-gray-500 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
        Mohon maaf, kumpulan berita untuk kategori <strong>{namaKategori}</strong> saat ini masih dalam tahap penyusunan. Nantikan *update* berita menarik lainnya dari kami segera!
      </p>
      
      <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default DummyPage;