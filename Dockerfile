# Etapa 1: Build da aplicação com Node.js
FROM node:14-alpine AS build
WORKDIR /app

# Copia os arquivos de configuração e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos e gera a build de produção
COPY . .
RUN npm run build

# Etapa 2: Imagem de produção com Nginx
FROM nginx:alpine
# Remove o default do Nginx se necessário e copia os arquivos da build
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta em que o Nginx irá servir a aplicação
EXPOSE 80

# Inicia o Nginx em modo de primeiro plano
CMD ["nginx", "-g", "daemon off;"]
