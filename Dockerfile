# Etapa 2: Servir a aplicação com Nginx
FROM nginx:stable-alpine

# Copia a build gerada para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia os arquivos de certificado SSL
COPY ssl/certificado.crt /etc/nginx/ssl/certificado.crt
COPY ssl/chave-privada.key /etc/nginx/ssl/chave-privada.key

# Copia o arquivo de configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expõe as portas 80 (HTTP) e 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Inicia o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]