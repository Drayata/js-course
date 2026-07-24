import React, { useState, useEffect } from "react";
import CardDriver from "./components/CardDriver";
import OrderanTersedia from "./components/OrderanTersedia";
import CardRiwayat from "./components/CardRiwayat";

const stokPenumpang = [
  { nama: "Rizky Pratama", jarak: "2.1 km", tarif: 12000 },
  { nama: "Dewi Lestari", jarak: "4.8 km", tarif: 20000 },
  { nama: "Fajar Nugraha", jarak: "1.5 km", tarif: 10000 },
  { nama: "Eka Putri", jarak: "6.0 km", tarif: 25000 },
];

const App = () => {
  // 1. SILAKAN AMBIL KODE useState SALDO & RIWAYAT KAMU YANG LAMA
  // 2. MODIFIKASI initial value-nya (angka 0 dan [] nya) agar mengambil dari localStorage jika ada.
  // Contoh Hint untuk Saldo: useState(Number(localStorage.getItem("saldo")) || 0);
  // Silakan racik sendiri untuk state riwayat!

  const [saldo, setSaldo] = useState(
    Number(localStorage.getItem("saldo")) || 0,
  );
  const [riwayat, setRiwayat] = useState(
    JSON.parse(localStorage.getItem("riwayat")) || [],
  );
  const [apakahDriverAktif, setApakahDriverAktif] = useState(false);
  const [daftarOrderan, setDaftarOrderan] = useState([
    { id: 101, penumpang: "Budi Santoso", jarak: "3.5 km", tarif: 15000 },
    { id: 102, penumpang: "Siti Rahma", jarak: "5.2 km", tarif: 22000 },
    { id: 103, penumpang: "Anto Wijaya", jarak: "1.2 km", tarif: 10000 },
  ]);

  // ========================================================
  // 3. TULIS LOGIKA USEEFFECT KAMU DI SINI
  // Buat 2 fungsi useEffect terpisah:
  // - useEffect pertama: Mengintip state 'saldo', fungsinya menyimpan saldo ke localStorage.
  // - useEffect kedua: Mengintip state 'riwayat', fungsinya menyimpan riwayat ke localStorage.

  // ... Ketik kode useEffect 1 (untuk Saldo) di sini ...
  useEffect(() => {
    localStorage.setItem("saldo", saldo);
  }, [saldo]);

  // ... Ketik kode useEffect 2 (untuk Riwayat) di sini ...
  useEffect(() => {
    localStorage.setItem("riwayat", JSON.stringify(riwayat));
  }, [riwayat]);

  useEffect(() => {
    if (!apakahDriverAktif) {
      return;
    }

    const timer = setInterval(() => {
      const acak =
        stokPenumpang[Math.floor(Math.random() * stokPenumpang.length)];

      const orderanBaru = {
        id: Date.now(),
        penumpang: acak.nama,
        jarak: acak.jarak,
        tarif: acak.tarif,
      };

      setDaftarOrderan((orderanLama) => {
        if (orderanLama.length >= 5) {
          return orderanLama;
        } else {
          return [...orderanLama, orderanBaru];
        }
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [apakahDriverAktif]);

  // ========================================================

  const tombolTarikOrderan = () => {
    setSaldo(saldo + 20000);

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

  const tombolTerimaOrderan = (id, penumpang, tarif) => {
    setSaldo(saldo + tarif);

    const transaksiBaru = {
      id: Date.now(),
      tipe: `Orderan (${penumpang})`,
      nominal: tarif,
      apakahMasuk: true,
    };
    setRiwayat([...riwayat, transaksiBaru]);
    const sisaOrderan = daftarOrderan.filter((item) => item.id !== id);
    setDaftarOrderan(sisaOrderan);
  };

  const tombolHapusSatuRiwayat = (id) => {
    const sisaRiwayat = riwayat.filter((item) => item.id !== id);
    setRiwayat(sisaRiwayat);
  };

  const tombolTolakOrderan = (id) => {
    const sisaOrderan = daftarOrderan.filter((item) => item.id !== id);
    setDaftarOrderan(sisaOrderan);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center py-10">
      <CardDriver
        apakahDriverAktif={apakahDriverAktif}
        saldo={saldo}
        tombolAktifkanDriver={tombolAktifkanDriver}
        tombolTarikOrderan={tombolTarikOrderan}
        tombolBeliBensin={tombolBeliBensin}
      />

      <OrderanTersedia
        daftarOrderan={daftarOrderan}
        apakahDriverAktif={apakahDriverAktif}
        tombolTerimaOrderan={tombolTerimaOrderan}
        tombolTolakOrderan={tombolTolakOrderan}
      />

      <CardRiwayat
        riwayat={riwayat}
        tombolHapusRiwayat={tombolHapusRiwayat}
        tombolHapusSatuRiwayat={tombolHapusSatuRiwayat}
      />
    </div>
  );
};

export default App;
