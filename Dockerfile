# Etapa 1: Build da aplicação React
FROM node:14-alpine AS build
WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos do projeto e gera a build
COPY . .
RUN npm run build

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:stable-alpine

# Copia a build gerada para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80 para acesso externo
EXPOSE 80

# Inicia o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
