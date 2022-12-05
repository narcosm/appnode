# Usar  imagen de nodejs
FROM node:12-alpine
# Crear carpeta de trabajo
RUN mkdir -p /usr/src/app
# seleccionar carpeta de trabajo
WORKDIR /usr/src/app
# copiar archivos de la api
COPY . .
# instalar blibliotecas
RUN npm install
# ejecutar comando para iniciar el CRON
CMD npm start
