# API REST con Typescript

---

## Enlaces

- [json de equipos][https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.clubs.json]

## comandos del terminal

- Para descargar archivos json por medio de url

      curl -O <https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.clubs.json>

      curl -O <https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.json>

- Para crear archivo "tsconfig.json" y modificar "outDir" "rooDir"

      node_modules/.bin/tsc --init

- Para que reconozca "import"

      npm i --save-dev @types/node

- Para limpiar la carpeta "dist" y crear en el package.json un script de ejecución:

      npm i --save-dev rimraf

      node_modules/.bin/rimraf -h

      "clear": "rimraf dist"
