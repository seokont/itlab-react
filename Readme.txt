С помощью  команды npm i json-server уствновил сервер и задал прослушивание файла json командой json-server --watch auth.json, ({
  "auth": {
    "username": "admin",
    "password": "admin"
  }
})
таким образом сформировался линк http://localhost:3000/auth, который смог отдавать статус 201.