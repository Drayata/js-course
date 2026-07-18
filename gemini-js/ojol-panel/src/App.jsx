import React, { useState } from "react";
import CardDriver from "./components/CardDriver";
import OrderanTersedia from "./components/OrderanTersedia";
import CardRiwayat from "./components/CardRiwayat";

const App = () => {
  const [saldo, setSaldo] = useState(0);
  const [apakahDriverAktif, setApakahDriverAktif] = useState(false);
  const [riwayat, setRiwayat] = useState([]);

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

  const tombolTerimaOrderan = (idOrderan, tarifOrderan, namaPenumpang) => {
    // 1. Tambah Saldo sesuai tarif orderan
    setSaldo(saldo + tarifOrderan);

    // 2. Tambah ke Riwayat Transaksi
    setRiwayat([
      ...riwayat,
      {
        id: Date.now(),
        tipe: `Orderan (${namaPenumpang})`,
        nominal: tarifOrderan,
        apakahMasuk: true,
      },
    ]);

    // 3. Hapus orderan yang diterima dari daftar menggunakan .filter()
    const sisaOrderan = daftarOrderan.filter((item) => item.id !== idOrderan);
    setDaftarOrderan(sisaOrderan);
  };

  const [daftarOrderan, setDaftarOrderan] = useState([
    { id: 101, penumpang: "Budi Santoso", jarak: "3.5 km", tarif: 15000 },
    { id: 102, penumpang: "Siti Rahma", jarak: "5.2 km", tarif: 22000 },
    { id: 103, penumpang: "Anto Wijaya", jarak: "1.2 km", tarif: 10000 },
  ]);

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
        tombolTerimaOrderan={tombolTerimaOrderan}
        apakahDriverAktif={apakahDriverAktif}
      />

      <CardRiwayat riwayat={riwayat} tombolHapusRiwayat={tombolHapusRiwayat} />
    </div>
  );
};

export default App;
