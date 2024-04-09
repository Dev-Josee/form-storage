const cadForm = document.getElementById("form-register");

// Aguardar o click em envio para receber os dados do form

cadForm.addEventListener("submit", (e) =>{

// função para evitar da pag recarregar ao ser enviado o form

e.preventDefault();


const nome_user = document.getElementById("nome_user").value;
const email_user = document.getElementById("email_user").value;
const senha_user = document.getElementById("senha_user").value;

// os valores capturados com o value são colocados na array

let usuarios = new Array();


// já com os valores adicionados na array, aqui é feita a verificação e conversão do objeto para string e vice-versa
if (localStorage.hasOwnProperty("usuarios")){

    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}

usuarios.push({nome_user, email_user, senha_user});

localStorage.setItem("usuarios", JSON.stringify(usuarios));

})

