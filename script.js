// Pegar os elementos
let campo = document.getElementById("caixaTarefa");
let botao = document.getElementById("botaoAdicionar");
let lista = document.getElementById("listaTarefas");

// Quando clicar no botão
botao.onclick = function() {
  
  // Pegar o que foi digitado
  let texto = campo.value;
  
  // Não adicionar se estiver vazio
  if (texto === "") return;
  
  // Criar o item da lista
  let item = document.createElement("li");
  item.className = "list-group-item d-flex justify-content-between";
  
  // Criar o texto da tarefa
  let tarefa = document.createElement("span");
  tarefa.innerHTML = texto;
  
  // Criar o botão de apagar
  let botaoApagar = document.createElement("button");
  botaoApagar.innerHTML = "Apagar";
  botaoApagar.className = "btn btn-danger btn-sm";
  
  // Quando clicar no botão Apagar
  botaoApagar.onclick = function() {
    item.remove();
  };
  
  // Colocar tudo no item
  item.appendChild(tarefa);
  item.appendChild(botaoApagar);
  
  // Colocar o item na lista
  lista.appendChild(item);
  
  // Limpar o campo
  campo.value = "";
};