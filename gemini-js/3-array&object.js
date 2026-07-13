const riwayatPerjalanan = [
  { tujuan: "Kantor Sudirman", tarif: 25000 },
  { tujuan: "Mall Cilandak", tarif: 45000 },
  { tujuan: "Stasiun Gambir", tarif: 15000 },
];

//trip itu bebas
const perjalananPremium = riwayatPerjalanan.filter(
  (trip) => trip.tujuan === "Stasiun Gambir",
);
