/* ======================================================
   SCRIPT.JS — SPA + DOM + LocalStorage + Máscaras (BR)
   Projeto: Voluntários
   Páginas: Início, Projetos, Cadastro
   ====================================================== */

/* ==========================
   MENU RESPONSIVO (HAMBÚRGUER)
   ========================== */
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu) navMenu.classList.toggle("open");
}
document.addEventListener("click", (e) => {
  if (e.target.matches("#navMenu a")) {
    const navMenu = document.getElementById("navMenu");
    if (navMenu && navMenu.classList.contains("open")) navMenu.classList.remove("open");
  }
});

/* ==========================
   TEMPLATES DAS PÁGINAS (SPA)
   ========================== */
/* Obs.: O fundo do HERO usa CSS (fundocad.jpg). As demais imagens são
   as do seu /img atual: educacao.jpg, humanitario.webp, missao-removebg-preview.png,
   logo-removebg-preview.png, phone.png */
const templates = {
  home: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>O Poder da Solidariedade em Ação</h1>
        <p>Junte-se à nossa causa! Transforme a realidade de famílias com inclusão social, dignidade e apoio.</p>
        <a href="#/cadastro" class="btn-primary" data-route="/cadastro">Faça Sua Inscrição Agora</a>
      </div>
    </section>

    <section class="about">
      <div class="about-content">
        <div class="about-text">
          <h2>Nossa Missão</h2>
          <p>Somos uma organização sem fins lucrativos impulsionada pela paixão em ajudar. Atuamos na base, oferecendo suporte contínuo a famílias em vulnerabilidade e promovendo autonomia e esperança.</p>
          <a href="#/projetos" class="btn-secondary" data-route="/projetos">Conheça Nossos Projetos &rarr;</a>
        </div>
        <div class="about-image">
          <img src="img/missao-removebg-preview.png" alt="Nossa missão ilustrada">
        </div>
      </div>
    </section>

    <section class="how-we-work">
      <h2>Como Geramos Impacto</h2>
      <div class="cards-container">
        <article class="card">
          <h3>🍲 Apoio Alimentar</h3>
          <p>Garantimos segurança alimentar com cestas básicas e refeições nutritivas.</p>
        </article>
        <article class="card">
          <h3>👩‍🏫 Educação e Oficinas</h3>
          <p>Capacitação profissional, reforço escolar e workshops de cidadania.</p>
        </article>
        <article class="card">
          <h3>💪 Inclusão Social</h3>
          <p>Atividades que fortalecem laços comunitários e acesso a direitos.</p>
        </article>
      </div>
    </section>

    <section class="stats-section">
      <h2>Nosso Impacto Até Hoje</h2>
      <div class="stats-container">
        <div class="stat-item"><span class="number">1200+</span><p>Famílias Apoiadas</p></div>
        <div class="stat-item"><span class="number">300+</span><p>Voluntários Ativos</p></div>
        <div class="stat-item"><span class="number">15+</span><p>Projetos em Andamento</p></div>
      </div>
    </section>
  `,

  projetos: `
    <section class="hero hero-projetos">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Nossos Projetos e Ações</h1>
        <p>Conheça as iniciativas que transformam vidas e veja como participar.</p>
      </div>
    </section>

    <section class="projects">
      <h2>Projetos em Andamento</h2>
      <div class="projects-container">

        <article class="project-card">
          <img src="img/humanitario.webp" alt="Ação humanitária" class="project-image">
          <div class="project-info">
            <h3>🤝 Ação Humanitária</h3>
            <p>Atendimento emergencial em comunidades com alta vulnerabilidade.</p>
          </div>
        </article>

        <article class="project-card">
          <img src="img/educacao.jpg" alt="Atividade de educação" class="project-image">
          <div class="project-info">
            <h3>📚 Educação Para Todos</h3>
            <p>Oficinas, reforço escolar e formação cidadã para crianças e jovens.</p>
          </div>
        </article>

        <article class="project-card">
          <img src="img/missao-removebg-preview.png" alt="Rede de apoio" class="project-image">
          <div class="project-info">
            <h3>🌐 Rede de Apoio</h3>
            <p>Conexão com serviços públicos, encaminhamentos e acompanhamento.</p>
          </div>
        </article>

      </div>
    </section>

    <section class="doe">
      <h2>Como Você Pode Ajudar</h2>
      <p>Contribua com doações financeiras, itens essenciais ou seu tempo como voluntário.</p>

      <div class="donate-options">
        <article class="donate-card">
          <h3>💰 Doação Financeira</h3>
          <p>Ajude a manter os projetos e ampliar nosso alcance.</p>
          <a href="#/cadastro" class="btn-secondary" data-route="/cadastro">Doar Agora</a>
        </article>

        <article class="donate-card">
          <h3>🛒 Doação de Itens</h3>
          <p>Alimentos, roupas, brinquedos e material escolar são bem-vindos.</p>
        </article>

        <article class="donate-card">
          <h3>⏰ Trabalho Voluntário</h3>
          <p>Doe suas habilidades e tempo. Toda ajuda é valiosa!</p>
          <a href="#/cadastro" class="btn-primary" data-route="/cadastro">Torne-se Voluntário</a>
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
      <form class="cadastro-form" id="formVoluntario" novalidate>
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" required>

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" inputmode="numeric" placeholder="000.000.000-00"
                 pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" required>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" inputmode="numeric" placeholder="(11) 99999-9999"
                 pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}" required>

          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" required>

          <label for="cep">CEP:</label>
          <input type="text" id="cep" inputmode="numeric" placeholder="00000-000"
                 pattern="\\d{5}-\\d{3}" required>

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" required>

          <label for="estado">Estado:</label>
          <select id="estado" required>
            <option value="">Selecione</option>
            <option>SP</option><option>RJ</option><option>MG</option><option>ES</option><option>PR</option><option>RS</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Área de Interesse</legend>
          <label for="area">Selecione uma área:</label>
          <select id="area" required>
            <option value="">Escolha uma opção</option>
            <option value="alimentacao">Apoio Alimentar</option>
            <option value="educacao">Educação e Oficinas</option>
            <option value="inclusao">Inclusão Social</option>
            <option value="administrativo">Apoio Administrativo</option>
          </select>

          <label for="mensagem">Mensagem (opcional):</label>
          <textarea id="mensagem" rows="4"></textarea>
        </fieldset>

        <button type="submit" class="btn-primary">Enviar Cadastro</button>
      </form>
    </section>

    <!-- Toast (feedback de envio) -->
    <div id="toast" style="
      position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%);
      background: #00a65a; color: #fff; padding: 12px 18px; border-radius: 8px;
      box-shadow: 0 8px 20px rgba(0,0,0,.2); font-weight: 600; display: none; z-index: 9999;">
      Cadastro enviado com sucesso!
    </div>
  `
};

/* ==========================
   ROTEADOR (HASH SPA)
   ========================== */
const mainEl = document.querySelector("main");
const routes = ["/home", "/projetos", "/cadastro"];

// Normaliza hash -> '/home' | '/projetos' | '/cadastro'
function parseHash() {
  const raw = location.hash.replace(/^#/, "");
  if (!raw || raw === "/") return "/home";
  const normalized = raw.startsWith("/") ? raw : `/${raw}`;
  return routes.includes(normalized) ? normalized : "/home";
}

// Carrega a rota no <main>
function render(route) {
  if (!mainEl) return;
  mainEl.classList.add("fade-out");
  const key = route.replace("/", "");
  const html = templates[key] || templates.home;

  setTimeout(() => {
    mainEl.innerHTML = html;
    mainEl.classList.remove("fade-out");
    mainEl.classList.add("fade-in");
    localStorage.setItem("rotaAtiva", route);
    window.scrollTo({ top: 0, behavior: "instant" });

    // Re-ativar handlers específicos de cada rota
    wireInternalLinks();
    if (route === "/cadastro") attachFormHandlers();

    setActiveNav(route);
  }, 160);
}

// Seta classe .active no menu de acordo com a rota
function setActiveNav(route) {
  const nav = document.getElementById("navMenu");
  if (!nav) return;
  nav.querySelectorAll("a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    const isIndex = href.includes("index.html") || href.endsWith("/") || href === "#/home" || href === "#";
    const isProj  = href.includes("projeto") || href === "#/projetos";
    const isCad   = href.includes("cadastro") || href === "#/cadastro";

    let match = false;
    if (route === "/home") match = isIndex;
    if (route === "/projetos") match = isProj;
    if (route === "/cadastro") match = isCad;

    a.classList.toggle("active", !!match);
  });
}

// Intercepta cliques em links internos e traduz para hash routes
function wireInternalLinks() {
  // Links com data-route nos templates
  document.querySelectorAll("[data-route]").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const r = a.getAttribute("data-route");
      if (r) location.hash = r;
    }, { once: true });
  });

  // Links do header que apontam para .html (compatibilidade com seu HTML)
  document.querySelectorAll('#navMenu a[href]').forEach(a => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href) return;
      // Traduz anchors para rotas
      if (href.includes("index.html")) { e.preventDefault(); location.hash = "/home"; }
      else if (href.includes("projeto")) { e.preventDefault(); location.hash = "/projetos"; }
      else if (href.includes("cadastro")) { e.preventDefault(); location.hash = "/cadastro"; }
    });
  });
}

/* ==========================
   FORMULÁRIO (MÁSCARAS + SUBMISSÃO)
   ========================== */
function attachFormHandlers() {
  const form = document.getElementById("formVoluntario");
  if (!form) return;

  // Máscaras simples (on-input) — sem libs externas
  const cpf = form.querySelector("#cpf");
  const tel = form.querySelector("#telefone");
  const cep = form.querySelector("#cep");

  const onlyDigits = (v) => v.replace(/\D/g, "");

  if (cpf) {
    cpf.addEventListener("input", () => {
      let v = onlyDigits(cpf.value).slice(0, 11);
      if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
      else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
      else if (v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/, "$1.$2");
      cpf.value = v;
    });
  }

  if (tel) {
    tel.addEventListener("input", () => {
      let v = onlyDigits(tel.value).slice(0, 11);
      if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
      else if (v.length > 0) v = v.replace(/(\d{0,2})/, "($1");
      tel.value = v;
    });
  }

  if (cep) {
    cep.addEventListener("input", () => {
      let v = onlyDigits(cep.value).slice(0, 8);
      if (v.length > 5) v = v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
      cep.value = v;
    });
  }

  // Submissão com validação nativa + toast e armazenamento local
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Coleta e salva um snapshot (demonstração de localStorage)
    const data = {
      nome: form.querySelector("#nome")?.value?.trim(),
      email: form.querySelector("#email")?.value?.trim(),
      cpf: form.querySelector("#cpf")?.value?.trim(),
      telefone: form.querySelector("#telefone")?.value?.trim(),
      nascimento: form.querySelector("#nascimento")?.value,
      endereco: form.querySelector("#endereco")?.value?.trim(),
      cep: form.querySelector("#cep")?.value?.trim(),
      cidade: form.querySelector("#cidade")?.value?.trim(),
      estado: form.querySelector("#estado")?.value,
      area: form.querySelector("#area")?.value,
      mensagem: form.querySelector("#mensagem")?.value?.trim(),
      ts: new Date().toISOString()
    };
    try {
      const registros = JSON.parse(localStorage.getItem("cadastrosVoluntarios") || "[]");
      registros.push(data);
      localStorage.setItem("cadastrosVoluntarios", JSON.stringify(registros));
    } catch { /* noop */ }

    // Feedback visual (toast)
    showToast("Cadastro enviado com sucesso!");

    // Limpa o formulário
    form.reset();
  });
}

// Toast simples
function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.cssText = `
      position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%);
      background: #00a65a; color: #fff; padding: 12px 18px; border-radius: 8px;
      box-shadow: 0 8px 20px rgba(0,0,0,.2); font-weight: 600; display: none; z-index: 9999;`;
    document.body.appendChild(toast);
  }
  toast.textContent = msg || "Tudo certo!";
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 2500);
}

/* ==========================
   ANIMAÇÕES DE TRANSIÇÃO
   ========================== */
(function injectFadeAnimations() {
  const style = document.createElement("style");
  style.textContent = `
    .fade-in { animation: fadeIn .25s ease-in; }
    .fade-out { animation: fadeOut .16s ease-out; }
    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    @keyframes fadeOut { from{opacity:1} to{opacity:0} }
  `;
  document.head.appendChild(style);
})();

/* ==========================
   INICIALIZAÇÃO DA SPA
   ========================== */
function go(route) {
  location.hash = route;
}

// Traduz cliques em anchors .html do header para rotas SPA (compat)
document.addEventListener("click", (e) => {
  const a = e.target.closest('#navMenu a[href], a[data-route]');
  if (!a) return;

  // Prioriza data-route quando existir
  const dr = a.getAttribute("data-route");
  if (dr) { e.preventDefault(); return go(dr); }

  const href = (a.getAttribute("href") || "").toLowerCase();
  if (!href) return;

  // Converte links antigos para hash routes
  if (href.includes("index.html")) { e.preventDefault(); go("/home"); }
  else if (href.includes("projeto")) { e.preventDefault(); go("/projetos"); }
  else if (href.includes("cadastro")) { e.preventDefault(); go("/cadastro"); }
  // Links externos/ancoras diferentes seguem normalmente
});

// Escuta mudanças de hash
window.addEventListener("hashchange", () => render(parseHash()));

// Carrega rota inicial
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("rotaAtiva");
  if (saved && routes.includes(saved)) {
    if (!location.hash) location.hash = saved;
  } else if (!location.hash) {
    location.hash = "/home";
  }
  render(parseHash());
});
