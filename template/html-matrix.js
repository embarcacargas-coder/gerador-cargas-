<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Embarca Cargas | Detalhes da Carga</title>

<!-- PREVIEW WHATSAPP / REDES SOCIAIS -->
<meta property="og:type" content="website">
<meta property="og:title" content="Embarca Cargas | Detalhes da Carga">
<meta property="og:description" content="Carga disponível para transporte. Confira os detalhes.">
<meta property="og:image" content="https://i.ibb.co/FLyv66nF/17692700150111902829393806673148.jpg">
<meta property="og:url" content="">
<meta property="og:site_name" content="Embarca Cargas">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://i.ibb.co/FLyv66nF/17692700150111902829393806673148.jpg">

<style>
*{box-sizing:border-box}

body{
  margin:0;
  background:#ffffff;
  font-family:Arial,Helvetica,sans-serif;
  color:#000;
  display:flex;
  justify-content:center;
}

.step{display:none;width:100%}
.step.active{display:flex;justify-content:center}

.app-container{
  width:100%;
  max-width:100%;
  padding:20px;
}

.card{
  background:#ffffff;
  border:1px solid #e0e0e0;
  border-radius:6px;
  padding:20px;
}

.titulo{
  text-align:center;
  font-size:20px;
  font-weight:700;
  margin-bottom:12px;
  text-transform:uppercase;
}

.badge{text-align:center;margin-bottom:15px}
.badge span{
  background:#000;
  color:#fff;
  padding:6px 14px;
  border-radius:12px;
  font-size:12px;
  font-weight:bold;
}

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
}

.box{
  background:transparent;
  border:none;
  padding:0;
}

.box strong{
  display:block;
  font-size:13px;
  font-weight:600;
  margin-bottom:6px;
}

.box input,
.box select{
  width:100%;
  background:#fff;
  border:1px solid #d0d0d0;
  padding:14px 12px;
  border-radius:4px;
  font-size:15px;
  outline:none;
}

.box input:focus,
.box select:focus{
  border-color:#000;
}

.status{
  grid-column:span 2;
  text-align:center;
  border:1px solid #000;
  padding:12px;
  font-weight:bold;
  background:#f7f7f7;
  border-radius:4px;
}

.valor{
  margin-top:16px;
  padding:14px;
  border:2px solid #000;
  display:flex;
  justify-content:space-between;
  font-weight:bold;
  border-radius:4px;
}

.btn{
  margin-top:20px;
  width:100%;
  background:#ffcc00;
  color:#000;
  padding:14px;
  text-align:center;
  font-weight:bold;
  cursor:pointer;
  border-radius:6px;
}

.foto{
  display:flex;
  justify-content:center;
  margin-bottom:14px;
}

.foto img{
  width:120px;
  height:150px;
  object-fit:cover;
  border:1px solid #ddd;
  border-radius:6px;
}

.info{
  border:1px solid #ddd;
  padding:14px;
  font-size:13px;
  line-height:1.6;
  margin-bottom:16px;
  border-radius:6px;
}

.alerta{
  border:2px solid #cc0000;
  background:#fff5f5;
  padding:14px;
  margin-bottom:20px;
  border-radius:6px;
}

.alerta-header{
  display:flex;
  justify-content:space-between;
  font-weight:bold;
  cursor:pointer;
  color:#cc0000;
}

.alerta-content{
  display:none;
  margin-top:12px;
  font-size:13px;
  line-height:1.6;
}

.btn-whats{
  margin-top:20px;
  width:100%;
  background:#25d366;
  color:#fff;
  padding:16px;
  border-radius:50px;
  font-weight:bold;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  cursor:pointer;
}
</style>
</head>

<body>

<script>
const carga = {
  nome: "__NOME__",
  id: "__ID__",
  origem: "__ORIGEM__",
  destino: "__DESTINO__",
  peso: "__PESO__",
  veiculo: "__VEICULO__",
  carroceria: "__CARROCERIA__",
  valor: "__VALOR__"
};
</script>

<!-- ETAPA 1 -->
<div class="step active" id="step1">
  <div class="app-container">
    <div class="card">

      <div class="titulo" id="nomeCarga"></div>

      <div class="badge">
        <span id="idCarga"></span>
      </div>

      <div class="grid">
        <div class="box" style="grid-column: span 2;">
          <strong>Origem</strong>
          <span id="origem"></span>
        </div>

        <div class="box" style="grid-column: span 2;">
          <strong>Destino</strong>
          <span id="destino"></span>
        </div>

        <div class="box">
          <strong>Peso</strong>
          <span id="peso"></span>
        </div>

        <div class="box">
          <strong>Veículo</strong>
          <span id="veiculo"></span>
        </div>

        <div class="box" style="grid-column: span 2;">
          <strong>Carroceria</strong>
          <span id="carroceriaCarga"></span>
        </div>

        <div class="status">Status Disponível</div>
      </div>

      <div class="valor">
        <div>Valor</div>
        <div id="valor"></div>
      </div>

      <div class="btn" onclick="goStep(2)">Próximo Passo</div>

    </div>
  </div>
</div>

<!-- ETAPA 2 -->
<div class="step" id="step2">
  <div class="app-container">
    <div class="card">

      <div class="foto">
        <img src="https://i.ibb.co/FLyv66nF/17692700150111902829393806673148.jpg">
      </div>

      <div class="info">
        <strong>Nome:</strong> __AG_NOME__<br>
<strong>CPF:</strong> __AG_CPF__<br>
<strong>CNPJ:</strong> __AG_CNPJ__<br>
<strong>Razão Social:</strong> __AG_RAZAO__<br>
<strong>Localidade:</strong> __AG_LOCAL__
      </div>

      <div class="alerta">
        <div class="alerta-header" onclick="toggleAlerta()">
          ALERTA DE SEGURANÇA <span>▼</span>
        </div>
        <div class="alerta-content" id="alertaTexto">
          A Embarca Cargas atua exclusivamente como plataforma de divulgação.
          As informações são de responsabilidade do anunciante.
        </div>
      </div>

      <div class="btn" onclick="goStep(3)">Continuar</div>

    </div>
  </div>
</div>

<!-- ETAPA 3 -->
<div class="step" id="step3">
  <div class="app-container">
    <div class="card">

      <div class="titulo">Dados do Transportador</div>

      <div class="grid">
        <div class="box" style="grid-column: span 2;">
          <strong>Nome Completo</strong>
          <input id="nomeMotorista">
        </div>

        <div class="box" style="grid-column: span 2;">
          <strong>CPF</strong>
          <input id="cpfMotorista">
        </div>

        <div class="box" style="grid-column: span 2;">
          <strong>Nº da CNH</strong>
          <input id="cnhMotorista">
        </div>

        <div class="box" style="grid-column: span 2;">
          <strong>Placa do Veículo</strong>
          <input id="placaveiculo">
        </div>

        <div class="box" style="grid-column: span 2;">
          <strong>Veículo</strong>
          <select id="tipoVeiculo">
            <option value="">Selecionar</option>
            <option>Toco</option>
            <option>Truck</option>
            <option>Bitruck</option>
            <option>Carreta</option>
            <option>Bitrem</option>
            <option>Rodotrem</option>
          </select>
        </div>

        <div class="box" style="grid-column: span 2;">
          <strong>Eixos</strong>
          <select id="eixos">
            <option value="">Selecionar</option>
            <option>2 Eixos</option>
            <option>3 Eixos</option>
            <option>4 Eixos</option>
            <option>5 Eixos</option>
            <option>6 Eixos</option>
            <option>7 Eixos</option>
            <option>9 Eixos</option>
          </select>
        </div>

        <div class="box" style="grid-column: span 2;">
          <strong>Carroceria</strong>
          <select id="carroceria">
            <option value="">Selecionar</option>
            <option>Baú Seco</option>
            <option>Baú Refrigerado</option>
            <option>Sider</option>
            <option>Graneleiro</option>
            <option>Grade Alta</option>
            <option>Grade Baixa</option>
            <option>Basculante</option>
            <option>Prancha</option>
          </select>
        </div>
      </div>

      <div class="btn-whats" onclick="enviarWhats()">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="18">
        Enviar para o Agenciador
      </div>

    </div>
  </div>
</div>

<script>
function goStep(s){
  document.querySelectorAll('.step').forEach(e=>e.classList.remove('active'));
  document.getElementById('step'+s).classList.add('active');
}

function toggleAlerta(){
  const a=document.getElementById('alertaTexto');
  a.style.display=a.style.display==='block'?'none':'block';
}

function enviarWhats(){
  if(!nomeMotorista.value || !cpfMotorista.value || !cnhMotorista.value ||
     !placaveiculo.value || !tipoVeiculo.value || !eixos.value || !carroceria.value){
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const texto =
`SOU TRANSPORTADOR, VIM PELA EMBARCA CARGAS

NOME: ${nomeMotorista.value}
CPF: ${cpfMotorista.value}
CNH: ${cnhMotorista.value}
PLACA: ${placaveiculo.value}
VEÍCULO: ${tipoVeiculo.value}
EIXOS: ${eixos.value}
CARROCERIA: ${carroceria.value}

CARGA: ${carga.nome}
ID: ${carga.id}
ORIGEM: ${carga.origem}
DESTINO: ${carga.destino}
PESO: ${carga.peso}
VALOR: ${carga.valor}`;

  window.open("https://wa.me/5527998574010?text="+encodeURIComponent(texto),"_blank");
}

nomeCarga.innerText=carga.nome;
idCarga.innerText=carga.id;
origem.innerText=carga.origem;
destino.innerText=carga.destino;
peso.innerText=carga.peso;
veiculo.innerText=carga.veiculo;
carroceriaCarga.innerText=carga.carroceria;
valor.innerText=carga.valor;
</script>

</body>
</html>
