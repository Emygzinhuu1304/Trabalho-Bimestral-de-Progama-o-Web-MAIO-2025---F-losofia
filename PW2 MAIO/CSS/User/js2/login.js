function handleMenuClick(opcao) {
  if (opcao === 'usuario') {
    window.location.href = '/login/index.html'; // Caminho correto para a tela de login
  } else if (opcao === 'professor') {
    console.log('Sobre o Professor clicado');
  }
}