// 1. Seleciona todos os elementos no HTML que possuem a classe 'animar-scroll'
const elementosParaAnimar = document.querySelectorAll('.animar-scroll');

// 2. Cria o observador (o "vigia" da tela)
const observadorDeScroll = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        
        if (entrada.isIntersecting) {
            // Se a imagem entrou na tela, adiciona a classe para fazer o efeito do CSS aparecer
            entrada.target.classList.add('mostrar');
        } else {
            // Se a imagem saiu da tela (subindo ou descendo), removemos a classe.
            // Isso faz com que ela resete e possa animar de novo na próxima vez!
            entrada.target.classList.remove('mostrar');
        }
    });
}, {
    // Configuração: A animação dispara quando 20% da imagem estiver visível
    threshold: 0.2, 
    rootMargin: "0px" 
});

// 3. Pede para o observador vigiar cada uma das imagens
elementosParaAnimar.forEach(elemento => {
    observadorDeScroll.observe(elemento);
});