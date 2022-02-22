FROM node 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
ENV URL_API="https://mrsemsqfk6.execute-api.us-east-1.amazonaws.com"
ENV REACT_APP_AUTH0_DOMAIN=dev-vxyxnrxg.us.auth0.com
ENV REACT_APP_AUTH0_CLIENT_ID=kSyuXO0dc9dkK2s6ISecJmnCN6NrGyNd
ENV CHOKIDAR_USEPOLLING=true
CMD ["npm", "start"]