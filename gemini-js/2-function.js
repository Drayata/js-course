const hitungDiskon = (totalTarif, kodePromo) => {
  let potongan = 0;
  if (kodePromo === "HEMATAJA") {
    potongan = 5000;
  } else if (kodePromo === "PROMOAKHIRTAHUN") {
    potongan = 10000;
  }
  return totalTarif - potongan;
};
