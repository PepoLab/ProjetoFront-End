/* ======================================================
   SCRIPT.JS — SPA + Formulário + Tema Escuro
   Projeto: Voluntários
   ====================================================== */

/* ==========================
   MENU MOBILE (Acessível)
   ========================== */
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

// Fecha o menu ao clicar fora ou em um link
document.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest(".menu-toggle");
  const link = e.target.closest("#navMenu a");

  if (toggleBtn) {
    e.preventDefault();
    toggleMenu();
  }

  if (link) {
    const menu = document.getElementById("navMenu");
    menu?.classList.remove("active");
  }
});

/* ======================================================
   SPA — Templates e Rotas
   ====================================================== */
const templates = {
  home: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>O Poder da Solidariedade em Ação</h1>
        <p>Junte-se à nossa causa! Transforme a realidade de famílias através da inclusão social, dignidade e apoio.</p>
      </div>
    </section>

    <section class="about">
      <div class="about-content">
        <div class="about-text">
          <h2>Nossa Missão</h2>
          <p>Somos uma organização sem fins lucrativos impulsionada pela paixão em ajudar. Atuamos diretamente na base, oferecendo suporte contínuo a famílias em situação de vulnerabilidade e promovendo autonomia e esperança.</p>
          <a href="#/projetos" class="btn-secondary">Conheça Nossos Projetos →</a>
        </div>
        <div class="about-image">
          <img src="img/missao.webp" alt="Nossa missão">
        </div>
      </div>
    </section>

    <section class="how-we-work">
      <h2>Como Geramos Impacto</h2>
      <div class="cards-container">
        <article class="card"><h3>🍲 Apoio Alimentar</h3><p>Distribuímos cestas básicas e refeições nutritivas.</p></article>
        <article class="card"><h3>👩‍🏫 Educação e Oficinas</h3><p>Capacitação profissional, reforço escolar e cidadania.</p></article>
        <article class="card"><h3>💪 Inclusão Social</h3><p>Atividades comunitárias e acesso a serviços básicos.</p></article>
      </div>
    </section>

    <section class="stats-section">
      <h2>Nosso Impacto</h2>
      <div class="stats-container">
        <div class="stat-item"><span class="number">1200+</span><p>Famílias Apoiadas</p></div>
        <div class="stat-item"><span class="number">300+</span><p>Voluntários</p></div>
        <div class="stat-item"><span class="number">15+</span><p>Projetos Ativos</p></div>
      </div>
    </section>
  `,

  projetos: `
    <section class="hero hero-projetos">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Nossos Projetos e Ações</h1>
        <p>Conheça as iniciativas que transformam vidas.</p>
      </div>
    </section>

    <section class="projects">
      <h2>Projetos em Andamento</h2>
      <div class="projects-container">
        <article class="project-card">
          <img src="img/humanitario.webp" alt="Ação humanitária" class="project-image">
          <h3>🍞 Alimentar Esperança</h3>
          <p>Distribuição de alimentos e refeições em comunidades.</p>
        </article>
        <article class="project-card">
          <img src="img/educacao.webp" alt="Aulas voluntárias" class="project-image">
          <h3>📚 Educação para Todos</h3>
          <p>Oficinas e reforço escolar para crianças e jovens.</p>
        </article>
        <article class="project-card">
          <img src="img/fundocad.webp" alt="Atividades comunitárias" class="project-image">
          <h3>💪 Comunidade Ativa</h3>
          <p>Projetos de inclusão social e convivência comunitária.</p>
        </article>
      </div>
    </section>

    <section class="doe">
      <h2>Como Ajudar</h2>
      <p>Doações, tempo e talento fazem a diferença!</p>
      <div class="donate-options">
        <article class="donate-card">
          <h3>💰 Doação Financeira</h3>
          <a href="#/cadastro" class="btn-secondary">Doar Agora</a>
        </article>
        <article class="donate-card">
          <h3>🛒 Doação de Itens</h3>
          <p>Roupas, alimentos e brinquedos são sempre bem-vindos.</p>
        </article>
        <article class="donate-card">
          <h3>⏰ Trabalho Voluntário</h3>
          <a href="#/cadastro" class="btn-primary">Inscrever-se</a>
        </article>
      </div>
    </section>
  `,

  cadastro: `
    <section class="hero hero-cadastro">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Cadastre-se e Faça Parte</h1>
        <p>Preencha o formulário e junte-se à nossa rede de voluntários.</p>
      </div>
    </section>

    <section class="form-section">
      <h2>Formulário de Inscrição</h2>
      <form id="formVoluntario" novalidate>
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" required>

          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required>

          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" placeholder="00000-000" required>

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required>

          <label for="estado">Estado:</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option>SP</option><option>RJ</option><option>MG</option>
            <option>ES</option><option>PR</option><option>RS</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Área de Interesse</legend>
          <label for="area">Área de Atuação:</label>
          <select id="area" name="area" required>
            <option value="">Selecione</option>
            <option value="alimentacao">Apoio Alimentar</option>
            <option value="educacao">Educação e Oficinas</option>
            <option value="inclusao">Inclusão Social</option>
            <option value="administrativo">Apoio Administrativo</option>
          </select>

          <label for="mensagem">Mensagem (opcional):</label>
          <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte-nos um pouco sobre sua motivação..."></textarea>
        </fieldset>

        <button type="submit" class="btn-primary">Enviar Cadastro</button>
      </form>

      <div id="sucessMessage" class="success-message">✅ Cadastro realizado com sucesso!</div>
    </section>
  `,
};

const app = document.getElementById("app");

/* ======================================================
   ROTEAMENTO (SPA)
   ====================================================== */
function route() {
  const hash = location.hash.replace("#/", "");
  return ["home", "projetos", "cadastro"].includes(hash) ? hash : "home";
}

function render(page) {
  app.innerHTML = templates[page];
  highlight(page);
  if (page === "cadastro") initForm();
}

function navigate(page) {
  location.hash = "#/" + page;
  render(page);
}

function highlight(page) {
  document.querySelectorAll("#navMenu a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#/${page}`);
  });
}

window.addEventListener("hashchange", () => render(route()));
document.addEventListener("DOMContentLoaded", () => {
  render(route());
  initThemeButton();
});

/* ======================================================
   FORMULÁRIO — Máscaras e Validação
   ====================================================== */
function initForm() {
  const form = document.getElementById("formVoluntario");
  if (!form) return;

  const onlyDigits = (v) => v.replace(/\D/g, "");
  const cpf = form.querySelector("#cpf");
  const tel = form.querySelector("#telefone");
  const cep = form.querySelector("#cep");

  cpf?.addEventListener("input", () => {
    let v = onlyDigits(cpf.value).slice(0, 11);
    cpf.value = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
  });

  tel?.addEventListener("input", () => {
    let v = onlyDigits(tel.value).slice(0, 11);
    tel.value = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  });

  cep?.addEventListener("input", () => {
    let v = onlyDigits(cep.value).slice(0, 8);
    cep.value = v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    data.dataCadastro = new Date().toLocaleDateString();

    const stored = JSON.parse(localStorage.getItem("voluntarios") || "[]");
    stored.push(data);
    localStorage.setItem("voluntarios", JSON.stringify(stored));

    const msg = document.getElementById("sucessMessage");
    msg.classList.add("show");
    msg.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => form.reset(), 2000);
    setTimeout(() => msg.classList.remove("show"), 3000);
  });
}

/* ======================================================
   MODO ESCURO — Criação e Persistência
   ====================================================== */
function initThemeButton() {
  let btn = document.getElementById("themeToggle");

  // Cria o botão flutuante, se ainda não existir
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "themeToggle";
    btn.setAttribute("aria-label", "Alternar modo escuro");
    document.body.appendChild(btn);
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
  });
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.textContent = mode === "dark" ? "☀️" : "🌙";
  }
}

/* ======================================================
   NAVEGAÇÃO DE LINKS SPA
   ====================================================== */
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href^='#/']");
  if (link) {
    e.preventDefault();
    const target = link.getAttribute("href").replace("#/", "");
    navigate(target);
  }
});
