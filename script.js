git
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelectorAll("input")[0].value;
    const email = document.querySelectorAll("input")[1].value;
    const senha = document.querySelectorAll("input")[2].value;
    const confirmarSenha = document.querySelectorAll("input")[3].value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
});
