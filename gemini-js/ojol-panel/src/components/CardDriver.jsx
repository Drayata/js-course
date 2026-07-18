import React from "react";

// Kita tangkap data dari Parent lewat parameter ini
const CardDriver = ({ 
  apakahDriverAktif, 
  saldo, 
  tombolAktifkanDriver, 
  tombolTarikOrderan, 
  tombolBeliBensin 
}) => {
  return (
    <div className="bg-white w-80 p-6 rounded-2xl shadow-sm text-center">
      {/* 1. ISI NAMA KAMU LANGSUNG DI SINI */}
      <h2 className="text-xl font-bold text-slate-800">Indra Surya</h2>

      {/* 2. KONDISIKAN BADGE STATUS DRIVER */}
      <div
        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mt-2 mb-4 ${
          // Tulis ternary warna di sini menggunakan props 'apakahDriverAktif'
          apakahDriverAktif ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
        }`}
      >
        {/* Tulis ternary teks "Aktif" / "Nonaktif" di sini */}
        Driver {apakahDriverAktif ? "Aktif" : "Nonaktif"}
      </div>

      {/* KOTAK PENDAPATAN */}
      <div className="bg-slate-50 p-4 rounded-xl mb-4">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          Pendapatan Hari Ini
        </p>
        <div className="text-3xl font-bold text-slate-700 mt-1">
          {/* 3. TAMPILKAN SALDO DI SINI */}
          Rp {saldo}
        </div>
      </div>

      {/* TOMBOL AKTIFKAN */}
      <button
        onClick={tombolAktifkanDriver} // Properti klik sudah dipasang
        className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-800 transition mb-2"
      >
        {/* 4. TAMPILKAN TEKS "Nonaktifkan" / "Aktifkan" DI SINI */}
        {apakahDriverAktif ? "Nonaktifkan" : "Aktifkan"} Driver
      </button>

      {/* TOMBOL TARIK ORDERAN */}
      <button
        className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-emerald-700 transition disabled:bg-slate-200 disabled:text-slate-400"
        onClick={tombolTarikOrderan}
        // 5. PASANG LOGIKA DISABLED DI SINI
        disabled={!apakahDriverAktif}
      >
        Tarik Orderan (Rp 20.000)
      </button>

      {/* TOMBOL BELI BENSIN */}
      <button
        onClick={tombolBeliBensin}
        className="w-full text-white rounded-xl py-3 mt-2 bg-red-600 hover:bg-red-700 transition disabled:bg-slate-200 disabled:text-slate-400"
        // 6. PASANG LOGIKA DISABLED DI SINI (INGAT: butuh syarat aktif DAN saldo cukup)
        disabled={!apakahDriverAktif || saldo < 50000}
      >
        Beli Bensin (Rp 50.000)
      </button>
    </div>
  );
};

// Wajib di-export agar bisa di-import oleh App.jsx
export default CardDriver;