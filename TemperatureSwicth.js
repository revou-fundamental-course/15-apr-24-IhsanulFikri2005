// Dapatkan tombol-tombol by ID
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const reverseBtn = document.getElementById("reverse-btn");

// Definisikan fungsi konversi suhu
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Definisikan fungsi reset suhu
function resetSuhu() {
  const celciusInput = document.getElementById("celcius-input");
  const fahrenheitInput = document.getElementById("fahrenheit-input");
  const celciusOutput = document.getElementById("celcius-output");
  const fahrenheitOutput = document.getElementById("fahrenheit-output");

  celciusInput.value = "";
  fahrenheitInput.value = "";
  celciusOutput.value = "";
  fahrenheitOutput.value = "";
}

// Definisikan fungsi reverse suhu
function reverseSuhu() {
  const celsiusInput = document.getElementById("celcius-input");
  const fahrenheitInput = document.getElementById("fahrenheit-input");

  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat(fahrenheitInput.value);

  if (!isNaN(celsius)) {
    fahrenheitInput.value = convertCelsiusToFahrenheit(celsius).toFixed(2);
  } else if (!isNaN(fahrenheit)) {
    celsiusInput.value = (fahrenheit - 32) * 5/9;
  }
}

// Tambahkan event listener untuk tombol konversi
convertBtn.addEventListener("click", () => {
  const celsiusInput = document.getElementById("celcius-input");
  const fahrenheitOutput = document.getElementById("fahrenheit-output");

  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    const fahrenheit = convertCelsiusToFahrenheit(celsius);
    fahrenheitOutput.value = fahrenheit.toFixed(2);
  }
});

// Tambahkan event listener untuk tombol reset
resetBtn.addEventListener("click", () => {
  resetSuhu();
});

// Tambahkan event listener untuk tombol reverse
reverseBtn.addEventListener("click", () => {
  reverseSuhu();
});