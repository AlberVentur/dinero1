let ahorros = JSON.parse(localStorage.getItem('ahorros')) || {};

function guardarAhorro() {
  const selectedDay = document.getElementById('daySelect').value;
  const amount = parseInt(document.getElementById('amount').value);
  if (!ahorros[selectedDay]) {
    ahorros[selectedDay] = 0;
  }
  ahorros[selectedDay] += amount;
  actualizarLocalStorage();
  document.getElementById('amount').value = '';
}

function verTotal() {
  mostrarAhorros();
}

function eliminarTodo() {
  ahorros = {};
  actualizarLocalStorage();
  mostrarAhorros();
}

function actualizarLocalStorage() {
  localStorage.setItem('ahorros', JSON.stringify(ahorros));
}

function mostrarAhorros() {
  const ahorroList = document.getElementById('ahorroList');
  ahorroList.innerHTML = '';
  let total = 0;
  for (const day in ahorros) {
    const amount = ahorros[day];
    total += amount;
    const listItem = document.createElement('li');
    listItem.textContent = `${day}: $${amount}`;
    ahorroList.appendChild(listItem);
  }
  document.getElementById('totalAmount').textContent = `Total Ahorrado: $${total}`;
}

function ocultarAhorros() {
  document.getElementById('totalAmount').style.display = 'none';
}

ocultarAhorros(); // Ocultar el acumulado al inicio
