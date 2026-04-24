# 🌿 O Jardineiro do Bairro
## Landing Page Premium de Jardinagem & Paisagismo

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5)](https://developer.mozilla.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)](https://developer.mozilla.org/)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google)](https://fonts.google.com/)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD9?style=flat&logo=fontawesome)](https://fontawesome.com/)
[![License](https://img.shields.io/badge/License-Academic-blue?style=flat)](LICENSE)

> **Projeto Front-End ATEC TPSI-CAS-0725**
>
> Landing page para empresa de jardinagem e arquitetura paisagista em Lisboa. Serviços de elite: jardins verticais, terrários, paisagismo residencial e comercial. Caso real com necessidade de presença digital otimizada para conversão.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológico](#-stack-tecnológico)
- [Melhorias Implementadas](#-melhorias-implementadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Analytics & SEO](#-analytics--seo)
- [Setup Local](#-setup-local)
- [Desenvolvimento](#-desenvolvimento)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🌿 Sobre o Projeto

Landing page premium para uma empresa de jardinagem e paisagismo em Lisboa. O objetivo foi criar uma experiência web moderna e profissional, aplicando técnicas de Front-End e UX/UI com foco em conversão:

- **Design Premium** — Paleta verde/amarela premium, tipografia serifada
- **Responsivo** — Mobile-first com breakpoints em 768px e 1024px
- **Conversion-focused** — CTAs estratégicos, botões flutuantes
- **Performance** — Lazy loading, otimização de imagens
- **SEO** — Meta tags, Schema.org, semântica HTML5

### Diferenciais

| Recurso | Descrição |
|---------|-----------|
| 🌱 Jardins Verticais | Sistemas modulares de paredes verdes |
| 🎨 Terrários Artísticos | Criações em vidro com musgos e suculentas |
| 💧 Smart Irrigation | Sistemas de rega inteligentes |
| ✂️ Topiaria | Poda artística e ornamental |

---

## ✨ Funcionalidades

### UI/UX

- **Design Responsivo** — Mobile-first, 3 breakpoints
- **Hero Section** — Imagem de fundo com CTAs
- **Smooth Scroll** — Navegação antara secções
- **Animações CSS** — Hover effects, transições suaves
- **Menu Mobile** — Toggle com JavaScript Vanilla
- **Tipografia** — Playfair Display (títulos) + DM Sans (corpo)

### Secções

- **Diferenciais** — 3 pilares de valor
- **Serviços** — 6 serviços em cards interativos
- **Portfolio** — Projetos com overlays informativos
- **Testemunhos** — Grid com avaliações 5★ 
- **FAQ** — Acordeão HTML `<details>`
- **Newsletter** — Lead magnet (guia de plantas)
- **Contacto** — Formulário + canais diretos

### Formulários & Interação

- **Validação** — Campos obrigatórios, email, telefone PT
- **Feedback Visual** — Mensagens de sucesso/erro
- **CTA Tracking** — Eventos para analytics
- **WhatsApp Flutuante** — Botão permanente mobile

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **HTML5** | - | Semântica para SEO |
| **CSS3** | - | Flexbox, Grid, @keyframes |
| **JavaScript** | ES6+ | Interatividade vanilla |
| **Google Fonts** | - | DM Sans, Playfair Display |
| **Font Awesome** | 6.4 | Ícones vetoriais |
| **Schema.org** | - | Dados estruturados (JSON-LD) |
| **GA4** | - | Google Analytics |
| **Facebook Pixel** | - | Remarketing |

---

## 🚀 Melhorias Implementadas

### ✅ SEO & Dados Estruturados

- [x] Meta tags: description, keywords, Open Graph, Twitter Card
- [x] Canonical tag
- [x] Schema.org LocalBusiness (JSON-LD)
- [x] Schema.org FAQPage (JSON-LD)
- [x] Alt text em todas as imagens

### ✅ Performance

- [x] Lazy loading em imagens below-the-fold
- [x] Otimização de carregamento

### ✅ Marketing Digital

- [x] Google Analytics 4 (ID placeholder: `G-XXXXXXXXXX`)
- [x] Facebook Pixel (ID placeholder: `1234567890123456`)
- [x] Tracking de cliques em CTAs
- [x] Tracking de formulário
- [x] Tracking WhatsApp

### ✅ Acessibilidade (WCAG 2.1 AA)

- [x] Labels associados aos campos
- [x] ARIA labels em botões e links
- [x] Foco visível em elementos interativos
- [x] Validação de formato português (+351)

### ✅ Funcionalidade

- [x] Formulário com validação reforçada
- [x] Campo de telefone obrigatório com pattern PT
- [x] FAQ expandido (6 perguntas)
- [x] Transparência de preços
- [x] Aviso de localização nos testemunhos

---

## 📁 Estrutura do Projeto

```
Jardineiro do Bairro/
├── index.html              # Landing page principal
├── style.css             # Estilos CSS (1143 linhas)
├── script.js             # JavaScript (interatividade)
├── Imagens/              # Recursos visuais
└── README.md             # Documentação
```

---

## 📊 Analytics & SEO

### Google Analytics 4

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Eventos Rastreados

| Evento | Trigger |
|--------|----------|
| `cta_click` | Clique em Pedir Orçamento |
| `phone_click` | Clique em telefone |
| `whatsapp_click` | Clique em WhatsApp |
| `generate_lead` | Submissão de formulário |

### Schema.org Implementation

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "O Jardineiro do Bairro",
  "telephone": "+351912345678",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lisboa",
    "addressCountry": "PT"
  }
}
```

---

## 🚀 Setup Local

### Pré-requisitos

- **Editor de código** — VS Code, Sublime Text
- **Browser** — Chrome, Firefox, Edge
- **Git** (opcional)

### Executar Localmente

```bash
# 1. Clonar ou transferir ficheiros

# 2. Abrir index.html no browser
#    (duplo clique ou arrastar para o browser)

# NÃO requer npm install ou servidor
# Projeto puramente estático
```

### Configuração de Analytics

Para ativar o tracking, substituir os IDs nos ficheiros:

```html
<!-- index.html - Linha 33-34 -->
<script src="https://www.googletagmanager.com/gtag/js?id=G-ID-REAL"></script>
<script>gtag('config', 'G-ID-REAL');</script>
```

```html
<!-- index.html - Linha 47 -->
fbq('init', 'FACEBOOK-PIXEL-ID');
```

---

## 💻 Desenvolvimento

### Regras de Código

```
✔ Semântica HTML5: <header>, <main>, <section>, <article>
✔ Variáveis CSS: --primary, --accent, --shadow-*
✔ Classes BEM: .servico-card, .servico-card__img
✔ JavaScript Vanilla: sem jQuery ou frameworks
✔ Prefixing CSS: -webkit-, -moz-
```

### Convenções

- **CSS** — Mobile-first, variáveis, Flexbox/Grid
- **JS** — ES6+, event listeners
- **Imagens** — lazy loading em below-the-fold
- **ARIA** — Labels em elementos interativos

---

## 🤝 Contribuição

1. Fork o repositório
2. Criar branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit das alterações (`git commit -m 'Adicionar nova funcionalidade'`)
4. Push para o branch (`git push origin feature/nova-funcionalidade`)
5. Abrir Pull Request

### Boas Práticas

- Manter a estrutura mobile-first
- Usar variáveis CSS para cores
- Testar em múltiplos breakpoints
- Manter compatibilidade com browsers modernos

---

## 📄 Licença

Projeto académico desenvolvido para **ATEC TPSI-CAS-0725**
— Curso de Especialização Tecnológica em Técnicas e Programação de Sistemas de Informação.

---

<div align="center">

**Made with 🌿 for Jardineiro do Bairro**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5)](https://developer.mozilla.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)](https://developer.mozilla.org/)

</div>