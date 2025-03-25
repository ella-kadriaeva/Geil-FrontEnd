FROM ngnix:latest
WORKDIR /var/www/html
COPY index.html .

CMD [ "ngnix" "-g", "daemon off;" ]