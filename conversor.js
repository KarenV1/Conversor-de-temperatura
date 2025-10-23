document.getElementById("convertirBtn").addEventListener("click", function() {
  let input = document.getElementById("tempInput").value;
  let mensajeError = document.getElementById("mensajeError");
  let resultadoKelvin = document.getElementById("resultadoKelvin");
  let resultadoFahrenheit = document.getElementById("resultadoFahrenheit");

  // Limpiar mensajes previos
  mensajeError.textContent = "";
  resultadoKelvin.textContent = "";
  resultadoFahrenheit.textContent = "";

  // Validar que el valor sea numérico
  let temperaturaC = parseFloat(input);
  if (isNaN(temperaturaC)) {
    mensajeError.textContent = "Error: Ingresa un valor numérico válido.";
    console.error("Error: El valor ingresado no es numérico.");
    return;
  }

  // Cálculos
  let kelvin = temperaturaC + 273.15;
  let fahrenheit = (temperaturaC * 9/5) + 32;

  // Mostrar resultados en consola
  console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
  console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(1)}`);

  // Mostrar resultados en el DOM
  resultadoKelvin.textContent = `Grados Kelvin: ${kelvin.toFixed(2)}`;
  resultadoFahrenheit.textContent = `Grados Fahrenheit: ${fahrenheit.toFixed(1)}`;
});

