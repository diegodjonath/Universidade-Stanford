//Ancoragem
feather.replace()

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Validação do formulário

function enviarForm(){
    
    let nomes = document.getElementById("nomes").value;
    let sobrenomes = document.getElementById("sobrenomes").value;
    let email = document.getElementById("email");
    

    if (nomes == null || nomes == "") {
        
        nomeError = "Por favor, insira o nome";
        document.getElementById("nome_error").innerHTML = nomeError;
        
        console.log(nomes)
        
    }
    
    if (sobrenomes == null || sobrenomes == "") {
        
        sobrenomeError = "Por favor, insira o sobrenome";
        document.getElementById("sobrenome_error").innerHTML = sobrenomeError;
        
        console.log(sobrenomes)
        
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {

        emailError = "Por favor, insira o email correto!";
        document.getElementById("email_error").innerHTML = emailError;

        
    }

}



// Não dar reload no formulário
document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    event.preventDefault()
})