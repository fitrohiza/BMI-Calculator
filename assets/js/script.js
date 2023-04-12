function hitungBMI() {
  const beratInput = document.getElementById("berat");
  const tinggiInput = document.getElementById("tinggi");
  const berat = parseFloat(beratInput.value);
  const tinggi = parseFloat(tinggiInput.value) / 100;
  const hasil = document.getElementById("hasil");

  if (isNaN(berat) || isNaN(tinggi)) {
    hasil.textContent = "Periksa input sekali lagi";
  } else if (berat <= 0 || tinggi <= 0) {
    hasil.textContent = "Input tidak boleh negatif atau nol";
  }else {
    const bmi = berat / (tinggi * tinggi);
    hasil.textContent = `BMI Anda adalah ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
      hasil.textContent += " Berat badan anda kurang";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      hasil.textContent += " Berat badan anda normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      hasil.textContent += " Berat badan anda berlebih";
    } else if (bmi >= 30 && bmi <= 34.9) {
      hasil.textContent += " Berat badan anda tingkat 1";
    } else if (bmi >= 35 && bmi <= 39.9) {
      hasil.textContent += " Berat badan anda tingkat 2";
    } else {
      hasil.textContent += " Berat badan anda tingkat 3";
    }
  }
}

