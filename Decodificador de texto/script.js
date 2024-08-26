const divResultado = document.querySelector("div.resultado-texto");
const inputText = document.querySelector("textarea.input-text");
const alertText = document.querySelector("span.info");
const htmlNaoEncontrado = divResultado.innerHTML;
const placeholderPadrao = "Digite seu texto...";
const erroPlaceholder = "Nenhuma mensagem a ser descriptografada, digite seu texto...";

const htmlNaoValido = `
    <img class="imagem-conteudo" src="./imgs/boneco.png" alt="Mensagem Inválida"/>
    <h3>Nenhuma mensagem encontrada</h3>
    <p>Digite um texto que você deseja criptografar ou descriptografar.</p>`;

const btnCopiar = `
    <div class="btn-acao-texto">
        <button class="btn-copiar" type="button" onclick="copiar()" >Copiar</button>
    </div>`;

function validarTexto(texto) {
  return !/[A-ZÀ-ü0-9]/.test(texto);
}

function conteudoTexto(texto) {
  divResultado.innerHTML = `<p class="mensagem"><strong>${texto}</strong></p>`;
  divResultado.innerHTML += btnCopiar;
  inputText.value = "";
  inputText.placeholder = placeholderPadrao;
}

function criptografar() {
  const mensagem = inputText.value;
  if (validarTexto(mensagem) && mensagem !== "") {
    const mensagemCriptografada = mensagem
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    alertText.classList.remove("alert");
    conteudoTexto(mensagemCriptografada);
    return mensagemCriptografada;
  } else {
    alertText.classList.add("alert");
    divResultado.innerHTML = htmlNaoValido;
  }
}

function descriptografar() {
  const textoEsquerda = inputText.value;
  if (validarTexto(textoEsquerda) && textoEsquerda !== "") {
    const mensagemDescriptografada = textoEsquerda
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    alertText.classList.remove("alert");
    conteudoTexto(mensagemDescriptografada);
    return mensagemDescriptografada;
  } else {
    inputText.placeholder = placeholderPadrao;
    divResultado.innerHTML = htmlNaoValido;
  }
}

function copiar() {
  const mensagemParaCopia = document.querySelector("p.mensagem").textContent;
  navigator.clipboard
    .writeText(mensagemParaCopia)
}