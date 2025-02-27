(function () {
  const sectionServicos = document.querySelector("section.servicos");
  const toggle = sectionServicos.querySelector("div.toggle");
  const mundo = sectionServicos.querySelector("div.mundo");
  const mapa = mundo.querySelector("img.mapa");

  const textos = sectionServicos.querySelectorAll(".texto"); // Seleciona todos os elementos de texto
  const imagensCaminhos = sectionServicos.querySelectorAll(".caminhos"); // Seleciona todas as imagens de rota
  const partes = Array.from(toggle.querySelectorAll(".parte"));

  toggle.addEventListener("click", function (event) {
    const clickedPart = event.target.closest(".parte");

    if (clickedPart) {
      const index = partes.indexOf(clickedPart); // Obtém o índice da parte clicada

      // Remove a classe ativo de todas as partes e adiciona na clicada
      partes.forEach(part => part.classList.remove("ativo"));
      clickedPart.classList.add("ativo");

      // Adiciona a classe 'ativo' para ativar o deslocamento do mapa
      mundo.classList.add("ativo");

      // Remove as classes de deslocamento anteriores e aplica a nova no mapa
      mapa.classList.remove("brasil", "eua", "analista");
      if (index === 0) mapa.classList.add("brasil");
      if (index === 1) mapa.classList.add("eua");
      if (index === 2) mapa.classList.add("analista");

      // Altera a visibilidade e o texto das imagens e textos
      imagensCaminhos.forEach(function (img, i) {
        img.style.opacity = i === index ? "1" : "0";
        img.style.visibility = i === index ? "visible" : "hidden";
      });

      textos.forEach(function (texto, i) {
        texto.style.opacity = i === index ? "1" : "0";
        texto.style.visibility = i === index ? "visible" : "hidden";
      });
    }
  });
})();
