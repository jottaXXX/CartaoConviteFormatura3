# Convite de Formatura - Turma 2025

Convite digital responsivo para formatura do Curso Técnico em Informática.

## 📋 Como publicar no GitHub Pages

### Opção 1: Via Interface do GitHub (Mais Fácil)

1. **Crie uma conta no GitHub** (se não tiver):
   - Acesse https://github.com
   - Clique em "Sign up" e siga as instruções

2. **Crie um novo repositório**:
   - Clique no botão "+" no canto superior direito
   - Selecione "New repository"
   - Nome do repositório: `convite-formatura` (ou qualquer nome)
   - Marque "Public"
   - Clique em "Create repository"

3. **Faça upload dos arquivos**:
   - Na página do repositório criado, clique em "uploading an existing file"
   - Arraste ou selecione TODOS os arquivos desta pasta:
     - `index.html`
     - `detalhes.html`
     - `styles.css`
     - `script.js`
   - Clique em "Commit changes"

4. **Ative o GitHub Pages**:
   - Vá em "Settings" (Configurações) do repositório
   - No menu lateral, clique em "Pages"
   - Em "Source", selecione "main" (ou "master")
   - Em "Folder", deixe "/ (root)"
   - Clique em "Save"

5. **Acesse seu site**:
   - Aguarde 2-3 minutos
   - O link estará disponível em: `https://seu-usuario.github.io/convite-formatura/`
   - Substitua "seu-usuario" pelo seu nome de usuário do GitHub

### Opção 2: Via Git (Para quem conhece terminal)

```bash
# 1. Inicialize o repositório
git init

# 2. Adicione os arquivos
git add .

# 3. Faça o primeiro commit
git commit -m "Adiciona convite de formatura"

# 4. Crie o repositório no GitHub e conecte
git remote add origin https://github.com/seu-usuario/convite-formatura.git

# 5. Envie os arquivos
git branch -M main
git push -u origin main

# 6. Ative o GitHub Pages nas configurações do repositório
```

## 🎨 Personalização

### Alterar informações do evento

Edite os arquivos HTML diretamente:

**index.html** (linha 62-66):
```html
<p class="card-date">16 de Dezembro de 2025</p>
```

**detalhes.html** (linhas 36-62):
```html
<p class="info-value">16 de Dezembro de 2025</p>
<p class="info-value">19:30</p>
<p class="info-value">Auditório da UFPI</p>
```

### Alterar link do Google Maps

**detalhes.html** (linha 91):
```html
<a href="https://maps.app.goo.gl/SEU-LINK-AQUI">
```

### Alterar cores

**styles.css** - Procure por:
- `#2FB0F0` (azul claro)
- `#3D4A8E` (azul escuro)
- `#5ba3d0` (azul médio)

E substitua pelas cores desejadas.

## 📱 Testando localmente

Basta abrir o arquivo `index.html` no navegador. Não precisa de servidor!

## 🌐 Domínio Personalizado (Opcional)

Se você tiver um domínio próprio (ex: `formatura2025.com.br`):

1. Crie um arquivo chamado `CNAME` (sem extensão) na raiz
2. Dentro dele, coloque apenas: `formatura2025.com.br`
3. Configure o DNS do domínio apontando para GitHub Pages

## 📞 Suporte

Se tiver dúvidas, veja a documentação oficial:
https://docs.github.com/pt/pages/getting-started-with-github-pages

## ✨ Recursos

- ✅ 100% HTML/CSS/JavaScript puro
- ✅ Sem dependências externas
- ✅ Responsivo (mobile e desktop)
- ✅ Animações suaves
- ✅ Acessível (WCAG)
- ✅ SEO otimizado
- ✅ Funciona offline após primeiro acesso

---

**Colégio Técnico de Bom Jesus - UFPI**  
Turma 2025 - Técnico em Informática