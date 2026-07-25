import React, { useState, useEffect } from "react";

const CryptoTracker = () => {
  // 1. STATE UTAMA
  const [dataHarga, setDataHarga] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jumlahBtc, setJumlahBtc] = useState(1); // Untuk kalkulator

  // 2. FUNGSI AMBIL DATA API (Dipisah biar bisa dipanggil ulang)
  const ambilDataHarga = async () => {
    try {
      setIsLoading(true);

      // Request ke server Coingecko
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=idr",
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data dari server");
      }

      const hasilJSON = await response.json();
      setDataHarga(hasilJSON);
      setIsError(false);
    } catch (error) {
      console.error("Error Fetching Data:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // 3. USEEFFECT UNTUK FETCH AWAL & AUTO REFRESH (30 Detik)
  useEffect(() => {
    // Jalankan pertama kali
    ambilDataHarga();

    // Auto-refresh tiap 30 detik
    const timer = setInterval(() => {
      ambilDataHarga();
    }, 30000);

    // Cleanup function biar timer gak tumpuk
    return () => clearInterval(timer);
  }, []);

  // 4. KONDISI RENDER EARLY RETURN
  if (isLoading && !dataHarga) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
        <p className="animate-pulse text-lg font-semibold text-emerald-400">
          ⏳ Mengambil data pasar terbaru...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-slate-900 text-red-400 flex flex-col justify-center items-center gap-4">
        <p>❌ Gagal terhubung ke server. Cek koneksi internetmu!</p>
        <button
          onClick={ambilDataHarga}
          className="bg-slate-800 text-white px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-700"
        >
          Coba Lagi 🔄
        </button>
      </div>
    );
  }

  // Hitung total rupiah berdasarkan input
  const hargaBtcRupiah = dataHarga?.bitcoin?.idr || 0;
  const totalEstimasi = jumlahBtc * hargaBtcRupiah;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 w-full max-w-md shadow-xl">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-emerald-400">
            📈 Live Market Tracker
          </h1>
          <button
            onClick={ambilDataHarga}
            disabled={isLoading}
            className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg border border-slate-600 disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Refresh 🔄"}
          </button>
        </div>

        {/* DAFTAR HARGA KOIN */}
        <div className="space-y-3 mb-6">
          <div className="bg-slate-900/60 p-3.5 rounded-xl flex justify-between items-center">
            <span className="font-semibold text-amber-400">Bitcoin (BTC)</span>
            <span className="font-bold">
              Rp {dataHarga?.bitcoin?.idr?.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="bg-slate-900/60 p-3.5 rounded-xl flex justify-between items-center">
            <span className="font-semibold text-indigo-400">
              Ethereum (ETH)
            </span>
            <span className="font-bold">
              Rp {dataHarga?.ethereum?.idr?.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="bg-slate-900/60 p-3.5 rounded-xl flex justify-between items-center">
            <span className="font-semibold text-purple-400">Solana (SOL)</span>
            <span className="font-bold">
              Rp {dataHarga?.solana?.idr?.toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        {/* KALKULATOR KONVERSI MINI */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Kalkulator Konversi BTC
          </h2>

          <div className="flex gap-2 mb-3">
            <input
              type="number"
              value={jumlahBtc}
              onChange={(e) => setJumlahBtc(Number(e.target.value))}
              className="w-24 bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-emerald-500"
              min="0"
              step="0.1"
            />
            <div className="flex-1 bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm font-semibold flex items-center justify-end">
              BTC
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">Estimasi Nilai IDR:</p>
            <p className="text-lg font-bold text-emerald-400">
              Rp {totalEstimasi.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTracker;
