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

var nome = document.getElementById("nome");
var sobrenome1 = document.getElementById("sobrenome1");

function enviarForm(){
    
    if (nome == null || nome == "") {
        
        nomeError = "Por favor, insira o nome";
        document.getElementById("nome_error").innerHTML = nomeError;

        teste = nome
        console.log(nome_error)
        return false;
        
    }
    
    else if (sobrenome == null || sobrenome == "") {
        
        sobrenomeError = "Por favor, insira o sobrenome";
        document.getElementById("sobrenome_error").innerHTML = sobrenomeError;
        return false;
    }

    else {
        return true;
    }
}

// Não dar reload no formulário
document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    event.preventDefault()
})