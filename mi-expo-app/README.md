# Mi Expo App

Este es un proyecto de aplicación móvil desarrollado con Expo. La aplicación está estructurada de la siguiente manera:

## Estructura del Proyecto

```
mi-expo-app
├── src
│   ├── App.tsx                # Punto de entrada de la aplicación
│   ├── assets                  # Recursos estáticos (imágenes, fuentes)
│   ├── components              # Componentes reutilizables
│   │   └── index.tsx          # Exportación de componentes
│   ├── screens                 # Pantallas de la aplicación
│   │   └── HomeScreen.tsx     # Pantalla principal
│   ├── navigation              # Configuración de navegación
│   │   └── index.tsx          # Exportación de navegadores y rutas
│   ├── services                # Interacción con APIs externas
│   │   └── api.ts             # Funciones para obtener y enviar datos
│   ├── hooks                   # Hooks personalizados
│   │   └── useAuth.ts         # Manejo de autenticación del usuario
│   ├── utils                   # Funciones utilitarias
│   │   └── index.ts           # Exportación de funciones utilitarias
│   └── types                   # Interfaces y tipos
│       └── index.ts           # Exportación de tipos y estructuras de datos
├── app.json                    # Configuración de la aplicación Expo
├── package.json                # Configuración de npm y dependencias
├── tsconfig.json               # Configuración de TypeScript
├── babel.config.js             # Configuración de Babel
├── .eslintrc.js                # Configuración de ESLint
└── README.md                   # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```
npm install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza:

```
npm start
```

Esto abrirá una nueva ventana en tu navegador donde podrás escanear el código QR con la aplicación Expo Go en tu dispositivo móvil.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.