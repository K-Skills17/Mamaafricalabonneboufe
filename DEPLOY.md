# Guia de Deploy para Vercel

## Configuração do Projeto

Este projeto é um **Next.js 14** com TypeScript e está configurado para deploy automático na Vercel.

## Opção 1: Deploy via Interface Web (Recomendado)

### Passo 1: Preparar o Repositório
1. Certifique-se de que seu código está no GitHub, GitLab ou Bitbucket
2. Faça commit de todas as alterações:
   ```bash
   git add .
   git commit -m "Preparar para deploy"
   git push origin main
   ```

### Passo 2: Conectar ao Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub/GitLab/Bitbucket
3. Clique em **"Add New Project"**
4. Selecione o repositório do projeto
5. A Vercel detectará automaticamente que é um projeto Next.js

### Passo 3: Configurações do Projeto
A Vercel detectará automaticamente:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**Você pode deixar tudo como está detectado automaticamente!**

### Passo 4: Variáveis de Ambiente (se necessário)
Se você tiver variáveis de ambiente, adicione-as na seção "Environment Variables" antes de fazer o deploy.

### Passo 5: Deploy
1. Clique em **"Deploy"**
2. Aguarde o build completar (geralmente 2-5 minutos)
3. Seu site estará online!

## Opção 2: Deploy via CLI

### Instalação da CLI
```bash
npm i -g vercel
```

### Login
```bash
vercel login
```

### Deploy
```bash
# Deploy de produção
vercel --prod

# Ou apenas
vercel
```

## Configurações Importantes

### Arquivos Criados
- ✅ `vercel.json` - Configuração do projeto (opcional, mas recomendado)
- ✅ `.vercelignore` - Arquivos a ignorar no deploy
- ✅ `next.config.js` - Otimizado para produção

### Região do Servidor
O projeto está configurado para usar a região **São Paulo (gru1)** para melhor performance no Brasil.

### Otimizações Aplicadas
- ✅ Compressão habilitada
- ✅ Headers de segurança otimizados
- ✅ Imagens otimizadas com Next.js Image

## Pós-Deploy

### Domínio Personalizado
1. Vá em **Settings** > **Domains**
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções da Vercel

### Deploys Automáticos
- ✅ Cada push na branch `main` gera um novo deploy
- ✅ Pull Requests geram preview deployments
- ✅ Deploys são instantâneos e sem downtime

## Troubleshooting

### Build Fails
- Verifique se todas as dependências estão no `package.json`
- Certifique-se de que não há erros de TypeScript (`npm run build` localmente)
- Verifique os logs de build na Vercel

### Imagens não Carregam
- Certifique-se de que as imagens estão na pasta `public/`
- Verifique os caminhos das imagens no código

### Erro de Variáveis de Ambiente
- Adicione todas as variáveis necessárias em **Settings** > **Environment Variables**

## Comandos Úteis

```bash
# Build local para testar
npm run build
npm start

# Ver logs do deploy
vercel logs

# Listar projetos
vercel ls
```

## Suporte

Para mais informações, consulte a [documentação oficial da Vercel](https://vercel.com/docs).
