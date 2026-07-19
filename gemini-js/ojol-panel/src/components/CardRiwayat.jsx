import React from "react";

// 1. Tentukan nama props yang dikirim dari Parent di dalam kurung kurawal
const CardRiwayat = ({
  riwayat,
  tombolHapusRiwayat,
  tombolHapusSatuRiwayat,
}) => {
  return (
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
          {riwayat.toReversed().map((item) => (
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
              <button
                onClick={() => tombolHapusSatuRiwayat(item.id)}
                className="font-medium text-white bg-red-600 px-1.5 py-0.5 text-xs rounded-xl hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardRiwayat;
