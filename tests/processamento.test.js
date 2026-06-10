function classificarAlerta(nivel) {
  if (nivel > 80) return 'Crítico';
  if (nivel > 50) return 'Alto';

  return 'Moderado';
}

function enviarNotificacao(alerta) {
  return `Notificação enviada: ${alerta}`;
}

function processarAlerta(nivel) {
  const alerta = classificarAlerta(nivel);
  return enviarNotificacao(alerta);
}

test('processamento completo de alerta crítico', () => {
  const resultado = processarAlerta(90);

  expect(resultado).toBe('Notificação enviada: Crítico');
});