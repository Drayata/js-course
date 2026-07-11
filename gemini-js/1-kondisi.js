const jarakKm = 5;
const cuaca = "Hujan";
let tarifDasar = jarakKm * 5000;
let biayaTambahan = 0;

// === TULIS LOGIKA IF/ELSE KAMU DI SINI ===

if (cuaca === "Hujan") {
  biayaTambahan = 10000;
}

// =========================================

const totalTarif = tarifDasar + biayaTambahan;
