# Instruções para Conectar ao GitHub

## ✅ Status Atual do Projeto

- ✅ Git está inicializado
- ✅ Branch: `main`
- ✅ Todos os arquivos foram adicionados e commitados
- ✅ Commit criado com todas as novas funcionalidades
- ⚠️ Repositório remoto precisa ser criado no GitHub

## 📦 O que foi commitado

O commit inclui:
- Página de cardápio completo (`/cardapio`)
- Páginas legais (Política de Privacidade e Termos de Uso)
- Componente CookieConsent (LGPD compliance)
- WhatsApp FAB melhorado com seleção de unidade
- Navegação e Footer atualizados
- README atualizado

## 🚀 Passo 1: Criar o Repositório no GitHub

1. Acesse https://github.com/new
2. **Nome do repositório**: `Mamaafricalabonneboufe` (ou outro nome de sua preferência)
3. **Descrição**: `Site do Chef Sam - Mama Africa La Bonne Bouffe - Experiência Imersiva de Gastronomia Africana Autêntica`
4. Escolha **Público** ou **Privado**
5. **⚠️ IMPORTANTE**: **NÃO marque** nenhuma opção:
   - ❌ Não marque "Add a README file"
   - ❌ Não marque "Add .gitignore"
   - ❌ Não marque "Choose a license"
6. Clique em **"Create repository"**

## 🔗 Passo 2: Conectar o Repositório Local

Depois de criar o repositório no GitHub, execute os comandos abaixo no terminal:

### Opção A: Usando HTTPS (Recomendado)

```bash
# Remover o remote atual (se existir)
git remote remove origin

# Adicionar o novo repositório remoto (SUBSTITUA SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git

# Verificar se foi adicionado corretamente
git remote -v

# Enviar o código para o GitHub
git push -u origin main
```

**Nota**: Se solicitado, use um **Personal Access Token** ao invés de senha. Crie um em: https://github.com/settings/tokens

### Opção B: Usando SSH (Se você já configurou SSH keys)

```bash
# Remover o remote atual (se existir)
git remote remove origin

# Adicionar o repositório remoto (SUBSTITUA SEU_USUARIO pelo seu username do GitHub)
git remote add origin git@github.com:SEU_USUARIO/Mamaafricalabonneboufe.git

# Verificar se foi adicionado corretamente
git remote -v

# Enviar o código para o GitHub
git push -u origin main
```

## ✅ Passo 3: Verificar a Conexão

```bash
# Verificar remotes configurados
git remote -v
```

Deve mostrar algo como:
```
origin  https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git (fetch)
origin  https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git (push)
```

## 🔍 Troubleshooting

### Erro: "remote origin already exists"
Se você já tentou conectar antes, remova e adicione novamente:
```bash
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git
```

### Erro de autenticação HTTPS
- GitHub não aceita mais senhas via HTTPS
- Crie um **Personal Access Token** em: https://github.com/settings/tokens
- Use o token como senha quando solicitado
- Permissões necessárias: `repo` (acesso completo aos repositórios)

### Erro de autenticação SSH
- Configure suas SSH keys no GitHub
- Guia: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Verificar status atual
```bash
git status
git remote -v
git branch
git log --oneline -5
```

## 📋 Próximos Passos

Depois de conectar ao GitHub:

1. ✅ Verifique se todos os arquivos aparecem no repositório
2. ✅ Conecte ao Vercel para deploy automático
3. ✅ Configure GitHub Actions (opcional)
4. ✅ Adicione colaboradores (se necessário)
5. ✅ Configure branch protection (opcional)

## 📝 Comandos Úteis

```bash
# Ver histórico de commits
git log --oneline

# Ver status atual
git status

# Ver remotes configurados
git remote -v

# Fazer push de futuras alterações
git add .
git commit -m "Descrição das alterações"
git push
```
