# Instruções para Conectar ao GitHub

## Status Atual
✅ Git está inicializado
✅ Branch: `main`
✅ Working tree limpo

## Passo 1: Criar o Repositório no GitHub

1. Acesse https://github.com/new
2. **Nome do repositório**: `Mamaafricalabonneboufe` (ou outro nome de sua preferência)
3. **Descrição**: `Site do Chef Sam - Mama Africa La Bonne Bouffe - Experiência Imersiva de Gastronomia Africana Autêntica`
4. Escolha **Público** ou **Privado**
5. **⚠️ IMPORTANTE**: **NÃO marque** nenhuma opção:
   - ❌ Não marque "Add a README file"
   - ❌ Não marque "Add .gitignore"
   - ❌ Não marque "Choose a license"
6. Clique em **"Create repository"**

## Passo 2: Conectar o Repositório Local

Depois de criar o repositório no GitHub, execute os comandos abaixo no terminal:

### Opção A: Usando HTTPS (Recomendado para iniciantes)

```bash
# Adicionar o repositório remoto (SUBSTITUA SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git

# Verificar se foi adicionado corretamente
git remote -v

# Enviar o código para o GitHub
git push -u origin main
```

### Opção B: Usando SSH (Se você já configurou SSH keys)

```bash
# Adicionar o repositório remoto (SUBSTITUA SEU_USUARIO pelo seu username do GitHub)
git remote add origin git@github.com:SEU_USUARIO/Mamaafricalabonneboufe.git

# Verificar se foi adicionado corretamente
git remote -v

# Enviar o código para o GitHub
git push -u origin main
```

## Passo 3: Verificar a Conexão

```bash
# Verificar remotes configurados
git remote -v
```

Deve mostrar algo como:
```
origin  https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git (fetch)
origin  https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git (push)
```

## Passo 4: Testar o Push

```bash
# Fazer uma pequena alteração e testar
echo "# Teste" >> README.md
git add README.md
git commit -m "Teste de conexão com GitHub"
git push
```

Se funcionar, você verá o código no GitHub!

## Troubleshooting

### Erro: "remote origin already exists"
Se você já tentou conectar antes, remova e adicione novamente:
```bash
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git
```

### Erro de autenticação
- Para HTTPS: Use um Personal Access Token ao invés de senha
- Para SSH: Configure suas SSH keys no GitHub

### Verificar se está tudo certo
```bash
git status
git remote -v
git branch
```

## Próximos Passos

Depois de conectar ao GitHub:
1. ✅ Conecte ao Vercel para deploy automático
2. ✅ Configure GitHub Actions (opcional)
3. ✅ Adicione colaboradores (se necessário)
