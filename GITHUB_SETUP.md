# Instruções para Conectar ao GitHub

## 1. Criar o Repositório no GitHub

1. Acesse https://github.com/new
2. Nome: `Mamaafricalabonneboufe`
3. Descrição: `Site do Chef Sam - Experiência Imersiva de Gastronomia Africana Autêntica`
4. Escolha Público ou Privado
5. **NÃO marque** "Add a README file" (já temos um)
6. Clique em "Create repository"

## 2. Conectar o Repositório Local

Depois de criar o repositório, execute no terminal:

```bash
# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Homepage visual com seções Hero, Platter e Unidades"

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/Mamaafricalabonneboufe.git

# Ou se preferir usar SSH:
# git remote add origin git@github.com:SEU_USUARIO/Mamaafricalabonneboufe.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

## 3. Verificar a Conexão

```bash
git remote -v
```

Deve mostrar o repositório remoto configurado.
