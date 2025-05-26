document.getElementById("btn-modal").addEventListener("click",function(){
    document.getElementById("modal").style.display = "flex";
    console.log("Modal opened");
})
document.getElementById("btn-close").addEventListener("click",function(){
    document.getElementById("modal").style.display = "none";
})
document.getElementById("form-submit").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputName = document.getElementById("input-name");
    const inputEmail = document.getElementById("input-email");
    const inputTelefone = document.getElementById("input-telefone");
    const inputSugestao = document.getElementById("sugestao");

    const valueInputName = inputName.value;
    const valueInputEmail = inputEmail.value;
    const valueInputTelefone = inputTelefone.value;
    const valueInputSugestao = inputSugestao.value;

    if (valueInputName === "" || valueInputEmail === "" || valueInputTelefone === "" || valueInputSugestao === "") {
        alert("Preencha todos os campos");
    } else {
        alert("Obrigado por entrar em contato");
        document.getElementById("modal").style.display = "none";
        document.getElementById("input-name").value = "";
        document.getElementById("input-email").value = "";
        document.getElementById("input-telefone").value = "";
        document.getElementById("sugestao").value = "";
    }
});