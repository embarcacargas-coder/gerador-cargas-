function gerarHTML() {
  let htmlFinal = templateHTML;

  const campos = {
    "{{NOME}}": document.getElementById("nome").value,
    "{{ORIGEM}}": document.getElementById("origem").value,
    "{{DESTINO}}": document.getElementById("destino").value,
    "{{PESO}}": document.getElementById("peso").value,
    "{{VALOR}}": document.getElementById("valor").value,
    "{{VEICULO}}": document.getElementById("veiculo").value,
    "{{AGENCIADOR}}": document.getElementById("agenciador").value,
    "{{TELEFONE}}": document.getElementById("telefone").value
  };

  for (let chave in campos) {
    htmlFinal = htmlFinal.replaceAll(chave, campos[chave]);
  }

  document.getElementById("resultado").value = htmlFinal;
}

function baixarTXT() {
  const conteudo = document.getElementById("resultado").value;

  const blob = new Blob([conteudo], { type: "text/plain"
