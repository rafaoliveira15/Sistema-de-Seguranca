/* ── RELÓGIO ── */
setInterval(() => {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString(
    "pt-BR",
    { hour12: false },
  );
}, 1000);

/* ── LOGIN ── */
let tentativas = 3;
let acessoLiberado = false;

const usuarios = [
  { login: "Radael", senha: "1234" },
  { login: "Paolla", senha: "4321" },
  { login: "Elisa", senha: "abcd" },
  { login: "Rafael", senha: "dcba" },
  { login: "Felipe", senha: "abc12" },
  { login: "Rafaela", senha: "1510" },
  { login: "Stefanny", senha: "123ab" },
  { login: "Raul", senha: "cb34" },
  { login: "Zanetti", senha: "5432" },
  { login: "Erika", senha: "2505" },
];

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

   //  BLOQUEIA NOVO LOGIN SE JÁ ENTROU
  if (acessoLiberado) {
    document.getElementById("status-msg").textContent =
      "> Sistema já autenticado — clique em reiniciar";
    return;
  }

  const loginDigitado = document.getElementById("inp-login").value;
  const senhaDigitada = document.getElementById("inp-senha").value;

  const encontrado = usuarios.find(
    (u) => u.login === loginDigitado && u.senha === senhaDigitada,
  );

  if (encontrado) {
    acessoLiberado = true;
  } else {
    tentativas--;
    if (tentativas > 0) {
      document.getElementById("status-msg").textContent =
        "> Login ou senha incorretos! Tentativas restantes: " + tentativas;
      document.getElementById("status-msg").className = "status-msg error";
    }
  }

  if (acessoLiberado) {
    document.getElementById("status-msg").textContent = "> Acesso Liberado";
    document.getElementById("status-msg").className = "status-msg success";
    document.getElementById("btn-reset").style.display = "block";
  } else if (tentativas === 0) {
    document.getElementById("status-msg").textContent =
      "> SISTEMA BLOQUEADO - Procure Suporte";
    document.getElementById("status-msg").className = "status-msg blocked";
  }
});

/* ── REINICIAR ── */
document.getElementById("btn-reset")?.addEventListener("click", function () {
  location.reload();
});
