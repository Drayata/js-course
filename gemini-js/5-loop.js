const daftarNilai = [80, 55, 90, 40, 75];

for (const i = 0; i < daftarNilai.length; i++) {
  if (daftarNilai[i] >= 70) {
    console.log("Lulus");
  } else {
    console.log("Gagal");
  }
}

for (const nilai of daftarNilai) {
  if (nilai >= 70) {
    console.log("Lulus");
  } else {
    console.log("Gagal");
  }
}
