import React, { useState } from "react";

const App = () => {
  const [saldo, setSaldo] = useState(0);
  const [apakahDriverAktif, setApakahDriverAktif] = useState(false);

  // 1. Deklarasi State Array untuk menampung riwayat transaksi
  const [riwayat, setRiwayat] = useState([]);

  const tombolTarikOrderan = () => {
    setSaldo(saldo + 20000);

    // 2. Tambah riwayat orderan (Gunakan Date.now() sebagai ID unik)
    const transaksiBaru = {
      id: Date.now(),
      tipe: "Orderan",
      nominal: 20000,
      apakahMasuk: true,
    };
    setRiwayat([...riwayat, transaksiBaru]);
  };

  const tombolBeliBensin = () => {
    setSaldo(saldo - 50000);

    // 3. Tambah riwayat beli bensin
    const transaksiBaru = {
      id: Date.now(),
      tipe: "Beli Bensin",
      nominal: 50000,
      apakahMasuk: false,
    };
    setRiwayat([...riwayat, transaksiBaru]);
  };

  const tombolAktifkanDriver = () => {
    setApakahDriverAktif(!apakahDriverAktif);
  };

  const tombolHapusRiwayat = () => {
    setRiwayat([]);
  };

  const daftarOrderan = [
    { id: 101, penumpang: "Budi Santoso", jarak: "3.5 km", tarif: 15000 },
    { id: 102, penumpang: "Siti Rahma", jarak: "5.2 km", tarif: 22000 },
    { id: 103, penumpang: "Anto Wijaya", jarak: "1.2 km", tarif: 10000 },
  ];

  return (
    // Wrapper luar dibikin flex-col supaya riwayat bisa ditaruh di bawah card
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center py-10">
      {/* CARD UTAMA */}
      <div className="bg-white w-80 p-6 rounded-2xl shadow-sm text-center">
        <h2 className="text-xl font-bold text-slate-800">Indra Surya</h2>

        <div
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mt-2 mb-4 ${
            apakahDriverAktif
              ? "bg-emerald-100 text-emerald-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          Driver {apakahDriverAktif ? "Aktif" : "Nonaktif"}
        </div>

        <div className="bg-slate-50 p-4 rounded-xl mb-4">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Pendapatan Hari Ini
          </p>
          <div className="text-3xl font-bold text-slate-700 mt-1">
            Rp {saldo}
          </div>
        </div>

        <button
          onClick={tombolAktifkanDriver}
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-800 transition mb-2"
        >
          {apakahDriverAktif ? "Nonaktifkan" : "Aktifkan"} Driver
        </button>

        <button
          className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-emerald-700 transition disabled:bg-slate-200 disabled:text-slate-400"
          disabled={!apakahDriverAktif}
          onClick={tombolTarikOrderan}
        >
          Tarik Orderan (Rp 20.000)
        </button>

        <button
          onClick={tombolBeliBensin}
          className="w-full text-white rounded-xl py-3 mt-2 bg-red-600 hover:bg-red-700 transition disabled:bg-slate-200 disabled:text-slate-400"
          disabled={!apakahDriverAktif || saldo < 50000}
        >
          Beli Bensin (Rp 50.000)
        </button>
      </div>

      {/* 🚗 CARD ORDERAN MASUK */}
      <div className="bg-white w-80 p-6 rounded-2xl shadow-sm mt-4">
        <h3 className="text-sm font-bold text-slate-700 mb-3 text-left">
          Orderan Tersedia ({daftarOrderan.length})
        </h3>

        <div className="space-y-2">
          {/* ======================================================== */}
          {/* TULIS FUNGSI .MAP() KAMU DI SINI                          */}
          {daftarOrderan.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-slate-50 p-3 rounded-xl text-sm"
            >
              <div className="text-left">
                <p className="font-semibold text-slate-700">{item.penumpang}</p>
                <p className="text-xs text-slate-400">{item.jarak}</p>
              </div>
              <span className="font-bold text-emerald-600">
                Rp {item.tarif}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 📜 CARD RIWAYAT TRANSAKSI (Muncul otomatis di bawah card utama) */}
      <div className="relative bg-white w-80 p-6 rounded-2xl shadow-sm mt-4">
        <h3 className="text-sm font-bold text-slate-700 mb-3 text-left">
          Riwayat Transaksi
        </h3>
        <button
          onClick={tombolHapusRiwayat}
          className="absolute right-5 top-4.5 text-white font-semibold text-sm bg-red-600 p-1.5 rounded-xl hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400 "
          disabled={riwayat.length === 0}
        >
          Hapus Riwayat
        </button>

        {/* Jalankan pengkondisian: jika riwayat kosong, tampilkan teks kosong */}
        {riwayat.length === 0 ? (
          <p className="text-xs text-slate-400 text-left italic">
            Belum ada transaksi hari ini.
          </p>
        ) : (
          <div className="space-y-2">
            {/* 🔄 Perulangan untuk menggambar item array menggunakan .map() */}
            {riwayat.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-slate-50 p-3 rounded-xl text-sm"
              >
                <span className="font-medium text-slate-700">{item.tipe}</span>
                <span
                  className={`font-bold ${item.apakahMasuk ? "text-emerald-600" : "text-red-600"}`}
                >
                  {item.apakahMasuk ? "+" : "-"} Rp {item.nominal}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
