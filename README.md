# Portfólio — Front-end Developer

Site de portfólio pessoal construído com **Vue 3** + **Vite**.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Personalizando o conteúdo

Todo o conteúdo do site (nome, bio, projetos, skills, links sociais) fica
centralizado em **`src/data.js`**. Edite esse arquivo para colocar suas
informações — nenhum outro arquivo precisa ser tocado para isso.

## Estrutura

```
src/
├── data.js              # conteúdo do site (edite aqui)
├── style.css             # tokens de design (cores, tipografia)
├── App.vue
└── components/
    ├── NavBar.vue
    ├── HeroSection.vue   # efeito de digitação no topo
    ├── AboutSection.vue
    ├── ProjectsSection.vue
    ├── SkillsSection.vue
    ├── ContactSection.vue
    └── SiteFooter.vue
```

## Build para produção

```bash
npm run build
```

Os arquivos finais vão para a pasta `dist/`.

## Publicando no GitHub Pages

1. No `vite.config.js`, adicione a propriedade `base` com o nome do seu
   repositório:

   ```js
   export default defineConfig({
     base: '/nome-do-repositorio/',
     plugins: [vue()],
   })
   ```

2. Rode `npm run build`.
3. Publique o conteúdo da pasta `dist/` na branch `gh-pages` (pode usar a
   extensão `gh-pages` do npm ou GitHub Actions).

Alternativa mais simples: publicar direto na **Vercel** ou **Netlify**,
conectando o repositório do GitHub — ambos detectam Vite automaticamente.
