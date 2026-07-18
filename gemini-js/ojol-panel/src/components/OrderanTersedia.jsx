import React from "react";

// 1. Tangkap props fungsi dari Parent di sini
const OrderanTersedia = ({
  daftarOrderan,
  tombolTerimaOrderan,
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

            {/* KOTAK KANAN: Berisi Tarif dan Tombol Terima */}
            <div className="text-right flex flex-col items-end gap-1">
              <span className="font-bold text-emerald-600">
                Rp {item.tarif}
              </span>

              {/* 🫵 TOMBOL TERIMA ORDERAN */}
              <button
                onClick={() =>
                  tombolTerimaOrderan(item.id, item.tarif, item.penumpang)
                }
                className="text-xs bg-emerald-600 text-white px-2 py-1 rounded-lg hover:bg-emerald-700 font-medium transition disabled:bg-slate-200 disabled:text-slate-400"
                disabled={!apakahDriverAktif}
              >
                Terima
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderanTersedia;
