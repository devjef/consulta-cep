const btnPesquisarCEP = document.querySelector("#btnPesquisar");
const btnLimparCEP = document.querySelector("#btnLimpar");
const form = document.querySelector("#form");

btnPesquisarCEP.addEventListener("click", event => {
  event.preventDefault();

  const inputDoCep = document.querySelector("#cep");
  const valorDoCep = inputDoCep.value;
  const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;
  
  fetch(url).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    if(data.erro){
      alert("O CEP DIGITADO ESTÁ INVÁLIDO");
      return ;
    }
    atribuirCampos(data);
  });
});

function atribuirCampos(data) {
  const rua = document.querySelector("#rua");
  const complemento = document.querySelector("#complemento");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");

  rua.value = data.logradouro;
  complemento.value = data.complemento;
  bairro.value = data.bairro;
  cidade.value = data.localidade;
  estado.value = data.uf;

}

btnLimparCEP.addEventListener("click", event => {
  event.preventDefault();
  form.reset();
});