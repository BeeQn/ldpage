FROM node:14-alpine

WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta que o React utilizará (definida no package.json, geralmente 3000)
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"]
