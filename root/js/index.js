const inputUtilizado = document.querySelectorAll("input");

inputUtilizado.forEach(function (input) {
  input.addEventListener("input", function () {
    input.classList.add("preenchido");

    if (input.value === "") {
      input.classList.remove("preenchido");
    }
  });
});

const textareaUtilizada = document.querySelectorAll("textarea")[0];

textareaUtilizada.addEventListener("input", function () {
  textareaUtilizada.classList.add("preenchido");

  if (textareaUtilizada.value === "") {
    textareaUtilizada.classList.remove("preenchido");
  }
});

const botaoClicado = document.getElementById("botao");

botaoClicado.addEventListener("click", function () {
  const inputsPreenchidos = document.querySelectorAll(".input");
  const camposObrigatorios = document.querySelectorAll(".obrigatorio");

  inputsPreenchidos.forEach(function (input, index) {
    if (input.value === "" && camposObrigatorios[index]) {
      camposObrigatorios[index].classList.remove("hide");
    } else if (input.value !== "" && camposObrigatorios[index]) {
      camposObrigatorios[index].classList.add("hide");
    }
  });
});
