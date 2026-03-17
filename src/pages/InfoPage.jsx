import { useParams, Link } from 'react-router-dom';

const InfoPage = () => {
  const { slug } = useParams();

  // Data konten untuk masing-masing halaman statis
  const pageData = {
    'tentang-kami': {
      title: 'Tentang Kami',
      content: `**KUMPULAN NEWS** adalah portal berita independen masa kini yang didirikan untuk menjembatani informasi lokal dan nasional. Berpusat di kawasan Kumpulan, Bonjol, Kabupaten Pasaman, kami hadir dengan visi menyajikan berita yang akurat, berimbang, dan menginspirasi.

Berawal dari dedikasi seorang pemuda daerah, Muhammad Fadel, S.Pd, Kumpulan News tidak hanya berfokus pada kejadian sehari-hari, tetapi juga menyoroti pencapaian di bidang Olahraga, Pendidikan, Teknologi, Otomotif, hingga eksplorasi keindahan alam lewat rubrik Traveling dan Petualangan.

Kami percaya bahwa setiap daerah memiliki cerita hebat yang layak didengar dunia. Kumpulan News hadir sebagai wadah inovatif yang terus beradaptasi dengan perkembangan teknologi web modern, memastikan kenyamanan membaca Anda di platform apa pun.`
    },
    'redaksi': {
      title: 'Susunan Redaksi',
      content: `**Jajaran Redaksi Kumpulan News**

* **Pemimpin Umum / Pemimpin Redaksi:** Muhammad Fadel, S.Pd
* **Dewan Penasihat:** Tim Kumpulan FC & Akademisi Universitas PGRI Padang
* **IT & Web Development:** Tim Intek Future AI
* **Desain & Infografis Taktis:** Studio Fadel Visuals

**Alamat Redaksi:**
Jl. Raya Kumpulan - Bonjol, Kabupaten Pasaman, Sumatera Barat.

**Kontak Talian:**
Email: redaksi@kumpulannews.com
Telepon: (0753) 123456 (Hunting)

*Bagi masyarakat yang memiliki informasi, artikel, maupun opini yang ingin dimuat, silakan kirimkan naskah ke email redaksi kami dengan melampirkan identitas yang jelas.*`
    },
    'pedoman-media-siber': {
      title: 'Pedoman Pemberitaan Media Siber',
      content: `Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi Pancasila, Undang-Undang Dasar 1945, serta Deklarasi Universal Hak Asasi Manusia PBB.

**Kumpulan News** tunduk pada kode etik jurnalistik dan Pedoman Pemberitaan Media Siber yang ditetapkan oleh Dewan Pers Indonesia. 

1.  **Verifikasi dan Keberimbangan:** Pada prinsipnya setiap berita harus melalui verifikasi. Berita yang merugikan pihak lain memerlukan verifikasi pada berita yang sama demi asas keberimbangan.
2.  **Isi Buatan Pengguna (User Generated Content):** Kumpulan News mencantumkan syarat dan ketentuan mengenai Isi Buatan Pengguna yang tidak bertentangan dengan Undang-Undang.
3.  **Ralat, Koreksi, dan Hak Jawab:** Ralat, koreksi, dan hak jawab merujuk pada Undang-Undang Pers, Kode Etik Jurnalistik, dan Pedoman Hak Jawab yang ditetapkan Dewan Pers.
4.  **Perlindungan Privasi:** Kami sangat menghargai privasi dan data pribadi narasumber, terutama yang berkaitan dengan anak di bawah umur atau korban tindak susila.`
    }
  };

  // Mengambil data berdasarkan URL yang sedang dibuka
  const data = pageData[slug];

  // Jika URL tidak valid (misal user ngetik asal)
  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-[60vh]">
        <h2 className="text-4xl font-black text-gray-900 mb-4">404 - Halaman Tidak Ditemukan</h2>
        <Link to="/" className="text-blue-600 font-medium">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-[70vh]">
      
      {/* Breadcrumb */}
      <div className="flex items-center text-sm font-medium text-gray-500 mb-8">
        <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
        <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        <span className="text-gray-900">{data.title}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 tracking-tight">
        {data.title}
      </h1>

      {/* Konten Halaman */}
      <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        {data.content.split('\n').map((paragraph, index) => {
          // Sistem sederhana untuk membaca bold (**) dan list (*)
          if (paragraph.startsWith('* ')) {
            return <li key={index} className="ml-6 mb-2">{paragraph.substring(2)}</li>;
          }
          const cleanParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return paragraph.trim() !== '' ? (
            <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: cleanParagraph }} />
          ) : (
            <br key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default InfoPage;