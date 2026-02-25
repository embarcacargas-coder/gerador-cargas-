function gerarHTML() {
  let htmlFinal = templateHTML;

  htmlFinal = htmlFinal
    .replaceAll("{{NOME}}", document.getElementById("nome").value)
    .replaceAll("{{ORIGEM}}", document.getElementById("origem").value)
    .replaceAll("{{DESTINO}}", document.getElementById("destino").value)
    .replaceAll("{{PESO}}", document.getElementById("peso").value)
    .replaceAll("{{VALOR}}", document.getElementById("valor").value)
    .replaceAll("{{VEICULO}}", document.getElementById("veiculo").value)
    .replaceAll("{{AGENCIADOR}}", document.getElementById("agenciador").value)
    .replaceAll("{{CPF}}", document.getElementById("cpf").value)
    .replaceAll("{{CNPJ}}", document.getElementById("cnpj").value)
    .replaceAll("{{RAZAO}}", document.getElementById("razao").value)
    .replaceAll("{{LOCALIDADE}}", document.getElementById("localidade").value);

  const blob = new Blob([htmlFinal], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "carga-" + Date.now() + ".html";
  a.click();

  // opcional limpeza de memória
  setTimeout(() => URL.revokeObjectURL(a.href), 100);
}
