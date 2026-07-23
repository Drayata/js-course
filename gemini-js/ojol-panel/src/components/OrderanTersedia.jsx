import React from "react";

const OrderanTersedia = ({
  daftarOrderan,
  tombolTerimaOrderan,
  tombolTolakOrderan,
  apakahDriverAktif,
}) => {
  return (
    <div className="bg-white w-80 p-6 rounded-2xl shadow-sm mt-4">
      <h3 className="text-sm font-bold text-slate-700 mb-3 text-left">
        Orderan Tersedia ({daftarOrderan.length})
      </h3>

      <div className="space-y-2">
        {daftarOrderan.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-slate-50 p-3 rounded-xl text-sm"
          >
            <div className="text-left">
              <p className="font-semibold text-slate-700">{item.penumpang}</p>
              <p className="text-xs text-slate-400">{item.jarak}</p>
            </div>

            {/* KOTAK KANAN: Berisi Tarif & Tempat Tombol Terima */}
            <div className="text-right flex flex-col items-end gap-1">
              <span className="font-bold text-emerald-600">
                Rp {item.tarif}
              </span>

              {/* 🫵 TUGAS KAMU: PASANG TOMBOL "TERIMA" DI SINI */}
              <button
                onClick={() =>
                  tombolTerimaOrderan(item.id, item.penumpang, item.tarif)
                }
                className="text-xs py-1 px-1.5 rounded-xl text-white font-medium bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400"
                disabled={!apakahDriverAktif}
              >
                Terima
              </button>
              <button
                onClick={() => tombolTolakOrderan(item.id)}
                className="text-xs py-1 px-1.5 rounded-xl text-white font-medium bg-red-600 hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400"
                disabled={!apakahDriverAktif}
              >
                Tolak
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderanTersedia;
