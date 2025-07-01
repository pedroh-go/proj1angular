# Documentação do Projeto

Este repositório contém o código e as instruções para desenvolvimento, testes e execução da aplicação full stack com Angular (frontend) e Spring Boot (backend), utilizando Docker.

---

## 3. Controle de Versões (Git)

### 3.1 Projeto 1

- **Branch principal:** `main`
- **Branches secundárias:** Crie uma nova branch para **cada nova funcionalidade ou correção**.
- **Após testar a nova branch**, faça o merge com a `main`.

### Resumo rápido dos comandos Git

```bash
# 1. A partir da `main` atualizada, crie uma nova branch
git checkout main
git pull origin main
git checkout -b nome-da-nova-branch

# 2. Trabalhe nela e faça commits
git add .
git commit -m "feat: adiciona animação no login"
git push origin nome-da-nova-branch

# 3. Ao final, caso esteja tudo certo, merge na `main`
git checkout main
git merge nome-da-nova-branch

# 4. Envie ao GitHub
git push origin main

# 5. Antes de rodar o Docker ou testar, defina o environment:
### 5.1 para Frontend (Angular) Via terminal
# Rodar com environment.ts (modo desenvolvimento)
ng serve

# Rodar com environment.prod.ts (modo produção)
ng serve --configuration=production

# Para build em produção
ng build --configuration=production

### 5.2 para Backend
na raiz do projeto edite .env que será tratado por application.properties

# 6. Configuração do Ambiente
edite .env
Observação: no No GITPOD online( gitpod.io ) após subir o docker, no terminal vá em ports e clique no cadeado para abrir as portas, caso contrário nada funciona

# 7. Docker – Resetar containers e volumes
no terminal rode: docker-compose down -v --remove-orphans

