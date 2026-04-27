const simBtn = document.getElementById("sim");
const naoBtn = document.getElementById("nao");

let simSize = 20; // tamanho inicial da fonte do botão "Sim"

naoBtn.addEventListener("click", () => {
  // aumenta o tamanho do "Sim"
  simSize += 5;
  simBtn.style.fontSize = simSize + "px";

  // quando o "Sim" ficar muito grande, remove o "Não"
  if (simSize >= 60) {
    naoBtn.style.display = "none";
  }
});

simBtn.addEventListener("click", () => {
  // redireciona para um vídeo fofo de gato
  window.location.href = "https://youtu.be/pQzTBdeUNlU?si=iFHg2XelwQ_wplL2"; 
});

document.getElementById("sim").addEventListener("click", function() {
    alert("Sabia que você ia dizer SIM 😍💖");
});

document.getElementById("nao").addEventListener("click", function() {
    alert("Ah não 😢... mas eu não vou desistir!");
});

const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");

btnSim.addEventListener("click", () => {
    alert("Sabia que você ia dizer SIM 😍💖");
});

// Faz o botão "Não" fugir da tela
btnNao.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth - btnNao.offsetWidth);
    const y = Math.floor(Math.random() * window.innerHeight - btnNao.offsetHeight);
    btnNao.style.position = "absolute";
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
});

// Se clicar mesmo assim, mostra uma arte da Hello Kitty
btnNao.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="text-align:center;">
            <h1>😢 Você disse não... olha quem ficou triste:</h1>
            <img src="img/hellokitty.png" alt="Hello Kitty triste" style="max-width:300px;">
        </div>
    `;
});
