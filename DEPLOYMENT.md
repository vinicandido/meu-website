# Guia de Deployment - Vinicius Candido Website

## Overview
Este é um projeto React + TypeScript construído com Vite. O projeto está pronto para deployment em produção.

## Estrutura do Projeto
- **React 19.2.3** com TypeScript
- **Vite** como build tool
- **Tailwind CSS** via CDN
- **Lucide React** para ícones

## Passos para Deployment

### 1. Build para Produção
```bash
npm run build
```
Este comando cria a pasta `dist/` com todos os arquivos otimizados para produção.

### 2. Arquivos Gerados
Após o build, você terá:
- `dist/index.html` - Arquivo HTML principal
- `dist/assets/index-*.js` - JavaScript bundle otimizado

### 3. Variáveis de Ambiente
O projeto utiliza a variável `GEMINI_API_KEY`. Configure no ambiente de produção:
```bash
export GEMINI_API_KEY=sua_chave_aqui
```

### 4. Opções de Deployment

#### Opção A: Hospedagem Estática (Recomendado)
Serve para: Netlify, Vercel, GitHub Pages, Surge.sh, etc.

1. Faça upload da pasta `dist/`
2. Configure a variável de ambiente `GEMINI_API_KEY`
3. Defina o diretório de publicação como `dist`

#### Opção B: Servidor Próprio
1. Copie a pasta `dist/` para o servidor
2. Use nginx, Apache ou outro servidor web para servir os arquivos
3. Configure as variáveis de ambiente

#### Opção C: Docker
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 5. Configurações de Domínio

#### Para Hospedagem Estática:
1. No painel da sua hospedagem, adicione seu domínio
2. Configure o DNS para apontar para os servidores da plataforma
3. Aguarde a propagação do DNS (até 48 horas)

#### Para Servidor Próprio:
```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    root /var/www/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 6. HTTPS (Obrigatório)
Configure SSL/TLS:
- Use Let's Encrypt (gratuito)
- Ou certificados da sua hospedagem

### 7. Performance (Opcional)
- Configure CDN se disponível
- Habilite gzip compression
- Configure cache headers adequados

## Comandos Úteis

### Testar localmente
```bash
npm run preview  # Serve os arquivos de produção localmente
```

### Verificar o build
```bash
npm run build
npm run preview
```

## Verificação Pós-Deployment
1. Acesse seu domínio
2. Verifique se todas as páginas funcionam
3. Teste em dispositivos móveis
4. Verifique o console do navegador para erros
5. Teste as funcionalidades que usam a API

## Suporte
Caso tenha problemas, verifique:
1. Se todos os arquivos da pasta `dist/` foram enviados
2. Se as variáveis de ambiente estão configuradas
3. Se o servidor está configurado para SPAs (Single Page Applications)
