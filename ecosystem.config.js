module.exports = {
  apps: [
    {
      // Primera aplicación
      script: "./app/page.jsx", // Ruta del script principal de la primera aplicación
      watch: "./app", // Observar cambios en el directorio actual
    },
  ],

  deploy: {
    production: {
      user: "root", // Usuario para la conexión SSH
      host: "luzbelito.com", // Host del servidor
      ref: "origin/master", // Referencia de la rama del repositorio
      repo: "git@github.com:riberojuanca/luzbelito.git", // URL del repositorio
      path: "/var/www/nextjs/luzbelito", // Ruta en el servidor donde se desplegará la aplicación
      "pre-deploy-local": "npm run build", // Comando a ejecutar localmente antes de implementar
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production", // Comandos a ejecutar después de implementar
      "pre-setup": "echo 'Preparando configuración en el servidor...'", // Comando a ejecutar antes de configurar el servidor
    },
  },
};
