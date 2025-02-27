(function() {
  const nav = document.querySelector("nav");
  const botaoMenu = nav.querySelector("button.menu");
  const opcoes = nav.querySelector("div.opcoes");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  });

  botaoMenu.addEventListener("click", function() {
    botaoMenu.classList.toggle("ativo");
    opcoes.classList.toggle("mostrar");
  });
})();