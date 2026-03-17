import { useState, useEffect } from 'react';

const JadwalSholat = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Efek untuk jam real-time (update setiap 1 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Jam, Menit, Detik
  const jam = currentTime.getHours().toString().padStart(2, '0');
  const menit = currentTime.getMinutes().toString().padStart(2, '0');
  const detik = currentTime.getSeconds().toString().padStart(2, '0');

  // Format Tanggal
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const tanggalHariIni = currentTime.toLocaleDateString('id-ID', options);

  // Data Statis Waktu Sholat Pasaman (Sumatera Barat)
  const jadwalPasaman = [
    { nama: 'Imsak', waktu: '04:54' },
    { nama: 'Subuh', waktu: '05:04' },
    { nama: 'Dzuhur', waktu: '12:26' },
    { nama: 'Ashar', waktu: '15:32' },
    { nama: 'Maghrib', waktu: '18:29' },
    { nama: 'Isya', waktu: '19:38' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-[140px]">
      {/* Header Widget */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white text-center relative overflow-hidden">
        {/* Efek ornamen masjid transparan (opsional) */}
        <div className="absolute opacity-10 right-0 top-0 w-24 h-24 bg-white rounded-full -mr-10 -mt-10"></div>
        
        <h3 className="text-xl font-black tracking-wide mb-1 relative z-10">Jadwal Sholat</h3>
        <p className="text-blue-100 text-sm font-medium relative z-10">Kab. Pasaman & Sekitarnya</p>
        
        {/* Jam Real-time */}
        <div className="text-4xl font-black mt-4 mb-2 tracking-widest relative z-10">
          {jam}:{menit}<span className="text-lg opacity-80 animate-pulse">:{detik}</span>
        </div>
        <p className="text-sm text-blue-100 relative z-10">{tanggalHariIni}</p>
      </div>

      {/* List Waktu Sholat */}
      <div className="p-4">
        <ul className="space-y-2">
          {jadwalPasaman.map((jadwal, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
            >
              <span className="font-semibold text-gray-700">{jadwal.nama}</span>
              <span className="font-bold text-blue-600">{jadwal.waktu} WIB</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer Widget */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500 font-medium">Sumber: Kementerian Agama RI</p>
      </div>
    </div>
  );
};

export default JadwalSholat;