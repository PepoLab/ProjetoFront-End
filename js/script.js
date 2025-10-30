/* ======================================================
   SCRIPT.JS — SPA + Interações + Formulário + LocalStorage
   Projeto: Voluntários
   ====================================================== */

/* ==========================
   MENU MOBILE
   ========================== */
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu?.classList.toggle("active");
}

document.addEventListener("click", (e) => {
  if (e.target.matches("#navMenu a")) {
    document.getElementById("navMenu")?.classList.remove("active");
  }
});

/* ======================================================
   SPA — Templates
   ====================================================== */
const templates = {
  home: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>O Poder da Solidariedade em Ação</h1>
        <p>Junte-se à nossa causa! Transforme a realidade de famílias através da inclusão social, dignidade e apoio.</p>
        <a href="#/cadastro" class="btn-primary">Faça Sua Inscrição Agora</a>
      </div>
    </section>

    <section class="about">
      <div class="about-content">
        <div class="about-text">
          <h2>Nossa Missão</h2>
          <p>Somos uma organização sem fins lucrativos impulsionada pela paixão em ajudar. Atuamos diretamente na base, oferecendo suporte contínuo a famílias em situação de vulnerabilidade e promovendo autonomia e esperança.</p>
          <a href="#/projetos" class="btn-secondary">Conheça Nossos Projetos &rarr;</a>
        </div>
        <div class="about-image">
          <img src="img/missao-removebg-preview.png" alt="Nossa missão">
        </div>
      </div>
    </section>

    <section class="how-we-work">
      <h2>Como Geramos Impacto</h2>
      <div class="cards-container">
        <article class="card">
          <h3>🍲 Apoio Alimentar</h3>
          <p>Distribuímos cestas básicas e refeições nutritivas.</p>
        </article>
        <article class="card">
          <h3>👩‍🏫 Educação e Oficinas</h3>
          <p>Capacitação profissional, reforço escolar e cidadania.</p>
        </article>
        <article class="card">
          <h3>💪 Inclusão Social</h3>
          <p>Atividades comunitárias e acesso a serviços básicos.</p>
        </article>
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
      <div class="hero-overlay"></></div>
      <div class="hero-content">
        <h1>Nossos Projetos e Ações</h1>
        <p>Conheça as iniciativas que transformam vidas.</p>
        <a href="#/cadastro" class="btn-primary">Seja Voluntário</a>
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
          <img src="img/educacao.jpg" alt="Aulas voluntárias" class="project-image">
          <h3>📚 Educação para Todos</h3>
          <p>Oficinas e reforço escolar para crianças e jovens.</p>
        </article>

        <article class="project-card">
          <img src="img/fundocad.jpg" alt="Atividades comunitárias" class="project-image">
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
      <div id="tabelaVoluntarios"></div>
    </section>
  `
};

/* ======================================================
   SPA — Router
   ====================================================== */
const app = document.getElementById("app");

function route() {
  const hash = location.hash.replace("#/", "");
  return ["home", "projetos", "cadastro"].includes(hash) ? hash : "home";
}

function render(route) {
  app.innerHTML = templates[route];
  highlight(route);
  if (route === "cadastro") initForm();
}

function navigate(route) {
  location.hash = "#/" + route;
  render(route);
}

function highlight(route) {
  document.querySelectorAll("#navMenu a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#/${route}`);
  });
}

window.addEventListener("hashchange", () => render(route()));
document.addEventListener("DOMContentLoaded", () => render(route()));

/* ======================================================
   FORMULÁRIO COMPLETO — Máscaras + LocalStorage
   ====================================================== */
function initForm() {
  const form = document.getElementById("formVoluntario");
  if (!form) return;

  const onlyDigits = (v) => v.replace(/\D/g, "");

  const cpf = form.querySelector("#cpf");
  const tel = form.querySelector("#telefone");
  const cep = form.querySelector("#cep");

  // Máscara CPF
  cpf?.addEventListener("input", () => {
    let v = onlyDigits(cpf.value).slice(0, 11);
    if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
    else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
    else if (v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    cpf.value = v;
  });

  // Máscara Telefone
  tel?.addEventListener("input", () => {
    let v = onlyDigits(tel.value).slice(0, 11);
    if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    else if (v.length > 0) v = v.replace(/(\d{0,2})/, "($1");
    tel.value = v;
  });

  // Máscara CEP
  cep?.addEventListener("input", () => {
    let v = onlyDigits(cep.value).slice(0, 8);
    if (v.length > 5) v = v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    cep.value = v;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }

    const data = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      cpf: form.cpf.value.trim(),
      telefone: form.telefone.value.trim(),
      nascimento: form.nascimento.value,
      endereco: form.endereco.value.trim(),
      cep: form.cep.value.trim(),
      cidade: form.cidade.value.trim(),
      estado: form.estado.value,
      area: form.area.value,
      mensagem: form.mensagem.value.trim(),
      dataCadastro: new Date().toLocaleDateString()
    };

    const lista = JSON.parse(localStorage.getItem("voluntarios") || "[]");
    lista.push(data);
    localStorage.setItem("voluntarios", JSON.stringify(lista));

    const msg = document.getElementById("sucessMessage");
    msg.classList.add("show");
    msg.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => form.reset(), 2000);
    setTimeout(() => msg.classList.remove("show"), 3000);

    exibirVoluntarios();
  });

  exibirVoluntarios();
}

/* ======================================================
   EXIBE VOLUNTÁRIOS
   ====================================================== */
function exibirVoluntarios() {
  const lista = JSON.parse(localStorage.getItem("voluntarios") || "[]");
  const box = document.getElementById("tabelaVoluntarios");
  if (!box) return;

  if (lista.length === 0) {
    box.innerHTML = "<p>Nenhum voluntário cadastrado.</p>";
    return;
  }

  let html = `
    <table class="vol-table">
      <thead>
        <tr>
          <th>Nome</th><th>Email</th><th>CPF</th>
          <th>Telefone</th><th>Cidade</th><th>Estado</th>
          <th>Área</th><th>Data</th>
        </tr>
      </thead>
      <tbody>
  `;

  html += lista.map(v => `
    <tr>
      <td>${v.nome}</td><td>${v.email}</td><td>${v.cpf}</td>
      <td>${v.telefone}</td><td>${v.cidade}</td><td>${v.estado}</td>
      <td>${v.area}</td><td>${v.dataCadastro}</td>
    </tr>
  `).join("");

  html += "</tbody></table>";
  box.innerHTML = html;
}
