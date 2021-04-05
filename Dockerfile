FROM nginx:alpine
COPY ./app/index.html /usr/share/nginx/html
COPY ./app/app.js /usr/share/nginx/html
COPY ./app/style.css /usr/share/nginx/html
COPY ./app/firebase-messaging-sw.js /usr/share/nginx/html
