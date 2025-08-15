# Docker Setup - Psicanakarla

Este projeto inclui configurações Docker para desenvolvimento e produção.

## Arquivos Criados

- `Dockerfile` - Configuração multi-stage para build otimizado
- `docker-compose.yml` - Orquestração de serviços
- `.dockerignore` - Arquivos excluídos do build
- `nginx.conf` - Configuração do nginx para produção (opcional)

## Como Usar

### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento:

```bash
# Build e start do container de desenvolvimento
docker-compose --profile dev up --build

# Ou apenas start se já foi buildado
docker-compose --profile dev up

# Para rodar em background
docker-compose --profile dev up -d
```

A aplicação estará disponível em `http://localhost:3000`

### Produção

Para rodar o projeto em modo de produção:

```bash
# Build e start do container de produção
docker-compose --profile prod up --build

# Ou apenas start se já foi buildado
docker-compose --profile prod up

# Para rodar em background
docker-compose --profile prod up -d
```

### Com Nginx (Produção)

Para usar com nginx como proxy reverso:

```bash
# Criar diretório para certificados SSL (opcional)
mkdir ssl

# Build e start com nginx
docker-compose --profile prod --profile nginx up --build
```

### Comandos Úteis

```bash
# Parar todos os containers
docker-compose down

# Parar e remover volumes
docker-compose down -v

# Ver logs
docker-compose logs -f psicanakarla-dev
docker-compose logs -f psicanakarla-prod

# Executar comandos dentro do container
docker-compose exec psicanakarla-dev npm run lint
docker-compose exec psicanakarla-dev npm install nova-dependencia

# Rebuild sem cache
docker-compose build --no-cache
```

## Configurações

### Variáveis de Ambiente

As seguintes variáveis de ambiente estão configuradas:

- `NODE_ENV` - Define o ambiente (development/production)
- `NEXT_TELEMETRY_DISABLED` - Desabilita telemetria do Next.js
- `PORT` - Porta da aplicação (3000)

### Volumes

- `.:/app` - Código fonte (desenvolvimento)
- `/app/node_modules` - Dependências do Node.js
- `/app/.next` - Cache do Next.js

### Portas

- `3000` - Aplicação Next.js
- `80` - Nginx (quando usado)
- `443` - Nginx HTTPS (quando usado)

## Otimizações

### Multi-stage Build

O Dockerfile usa multi-stage build para:

1. **deps** - Instala dependências
2. **builder** - Build da aplicação
3. **runner** - Imagem final otimizada

### Cache de Dependências

As dependências são instaladas em um stage separado para aproveitar o cache do Docker.

### Usuário Não-root

A aplicação roda como usuário `nextjs` (não-root) para segurança.

## Troubleshooting

### Problemas Comuns

1. **Porta já em uso**: Verifique se a porta 3000 está livre
2. **Permissões**: Em alguns sistemas, pode ser necessário usar `sudo`
3. **Cache**: Use `--no-cache` para rebuild completo

### Logs

```bash
# Ver logs em tempo real
docker-compose logs -f

# Ver logs de um serviço específico
docker-compose logs -f psicanakarla-dev
```

### Limpeza

```bash
# Remover containers parados
docker container prune

# Remover imagens não utilizadas
docker image prune

# Limpeza completa
docker system prune -a
```

## SSL/HTTPS

Para configurar HTTPS:

1. Coloque seus certificados SSL em `./ssl/`
2. Descomente a seção HTTPS no `nginx.conf`
3. Use o profile `nginx` no docker-compose

```bash
docker-compose --profile prod --profile nginx up --build
```
