// Menu responsivo
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('open');
  });
  
  // Simulação de envio de formulário
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada! Obrigado pelo contato.');
  });  
