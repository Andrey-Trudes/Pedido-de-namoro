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
  window.location.href = "https://www.youtube.com/watch?v=5dsGWM5XGdg"; 
});
