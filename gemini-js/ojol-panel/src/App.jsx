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

  const daftarOrderan = [
    { id: 101, penumpang: "Budi Santoso", jarak: "3.5 km", tarif: 15000 },
    { id: 102, penumpang: "Siti Rahma", jarak: "5.2 km", tarif: 22000 },
    { id: 103, penumpang: "Anto Wijaya", jarak: "1.2 km", tarif: 10000 },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center py-10">
      <CardDriver
        apakahDriverAktif={apakahDriverAktif}
        saldo={saldo}
        tombolAktifkanDriver={tombolAktifkanDriver}
        tombolTarikOrderan={tombolTarikOrderan}
        tombolBeliBensin={tombolBeliBensin}
      />

      <OrderanTersedia daftarOrderan={daftarOrderan} />

      <CardRiwayat riwayat={riwayat} tombolHapusRiwayat={tombolHapusRiwayat} />
    </div>
  );
};

export default App;
