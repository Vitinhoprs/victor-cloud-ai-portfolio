# Victor Peres — Cloud & AI (Site Estático)

## Estrutura
```
victor-cloud-ai-portfolio/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ script.js
├─ img/
│  └─ og-image-1200x630.png
├─ favicon.svg
├─ robots.txt
├─ sitemap.xml
└─ 404.html
```

## Como rodar localmente
1. Baixe o `.zip` deste projeto e extraia.
2. Abra `index.html` no navegador **ou** use o VS Code com a extensão *Live Server* para auto-reload.

## Publicar (3 opções fáceis)
### 1) GitHub Pages
- Crie um repositório `victor-cloud-ai-portfolio`.
- Envie os arquivos (raiz).  
- Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
- Ative `Enforce HTTPS` quando disponível.

### 2) Netlify
- Faça login em https://app.netlify.com e clique em **Add new site → Deploy manually**.
- Arraste a pasta do projeto (zip extraído) para o Netlify.
- Em **Domain settings**, adicione seu domínio customizado e aponte os DNS.

### 3) Vercel
- Instale o CLI (`npm i -g vercel`) ou use a interface web.
- `vercel deploy` na pasta do projeto (framework: *Other*, output: `.`).
- Em **Domains**, adicione seu domínio customizado. Aponte os DNS para a Vercel.

## Domínio (Registro.br, GoDaddy, Hostinger…)
1. **Registre** um domínio (ex.: `victorperes.com.br`).  
2. No painel do registrador, entre em **DNS** e **aponte para** seu host:
   - **GitHub Pages**: use *A records* para os IPs do GitHub e um *CNAME* `www` → `seuusuario.github.io`.
   - **Netlify**: use o *CNAME* para o subdomínio gerado e opção de *Netlify DNS* se preferir.
   - **Vercel**: use *A/AAAA* e *CNAME* sugeridos pela Vercel.

> Dica: sempre ative **HTTPS** (SSL) gratuito que os hosts oferecem.

## SEO e Social
- `meta description`, `og:image`, `og:title` já adicionados em `index.html`.
- Edite `sitemap.xml` e `robots.txt` com **seu domínio real**.

## Boas práticas
- Otimize imagens (WebP/PNG comprimido).
- Mantenha `style.css` e `script.js` minificados em produção (opcional).
- Use *alt* em imagens reais que você adicionar.
