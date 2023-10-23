# test-sucor-sayakaya

## GETTING STARTED

before we start make sure you have this in your local

```
* docker and docker compose
* node 18 ver up
* postgres
* postman
* sequelize and sequelize cli
* npm installed
```

install the dependencies

```
npm install
```

migrate the table

```
seqeuelize db:migrate

in case you want to undo you can use this command

sequelize db:migrate:undo:all

```

seed the table

```
sequelize db:seed:all

to undo

sequelize db:seed:undo:all
```

starting the project

starting in dev

```
npm run dev
```

starting

```
npm run start
```
