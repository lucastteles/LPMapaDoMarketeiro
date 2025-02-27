document
        .getElementById("meuFormulario")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Previne o envio padrão do formulário

          const formData = new FormData(this);

          fetch(this.action, {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              if (response.ok) {
                document.getElementById("mensagemSucesso").style.display =
                  "none"; // Exibe a mensagem de sucesso
                document.getElementById("mensagemErro").style.display = "block"; // Esconde a mensagem de erro
              } else {
                document.getElementById("mensagemErro").style.display = "none"; // Exibe a mensagem de erro
                document.getElementById("mensagemSucesso").style.display =
                  "block"; // Esconde a mensagem de sucesso
              }
            })
            .catch((error) => {
              document.getElementById("mensagemErro").style.display = "none"; // Exibe a mensagem de erro
              document.getElementById("mensagemSucesso").style.display =
                "block"; // Esconde a mensagem de sucesso
              console.error(error);
            });
        });