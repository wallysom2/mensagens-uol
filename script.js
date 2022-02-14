let nomeUsuario = prompt ("Qual o seu nome?")

let newName = ""
const promise = axios.post(
    "https://mock-api.driven.com.br/api/v4/uol/participants",
    {
      name: newName
    }
  );

  function verificarNome (){
      
  }





let mensagens = [];

function carregarMensagens(resposta) {
    mensagens = resposta.data;

}
console.log(mensagens)
const promessa = axios.get('https://mock-api.driven.com.br/api/v4/uol/messages');

promessa.then(carregarMensagens);
promessa.catch(tratarErro);

function tratarErro(erro) {
    console.log(erro.response);
}
