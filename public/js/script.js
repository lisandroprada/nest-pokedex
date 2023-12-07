const fechaLimite = new Date('2023-12-08T11:00:00-03:00');

function actualizarCuentaRegresiva() {
  const diferencia = fechaLimite.getTime() - Date.now();
  const dias = diferencia / (1000 * 60 * 60 * 24);
  const horas = (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  const minutos = (diferencia % (1000 * 60 * 60)) / (1000 * 60);
  const segundos = (diferencia % (1000 * 60)) / 1000;

  document.querySelector('.dia .numero').textContent = dias;
  document.querySelector('.hora .numero').textContent = horas;
  document.querySelector('.minuto .numero').textContent = minutos;
  document.querySelector('.segundo .numero').textContent = segundos;
}

window.onload = function () {
  setInterval(actualizarCuentaRegresiva, 1000);
};
