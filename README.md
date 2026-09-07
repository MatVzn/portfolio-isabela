# Portfólio — Isabela Rodrigues Guimarães

Site de uma página em **React + Vite + Tailwind CSS**, com o conteúdo em
**português, inglês e francês**.

O idioma é escolhido automaticamente pelo idioma do navegador de quem visita
(português como padrão) e pode ser trocado a qualquer momento nos botões
`PT · EN · FR`. A escolha fica salva no navegador.

---

## Rodar no seu computador

Precisa ter o [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

```bash
npm install     # instala as dependências (só na primeira vez)
npm run dev     # abre o site em http://localhost:5173
npm run build   # gera a versão final na pasta dist/
npm run preview # testa a versão final localmente
```

---

## Onde editar cada coisa

| O que você quer mudar | Arquivo |
| --- | --- |
| **Todos os textos, nos três idiomas** | `src/content/site.js` |
| E-mail, telefone, LinkedIn | `src/content/site.js` → `profile` |
| Fotos | `src/assets/retrato.jpg` e `src/assets/retrato-2.jpg` |
| Currículo em PDF | `src/assets/curriculo-isabela-guimaraes.pdf` |
| Cores e fontes | `src/index.css` |
| Estrutura e ordem das seções | `src/App.jsx` |
| Cada seção, individualmente | `src/components/` |

### Adicionar uma experiência nova

Em `src/content/site.js`, na lista `experiences`, copie um bloco inteiro
(de `{` até `},`) e cole no **topo** da lista. A ordem da lista é a ordem em
que as experiências aparecem na página.

```js
{
  id: 'nome-curto-sem-espaco',
  org: 'Nome do escritório',
  location: { pt: 'Rio de Janeiro, Brasil', en: 'Rio de Janeiro, Brazil', fr: 'Rio de Janeiro, Brésil' },
  period: { pt: '2027 — atual', en: '2027 — present', fr: '2027 — aujourd’hui' },
  role:   { pt: 'Estagiária — Área', en: 'Intern — Area', fr: 'Stagiaire — domaine' },
  description: {
    pt: 'Um parágrafo descrevendo a atuação.',
    en: 'One paragraph describing the role.',
    fr: 'Un paragraphe décrivant le poste.',
  },
  tags: {
    pt: ['Etiqueta', 'Outra'],
    en: ['Tag', 'Another'],
    fr: ['Étiquette', 'Autre'],
  },
},
```

### Outras listas do mesmo arquivo

- `hero` — as três palavras do topo, o nome em três linhas, o resumo, os
  botões e os três números (experiências / idiomas / graduações).
- `about` — os parágrafos do "Sobre" e as etiquetas de áreas de interesse.
- `education` e `courses` — graduações e formação complementar.
- `academic` — os itens que abrem e fecham na seção "Pesquisa".
- `spokenLanguages` — idiomas e a altura da barrinha (`percent`).
- `toolGroups` — ferramentas e sistemas.
- `contact` — o texto da última seção.

### Trocar as fotos

Substitua os arquivos em `src/assets/` mantendo os mesmos nomes. A foto de
abertura funciona melhor quadrada; a foto da seção "Sobre", em retrato (4:5).

### Trocar o currículo

Substitua `src/assets/curriculo-isabela-guimaraes.pdf` mantendo o nome do
arquivo. O PDF fica embutido no site, então o botão de download funciona mesmo
sem servidor.

---

## Publicar

O build gera **um único arquivo**, `dist/index.html`, com CSS, JavaScript,
fotos e PDF embutidos. Isso funciona em qualquer hospedagem.

### Vercel

1. Suba a pasta para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com), clique em *Add New → Project* e escolha
   o repositório.
3. A Vercel reconhece o Vite sozinha (build: `npm run build`, saída: `dist`).
   É só confirmar.

### Netlify

Mesma ideia: comando de build `npm run build`, pasta publicada `dist`.

### GitHub Pages ou qualquer outro lugar

Rode `npm run build` e envie o arquivo `dist/index.html`. Ele funciona sozinho,
inclusive aberto direto do computador com dois cliques.

---

## Acessibilidade e detalhes

- Tema claro e escuro automáticos, conforme a preferência do sistema.
- Navegação por teclado com foco visível e link "ir para o conteúdo".
- Animações reduzidas quando o sistema pede (`prefers-reduced-motion`).
- Título e descrição da página mudam junto com o idioma.
