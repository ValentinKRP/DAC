(() => {
  const data = window.DAC_SITE_DATA;
  const root = document.getElementById("site");
  const pageKey = document.body.dataset.page || "home";
  const page =
    data.pages[pageKey] || data.categories[pageKey] || data.products[pageKey];

  if (!page || !root) {
    return;
  }

  document.title = `${page.title} | DAC`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && page.summary) {
    meta.setAttribute("content", page.summary);
  }

  root.innerHTML = `
    ${renderHeader()}
    <main class="page-shell">
      ${renderPage(page)}
    </main>
    ${renderFooter()}
  `;

  bindNavigation();
  setupReveal();

  function hrefFor(slug) {
    return slug === "home" ? "index.html" : `${slug}.html`;
  }

  function breadcrumbsFor(currentPage) {
    const items = [{ label: "Home", href: hrefFor("home") }];

    if (currentPage.kind === "category") {
      items.push({ label: "Gama de vehicule", href: hrefFor("gama-de-vehicule") });
      items.push({ label: currentPage.title });
      return items;
    }

    if (currentPage.kind === "product") {
      const category = data.categories[currentPage.category];
      items.push({ label: category.title, href: hrefFor(category.slug) });
      items.push({ label: currentPage.title });
      return items;
    }

    items.push({ label: currentPage.title });
    return items;
  }

  function activeFor(slug) {
    if (pageKey === slug) {
      return true;
    }

    if (page.kind === "product" && page.category === slug) {
      return true;
    }

    return false;
  }

  function renderHeader() {
    return `
      <header class="site-header">
        <div class="container header-bar">
          <a class="brandmark" href="index.html" aria-label="DAC">
            <span class="brandmark__title">DAC</span>
            <span class="brandmark__text">Vehicule comerciale electrice</span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
            Meniu
          </button>
          <nav class="main-nav" id="main-nav">
            ${data.nav
              .map((item) => {
                const activeClass = activeFor(item.slug) ? " is-active" : "";
                if (!item.children) {
                  return `<a class="nav-link${activeClass}" href="${item.href}">${item.label}</a>`;
                }

                return `
                  <div class="nav-group${activeClass}">
                    <a class="nav-link" href="${item.href}">${item.label}</a>
                    <div class="subnav">
                      <a class="subnav__title" href="${item.href}">Vezi categoria</a>
                      ${item.children
                        .map(
                          (child) => `
                            <a class="subnav__link${
                              pageKey === child.slug ? " is-active" : ""
                            }" href="${child.href}">
                              ${child.label}
                            </a>
                          `
                        )
                        .join("")}
                    </div>
                  </div>
                `;
              })
              .join("")}
          </nav>
        </div>
      </header>
    `;
  }

  function renderHero(currentPage) {
    const title = currentPage.kind === "home" ? currentPage.tagline : currentPage.title;
    const subtitle =
      currentPage.kind === "home" ? currentPage.summary : currentPage.tagline;
    const summary =
      currentPage.kind === "home"
        ? data.site.signature
        : currentPage.summary || data.site.summary;
    const panelItems =
      currentPage.heroMetrics ||
      currentPage.metrics ||
      [
        { value: "3", label: "categorii principale" },
        { value: "9", label: "modele prezentate" },
        { value: "Brașov", label: "asamblare planificată" }
      ];
    const breadcrumbMarkup =
      currentPage.kind === "home"
        ? ""
        : `
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            ${breadcrumbsFor(currentPage)
              .map((crumb, index, list) =>
                crumb.href && index < list.length - 1
                  ? `<a href="${crumb.href}">${crumb.label}</a>`
                  : `<span>${crumb.label}</span>`
              )
              .join("<span class=\"breadcrumb-sep\">/</span>")}
          </nav>
        `;

    const homeList =
      currentPage.kind === "home"
        ? `
          <ul class="hero-points">
            ${currentPage.heroItems
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
        `
        : "";

    const actions =
      currentPage.kind === "home"
        ? `
          <div class="hero-actions">
            <a class="button button--primary" href="gama-de-vehicule.html">Descoperă gama DAC</a>
            <a class="button button--ghost" href="contact.html">Contactează-ne</a>
          </div>
        `
        : `
          <div class="hero-actions">
            <a class="button button--primary" href="contact.html">Solicită informații</a>
            <a class="button button--ghost" href="gama-de-vehicule.html">Vezi toată gama</a>
          </div>
        `;

    return `
      <section class="hero reveal">
        <div class="container hero-layout">
          <div class="hero-copy">
            ${breadcrumbMarkup}
            <p class="eyebrow">${currentPage.kind === "home" ? data.site.name : data.site.name + " / " + currentPage.title}</p>
            <h1>${title}</h1>
            <p class="hero-subtitle">${subtitle}</p>
            <p class="hero-summary">${summary}</p>
            ${homeList}
            ${actions}
          </div>
          <aside class="hero-panel">
            <div class="hero-panel__inner">
              <p class="eyebrow">Construit pentru exploatare reală</p>
              <h2>${currentPage.kind === "product" ? currentPage.title : data.site.name}</h2>
              <div class="metric-grid">
                ${panelItems
                  .map(
                    (item) => `
                      <div class="metric-card">
                        <strong>${item.value}</strong>
                        <span>${item.label}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
          </aside>
        </div>
      </section>
    `;
  }

  function renderCards(items, kind = "card") {
    return items
      .map(
        (item) => `
          <article class="${kind}">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            ${item.href ? `<a class="text-link" href="${item.href}">${item.actionLabel || "Detalii"}</a>` : ""}
          </article>
        `
      )
      .join("");
  }

  function renderCategoryCards(slugs) {
    return slugs
      .map((slug) => {
        const category = data.categories[slug];
        return `
          <article class="link-card">
            <p class="eyebrow">${category.productSlugs.length} modele</p>
            <h3>${category.title}</h3>
            <p>${category.summary}</p>
            <a class="button button--inline" href="${hrefFor(slug)}">Vezi categoria</a>
          </article>
        `;
      })
      .join("");
  }

  function renderProductCards(slugs) {
    return slugs
      .map((slug) => {
        const product = data.products[slug];
        return `
          <article class="link-card">
            <p class="eyebrow">${product.tagline}</p>
            <h3>${product.title}</h3>
            <p>${product.summary}</p>
            <ul class="mini-stats">
              ${product.metrics
                .slice(0, 3)
                .map((item) => `<li><strong>${item.value}</strong><span>${item.label}</span></li>`)
                .join("")}
            </ul>
            <a class="button button--inline" href="${hrefFor(slug)}">Deschide pagina modelului</a>
          </article>
        `;
      })
      .join("");
  }

  function renderList(items) {
    return `
      <ul class="feature-list">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }

  function renderSection(title, body, extraClass = "") {
    return `
      <section class="section-shell reveal ${extraClass}">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">${data.site.name}</p>
            <h2>${title}</h2>
          </div>
          <div class="rich-text">
            ${body}
          </div>
        </div>
      </section>
    `;
  }

  function renderPage(currentPage) {
    switch (currentPage.kind) {
      case "home":
        return renderHome(currentPage);
      case "overview":
        return renderOverview(currentPage);
      case "category":
        return renderCategory(currentPage);
      case "product":
        return renderProduct(currentPage);
      case "content":
        return renderContentPage(currentPage);
      case "history":
        return renderHistory(currentPage);
      case "service":
        return renderService(currentPage);
      case "contact":
        return renderContact(currentPage);
      default:
        return renderSection("DAC", `<p>${data.site.summary}</p>`);
    }
  }

  function renderHome(currentPage) {
    return `
      ${renderHero(currentPage)}
      ${renderSection(
        "Autovehicule DAC S.A.",
        currentPage.intro.map((paragraph) => `<p>${paragraph}</p>`).join("")
      )}
      <section class="section-shell reveal">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Gama DAC</p>
            <h2>Vehicule comerciale electrice pentru aplicații profesionale</h2>
          </div>
          <div class="card-grid">
            ${renderCategoryCards(currentPage.categorySlugs)}
          </div>
        </div>
      </section>
      <section class="section-shell reveal">
        <div class="container split-layout">
          <div>
            <div class="section-heading">
              <p class="eyebrow">Electrificare</p>
              <h2>Avantaje operaționale clare pentru flote</h2>
            </div>
            <p class="lead-copy">
              Electrificarea transportului comercial devine o decizie economică tot mai clară pentru operatorii profesioniști. În aplicațiile potrivite, vehiculele electrice pot aduce beneficii măsurabile în cost, disponibilitate și predictibilitate.
            </p>
          </div>
          <div>
            ${renderList(currentPage.electrificationBenefits)}
          </div>
        </div>
      </section>
      ${renderSection(
        "Despre DAC",
        currentPage.about.map((paragraph) => `<p>${paragraph}</p>`).join("")
      )}
      <section class="section-shell reveal">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Modele reprezentative</p>
            <h2>Platforme gândite pentru segmente distincte</h2>
          </div>
          <div class="card-grid">
            ${renderProductCards(currentPage.featuredProducts)}
          </div>
        </div>
      </section>
      ${renderCtaBand()}
    `;
  }

  function renderOverview(currentPage) {
    return `
      ${renderHero(currentPage)}
      ${renderSection(
        "Portofoliu DAC",
        currentPage.intro.map((paragraph) => `<p>${paragraph}</p>`).join("")
      )}
      <section class="section-shell reveal">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Logica de gamă</p>
            <h2>Cum este construită oferta DAC</h2>
          </div>
          <div class="card-grid">
            ${renderCards(currentPage.pillars)}
          </div>
        </div>
      </section>
      <section class="section-shell reveal">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Categorii</p>
            <h2>Structura principală a site-ului și gamei</h2>
          </div>
          <div class="card-grid">
            ${renderCategoryCards(currentPage.categorySlugs)}
          </div>
        </div>
      </section>
      ${renderCtaBand()}
    `;
  }

  function renderCategory(currentPage) {
    return `
      ${renderHero(currentPage)}
      ${renderSection(
        "Poziționare categorie",
        currentPage.intro.map((paragraph) => `<p>${paragraph}</p>`).join("")
      )}
      <section class="section-shell reveal">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Valoare DAC</p>
            <h2>Ce definește această categorie</h2>
          </div>
          <div class="card-grid">
            ${renderCards(currentPage.valueCards)}
          </div>
        </div>
      </section>
      <section class="section-shell reveal">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Modele</p>
            <h2>Vehiculele din categorie</h2>
          </div>
          <div class="card-grid">
            ${renderProductCards(currentPage.productSlugs)}
          </div>
        </div>
      </section>
      ${renderCtaBand()}
    `;
  }

  function renderProduct(currentPage) {
    const siblings = data.categories[currentPage.category].productSlugs.filter(
      (slug) => slug !== currentPage.slug
    );

    return `
      ${renderHero(currentPage)}
      <section class="section-shell reveal">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Structură produs DAC</p>
            <h2>Poziționare, aplicații și argument comercial</h2>
          </div>
          <div class="card-grid card-grid--dense">
            ${renderCards(currentPage.details)}
          </div>
        </div>
      </section>
      <section class="section-shell reveal">
        <div class="container split-layout">
          <div>
            <div class="section-heading">
              <p class="eyebrow">Aplicații țintă</p>
              <h2>Unde livrează valoare modelul</h2>
            </div>
            ${renderList(currentPage.applications)}
          </div>
          <div>
            <div class="section-heading">
              <p class="eyebrow">Descriere tehnică</p>
              <h2>Date cheie pentru evaluare</h2>
            </div>
            <p class="lead-copy">${currentPage.technicalDescription}</p>
          </div>
        </div>
      </section>
      <section class="section-shell reveal">
        <div class="container split-layout">
          <div>
            <div class="section-heading">
              <p class="eyebrow">Caracteristici principale</p>
              <h2>Specificații relevante</h2>
            </div>
            ${renderList(currentPage.specifications)}
          </div>
          <div>
            <div class="section-heading">
              <p class="eyebrow">Beneficii</p>
              <h2>Ce câștigă operatorul</h2>
            </div>
            ${renderList(currentPage.operatorBenefits)}
          </div>
        </div>
      </section>
      <section class="section-shell reveal">
        <div class="container split-layout">
          <div>
            <div class="section-heading">
              <p class="eyebrow">${currentPage.secondaryTitle}</p>
              <h2>${currentPage.secondaryTitle}</h2>
            </div>
            ${renderList(currentPage.secondaryItems)}
          </div>
          <div>
            <div class="section-heading">
              <p class="eyebrow">${currentPage.tertiaryTitle || "Contact"}</p>
              <h2>${currentPage.tertiaryTitle || "Discută aplicația ta cu DAC"}</h2>
            </div>
            ${
              currentPage.tertiaryItems
                ? renderList(currentPage.tertiaryItems)
                : `<p class="lead-copy">Pentru informații comerciale, fișe tehnice și configurări dedicate, echipa DAC poate continua discuția direct prin pagina de contact.</p>`
            }
          </div>
        </div>
      </section>
      ${
        siblings.length
          ? `
            <section class="section-shell reveal">
              <div class="container">
                <div class="section-heading">
                  <p class="eyebrow">Modele conexe</p>
                  <h2>Explorează și restul categoriei</h2>
                </div>
                <div class="card-grid">
                  ${renderProductCards(siblings)}
                </div>
              </div>
            </section>
          `
          : ""
      }
      ${renderCtaBand()}
    `;
  }

  function renderContentPage(currentPage) {
    return `
      ${renderHero(currentPage)}
      ${renderSection(
        currentPage.title,
        currentPage.lead.map((paragraph) => `<p>${paragraph}</p>`).join("")
      )}
      ${currentPage.sections
        .map(
          (section) => `
            <section class="section-shell reveal">
              <div class="container">
                <div class="section-heading">
                  <p class="eyebrow">${data.site.name}</p>
                  <h2>${section.title}</h2>
                </div>
                <div class="rich-text">
                  ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                </div>
                ${
                  section.people
                    ? `
                      <div class="card-grid team-grid">
                        ${section.people
                          .map(
                            (person) => `
                              <article class="team-card">
                                <h3>${person.name}</h3>
                                <p>${person.role}</p>
                              </article>
                            `
                          )
                          .join("")}
                      </div>
                    `
                    : ""
                }
              </div>
            </section>
          `
        )
        .join("")}
      ${renderCtaBand()}
    `;
  }

  function renderHistory(currentPage) {
    return `
      ${renderHero(currentPage)}
      ${renderSection(
        "Evoluția DAC",
        currentPage.lead.map((paragraph) => `<p>${paragraph}</p>`).join("")
      )}
      <section class="section-shell reveal">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Cronologie</p>
            <h2>Reperele care definesc marca</h2>
          </div>
          <div class="timeline">
            ${currentPage.timeline
              .map(
                (item) => `
                  <article class="timeline-item">
                    <span class="timeline-marker">${item.marker}</span>
                    <div class="timeline-card">
                      <h3>${item.title}</h3>
                      <p>${item.text}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
      ${renderCtaBand()}
    `;
  }

  function renderService(currentPage) {
    return `
      ${renderHero(currentPage)}
      ${renderSection(
        "Suport și pregătire pentru rețeaua service",
        currentPage.lead.map((paragraph) => `<p>${paragraph}</p>`).join("")
      )}
      <section class="section-shell reveal">
        <div class="container">
          <div class="status-banner">
            <strong>Actualizare în curs</strong>
            <span>${data.site.serviceNote}</span>
          </div>
          <div class="card-grid">
            ${renderCards(currentPage.cards)}
          </div>
        </div>
      </section>
      ${renderCtaBand()}
    `;
  }

  function renderContact(currentPage) {
    return `
      ${renderHero(currentPage)}
      ${renderSection(
        "Intră în legătură cu DAC",
        currentPage.lead.map((paragraph) => `<p>${paragraph}</p>`).join("")
      )}
      <section class="section-shell reveal">
        <div class="container">
          <div class="card-grid">
            ${renderCards(currentPage.cards, "contact-card")}
          </div>
        </div>
      </section>
      <section class="section-shell reveal">
        <div class="container split-layout">
          <div>
            <div class="section-heading">
              <p class="eyebrow">Date rapide</p>
              <h2>Canale principale de contact</h2>
            </div>
            ${renderList([
              `Email: ${data.site.email}`,
              `Telefon: ${data.site.phones.join(" / ")}`,
              `Adresă: ${data.site.address}`,
              data.site.serviceNote
            ])}
          </div>
          <div>
            <div class="section-heading">
              <p class="eyebrow">Harta</p>
              <h2>Sediu și punct de întâlnire</h2>
            </div>
            <p class="lead-copy">
              Adresa curentă folosită în acest site este pregătită cu link direct către Google Maps pentru întâlniri, discuții comerciale și prezentări de produs.
            </p>
            <a class="button button--primary" href="${data.site.mapUrl}" target="_blank" rel="noreferrer">Deschide locația în Maps</a>
          </div>
        </div>
      </section>
    `;
  }

  function renderCtaBand() {
    return `
      <section class="cta-band reveal">
        <div class="container cta-band__inner">
          <div>
            <p class="eyebrow">Call to action DAC</p>
            <h2>Contactează-ne pentru specificații, aplicații și configurări dedicate</h2>
          </div>
          <div class="hero-actions">
            <a class="button button--primary" href="contact.html">Solicită informații</a>
            <a class="button button--ghost" href="service.html">Vezi service</a>
          </div>
        </div>
      </section>
    `;
  }

  function renderFooter() {
    return `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <p class="eyebrow">DAC</p>
            <h2>${data.site.headline}</h2>
            <p>${data.site.summary}</p>
          </div>
          <div>
            <h3>Linkuri rapide</h3>
            <ul class="footer-links">
              <li><a href="gama-de-vehicule.html">Gama de vehicule</a></li>
              <li><a href="camioane.html">Camioane</a></li>
              <li><a href="vehicule-speciale.html">Vehicule speciale</a></li>
              <li><a href="autobuze-electrice.html">Autobuze electrice</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul class="footer-links">
              <li><a href="mailto:${data.site.email}">${data.site.email}</a></li>
              <li><a href="tel:+40730072620">${data.site.phones.join(" / ")}</a></li>
              <li><a href="${data.site.mapUrl}" target="_blank" rel="noreferrer">${data.site.address}</a></li>
            </ul>
          </div>
        </div>
        <div class="container footer-meta">
          <span>${new Date().getFullYear()} Autovehicule DAC S.A.</span>
          <span>${data.site.signature}</span>
        </div>
      </footer>
    `;
  }

  function bindNavigation() {
    const button = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");
    if (!button || !nav) {
      return;
    }

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open");
    });
  }

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
  }
})();
