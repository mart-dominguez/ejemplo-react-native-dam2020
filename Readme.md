# Previo
Verificar tener configuradas las variables de entorno e instalado react native  segun las indicaciones de https://reactnative.dev/docs/environment-setup
# Instalar
Clonar el proyecto y dentro del mismo ejecutar "npm install" 

```
$ git clone https://github.com/mart-dominguez/ejemplo-react-native-dam2020.git
$ cd MyTestApp
$ npm install
```

# Ejecutar
En un terminal (en un cmd o consola o terminal de VSCode) iniciar Metro
```
$ npx react-native start  --reset-cache
```

En OTRO terminal empaquetar el proyecto e instalarlo en el emulador.
```
$ npx react-native run-android
```

# Levantar el API rest
Primero instalar de manera global JSON-SERVER (puede consultar la documentacion aqui https://github.com/typicode/json-server)
```
$ npm install -g json-server
```

En OOOOTRO terminal (en un cmd o consola o terminal de VSCode) iniciar el siguiente comando
```
$ json-server -p 5000 --watch db-api/db.json
```

En OTRO terminal empaquetar el proyecto e instalarlo en el emulador.
```
$ npx react-native run-android
```

