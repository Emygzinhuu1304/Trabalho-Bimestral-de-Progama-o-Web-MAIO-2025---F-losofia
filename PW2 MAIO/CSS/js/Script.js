document.addEventListener('DOMContentLoaded', function () {
  const userIcon = document.querySelector('.user-icon');
  const sideMenu = document.getElementById('side-menu');

  // Abrir ou fechar menu ao clicar no ícone
  userIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede o clique de se propagar
    sideMenu.classList.toggle('open');
  });

  // Fechar o menu ao clicar fora dele
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = sideMenu.contains(event.target);
    const isClickOnIcon = userIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
      sideMenu.classList.remove('open');
    }
  });

  // Lógica do menu
  window.handleMenuClick = function (option) {
    if (option === 'usuario') {
      console.log('Usuário clicado');
    } else if (option === 'professor') {
      console.log('Sobre o Professor clicado');
    }

  //lOGIN
    function handleMenuClick(opcao) {
  if (opcao === 'usuario') {
    window.location.href = '/User/Login.html'; // Caminho até a página de login
  } else if (opcao === 'professor') {
    alert('Página do Professor em construção!');
  }
}

  };
});
