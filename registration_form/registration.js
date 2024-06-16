// ***** Validações campos obrigatórios *****

// const form = document.getElementById("form");
// const fullname = document.getElementById("fullname");
// const data = document.getElementById("dataNasc");
// const email = document.getElementById("email");
// const celular = document.getElementById("cel");
// const telefone = document.getElementById("tel");
// const mae = document.getElementById("mae");
// const cpf = document.getElementById("cpf");
// const cep = document.getElementById("cep");
// const numComp = document.getElementById("numComp");
// const cidade = document.getElementById("rua");
// const bairro = document.getElementById("bairro");
// const estado = document.getElementById("estado");
// const username = document.getElementById("username");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirmPassword");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     checkInputFullname();
//     checkInputEmail();
//     checkInputDate();
//     checkInputCel();
//     checkInputTel();
//     checkInputMae();
//     checkInputCpf();
//     checkInputCep();
//     checkInputNumeroComple();
//     checkInputRua();
//     checkInputBairro();
//     checkInputEstado();
//     checkInputUsername();
//     checkInputPassword();
//     checkInputConfirmPassword();
    
//   });


//   function checkInputFullname() {
//     const fullnameValue = fullname.value;

//     if(fullnameValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(fullname, "Preencha o seu nome completo.")
//     }else {
//         const formItem = fullname.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputDate() {
//     const dataValue = data.value;

//     if(dataValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(data, "Preencha com sua data de nascimento.")
//     }else {
//         const formItem = data.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputEmail() {
//     const emailValue = email.value;

//     if(emailValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(email, "O e-mail é obrigatório.")
//     }else {
//         const formItem = email.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputCel() {
//     const celValue = cel.value;

//     if(celValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(cel, "O celular é obrigatório.")
//     }else {
//         const formItem = cel.parentElement;
//         formItem.className = "input-box"
//     }

//   }

//   function checkInputTel() {
//     const telValue = tel.value;

//     if(telValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(tel, "O telefone é obrigatório.")
//     }else {
//         const formItem = tel.parentElement;
//         formItem.className = "input-box"
//     }

//   }

//   function checkInputMae() {
//     const maeValue = mae.value;

//     if(maeValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(mae, "Nome da mãe é obrigatório.")
//     }else {
//         const formItem = mae.parentElement;
//         formItem.className = "input-box"
//     }

//   }

  // function checkInputCpf() {
  //   const cpfValue = cpf.value;

  //   if(cpfValue === "") {
  //       // mostrar o aviso e mostrar a msg de erro 
  //       errorInput(cpf, "O CPF é obrigatório.")

  //   }else {
  //       const formItem = cpf.parentElement;
  //       formItem.className = "input-box"
  //   }


  //  }

   

//   function checkInputCep() {
//     const cepValue = cep.value;

//     if(cepValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(cep, "O CEP é obrigatório.")
//     }else {
//         const formItem = cep.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputNumeroComple() {
//     const numCompValue = numComp.value;

//     if(numCompValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(numComp, "Número e complemento são obrigatórios.")
//     }else {
//         const formItem = numComp.parentElement;
//         formItem.className = "input-box"
//     }


//   }
  
//   function checkInputRua() {
//     const ruaValue = rua.value;

//     if(ruaValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(rua, "Preencha com sua cidade.")
//     }else {
//         const formItem = rua.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputBairro() {
//     const bairroValue = bairro.value;

//     if(bairroValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(bairro, "Preencha com seu bairro.")
//     }else {
//         const formItem = bairro.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputEstado() {
//     const estadoValue = estado.value;

//     if(estadoValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(estado, "Preencha com seu estado.")
//     }else {
//         const formItem = estado.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputUsername() {
//     const usernameValue = username.value;

//     if(usernameValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(username, "O nome do usuário é obrigatório.")
//     }else {
//         const formItem = username.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputPassword() {
//     const passwordValue = password.value;

//     if(passwordValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(password, "A senha é obrigatória")
//     }else {
//         const formItem = password.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function checkInputConfirmPassword() {
//     const confirmPasswordValue = confirmPassword.value;

//     if(confirmPasswordValue === "") {
//         // mostrar o aviso e mostrar a msg de erro 
//         errorInput(confirmPassword, "A confirmação de senha é obrigatória.")
//     }else {
//         const formItem = confirmPassword.parentElement;
//         formItem.className = "input-box"
//     }


//   }

//   function errorInput(input, message) {
//     const formItem = input.parentElement;
//     const textMessage = formItem.querySelector("a")

//     textMessage.innerText = message;

//     formItem.className = "input-box error"

//   }

//   // ***** FIM Validações campos obrigatórios *****


//   // ***** Validações telefone *****

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

 form.addEventListener("submit", (event) => {
    preencherEndereco (v);

 });

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
              document.getElementById('idRua').value = data.logradouro;
              document.getElementById('idBairro').value = data.bairro;
              document.getElementById('idUf').value = data.localidade + "-" + data.uf;
  
          }
      })

      .catch(function(error){
          console.log('Ocorreu um erro', error);

      })

  }


}

 // ***** FIM Validações CEP *****


 // ***** Validações senha *****

let senha = document.getElementById('password');
let senhaC = document.getElementById('confirmPassword');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
senhaC.addEventListener('input', validarSenha);

 // ***** FIM Validações senha *****

 
 // ***** Validações CPF *****

//  const cpf = document.getElementById("cpf");

//  function validarCPF(cpf) {
//   cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

//   if (cpf.length !== 11) {
//       return false; // CPF deve ter 11 dígitos
//   }

//   // Elimina CPFs inválidos conhecidos
//   if (/^(\d)\1+$/.test(cpf)) {
//       return false;
//   }

//   let soma;
//   let resto;

//   // Valida primeiro dígito verificador
//   soma = 0;
//   for (let i = 1; i <= 9; i++) {
//       soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
//   }
//   resto = (soma * 10) % 11;

//   if ((resto === 10) || (resto === 11)) {
//       resto = 0;
//   }
//   if (resto !== parseInt(cpf.substring(9, 10))) {
//       return false;
//   }

//   // Valida segundo dígito verificador
//   soma = 0;
//   for (let i = 1; i <= 10; i++) {
//       soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
//   }
//   resto = (soma * 10) % 11;

//   if ((resto === 10) || (resto === 11)) {
//       resto = 0;
//   }
//   if (resto !== parseInt(cpf.substring(10, 11))) {
//       return false;
//   }

//   return true;
// }

// // Testando a função
// console.log(validarCPF('123.456.789-09')); // Exemplo de CPF inválido
// console.log(validarCPF('111.444.777-35')); // Exemplo de CPF válido

document.getElementById('cpf').addEventListener('input', function(e) {
  var value = e.target.value;
  var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
						.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
						.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
						.replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
						.replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
  e.target.value = cpfPattern;
});

// function validaCPF(cpf) {
//   cpf = cpf.replace(/\D+/g, '');
//   if (cpf.length !== 11) return false;

//   let soma = 0;
//   let resto;
//   if (/^(\d)\1{10}$/.test(cpf)) return false; // Verifica sequências iguais

//   for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
//   resto = (soma * 10) % 11;
//   if ((resto === 10) || (resto === 11)) resto = 0;
//   if (resto !== parseInt(cpf.substring(9, 10))) return false;

//   soma = 0;
//   for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
//   resto = (soma * 10) % 11;
//   if ((resto === 10) || (resto === 11)) resto = 0;
//   if (resto !== parseInt(cpf.substring(10, 11))) return false;

//   return true;
// }

// document.getElementById('form').addEventListener('submit', function(e) {
//   e.preventDefault(); // Impede o envio do formulário
//   var cpf = document.getElementById('cpf').value;

//   if (cpf === '') {
//   errorMessage += 'O campo Nome é obrigatório.\n';
//   }else {
//     // Se não houver erros, envia o formulário
//     alert('Cadastrado com sucesso!');
 
//      document.getElementById('form').submit();
//   }
  
// });

 // ***** FIM Validações CPF *****

 
// ***** localStorage *****

function handleRegistration() {
  // Resetando mensagem de erro
  document.getElementById('registrationError').textContent = "";

  // Capturando valores dos campos de registro
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;


  // Salvando novo usuário e senha no localStorage
  localStorage.setItem('log_username', username);
  localStorage.setItem('log_password', password);

  // Exibindo mensagem de sucesso (simulação)
  alert("Cadastro realizado com sucesso!");

  // Redirecionando para a página de login (simulação)
  //window.location.href = "index.html"; // Redirecionar para a página de login

  document.getElementById('form').submit();


  return false; // Evitar envio do formulário
}