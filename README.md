# API REST EXPRESS JWT 

Create a simple Api with [Express](https://www.npmjs.com/package/express), [Sequelize "ORM"](https://sequelize.org/), JWT and Mysql.

## Install
```
- Clone project 
- Make: npm install
- Copy .env.example -> .env + add your params
- Have mysql OR docker installed on your machine
- Make: docker compose up -d (only if you use docker)
- Make: npm run dev
- Go to project localhost:SERVER_PORT ex: http://localhost:8989
```

## 1 - Initial commit - Mise en place du projet

Essentiellement 4 fichiers :

- package.json -> les dependances du projets
- server.js -> le serveur
- db.config.js -> la config de la bdd
- .env -> Variables d'environnements

