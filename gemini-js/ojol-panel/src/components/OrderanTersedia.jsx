import React from "react";

// 1. Tentukan nama props yang dikirim dari Parent di dalam kurung kurawal
const OrderanTersedia = ({ daftarOrderan }) => {
  return (
    <div className="bg-white w-80 p-6 rounded-2xl shadow-sm mt-4">
      <h3 className="text-sm font-bold text-slate-700 mb-3 text-left">
        {/* 2. Tampilkan jumlah total orderan secara dinamis dari props */}
        Orderan Tersedia ({daftarOrderan.length})
      </h3>

      <div className="space-y-2">
        {/* 3. Tulis fungsi .map() kamu di sini untuk membongkar data orderan */}
        {/* Copy-paste saja fungsi .map() yang sudah berhasil kamu buat sebelumnya di sini */}
        {daftarOrderan.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-slate-50 p-3 rounded-xl text-sm"
          >
            <div className="text-left">
              <p className="font-semibold text-slate-700">{item.penumpang}</p>
              <p className="text-xs text-slate-400">{item.jarak}</p>
            </div>
            <span className="font-bold text-emerald-600">Rp {item.tarif}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderanTersedia;
