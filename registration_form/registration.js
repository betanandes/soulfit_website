// ***** Validações campos obrigatórios *****

const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const data = document.getElementById("dataNasc");
const email = document.getElementById("email");
const celular = document.getElementById("cel");
const telefone = document.getElementById("tel");
const mae = document.getElementById("mae");
const cpf = document.getElementById("cpf");
const cep = document.getElementById("cep");
const numComp = document.getElementById("numComp");
const cidade = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const estado = document.getElementById("estado");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputFullname();
    checkInputEmail();
    checkInputDate();
    checkInputCel();
    checkInputTel();
    checkInputMae();
    checkInputCpf();
    checkInputCep();
    checkInputNumeroComple();
    checkInputRua();
    checkInputBairro();
    checkInputEstado();
    checkInputUsername();
    checkInputPassword();
    checkInputConfirmPassword();
    
  });


  function checkInputFullname() {
    const fullnameValue = fullname.value;

    if(fullnameValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(fullname, "Preencha o seu nome completo.")
    }else {
        const formItem = fullname.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputDate() {
    const dataValue = data.value;

    if(dataValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(data, "Preencha com sua data de nascimento.")
    }else {
        const formItem = data.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputEmail() {
    const emailValue = email.value;

    if(emailValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(email, "O e-mail é obrigatório.")
    }else {
        const formItem = email.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputCel() {
    const celValue = cel.value;

    if(celValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(cel, "O celular é obrigatório.")
    }else {
        const formItem = cel.parentElement;
        formItem.className = "input-box"
    }

  }

  function checkInputTel() {
    const telValue = tel.value;

    if(telValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(tel, "O telefone é obrigatório.")
    }else {
        const formItem = tel.parentElement;
        formItem.className = "input-box"
    }

  }

  function checkInputMae() {
    const maeValue = mae.value;

    if(maeValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(mae, "Nome da mãe é obrigatório.")
    }else {
        const formItem = mae.parentElement;
        formItem.className = "input-box"
    }

  }

  function checkInputCpf() {
    const cpfValue = cpf.value;

    if(cpfValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(cpf, "O CPF é obrigatório.")
    }else {
        const formItem = cpf.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputCep() {
    const cepValue = cep.value;

    if(cepValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(cep, "O CEP é obrigatório.")
    }else {
        const formItem = cep.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputNumeroComple() {
    const numCompValue = numComp.value;

    if(numCompValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(numComp, "Número e complemento são obrigatórios.")
    }else {
        const formItem = numComp.parentElement;
        formItem.className = "input-box"
    }


  }
  
  function checkInputRua() {
    const ruaValue = rua.value;

    if(ruaValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(rua, "Preencha com sua cidade.")
    }else {
        const formItem = rua.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputBairro() {
    const bairroValue = bairro.value;

    if(bairroValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(bairro, "Preencha com seu bairro.")
    }else {
        const formItem = bairro.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputEstado() {
    const estadoValue = estado.value;

    if(estadoValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(estado, "Preencha com seu estado.")
    }else {
        const formItem = estado.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputUsername() {
    const usernameValue = username.value;

    if(usernameValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(username, "O nome do usuário é obrigatório.")
    }else {
        const formItem = username.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputPassword() {
    const passwordValue = password.value;

    if(passwordValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(password, "A senha é obrigatória")
    }else {
        const formItem = password.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputConfirmPassword() {
    const confirmPasswordValue = confirmPassword.value;

    if(confirmPasswordValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(confirmPassword, "A confirmação de senha é obrigatória.")
    }else {
        const formItem = confirmPassword.parentElement;
        formItem.className = "input-box"
    }


  }

  function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "input-box error"

  }

  // ***** FIM Validações campos obrigatórios *****


  // ***** Validações telefone *****

  function preencherNumeros (v) {
    //remove caracteres não numéricos
    v.value = v.value.replace(/\D/g, '');
  }

      // Monta a URL para consulta
function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, '');
    //adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{5})(\d)/, "$1-$2");


}

  // ***** FIM Validações telefone *****

 // ***** Validações CEP *****

 function preencherEndereco (v) {
  var cep = v.value;

  cep = cep.replace(/\D/g, '');

    // Monta a URL para consulta
  if (cep.length === 8 ){
      var url = 'https://viacep.com.br/ws/' + cep + '/json/';

      fetch(url)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          if (!data.erro) {
              document.getElementById('rua').value = data.logradouro;
              document.getElementById('bairro').value = data.bairro;
              document.getElementById('estado').value = data.localidade + "-" + data.uf;
  
          }
      })

      .catch(function(error){
          console.log('Ocorreu um erro', error);

      })

  }


}

 // ***** FIM Validações CEP *****







 // ***** Validações CPF *****
 // ***** FIM Validações CPF *****
// ***** localStorage *****