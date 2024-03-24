module.exports = {
  apps: [
    {
      script: "page.jsx",
      watch: "./app",
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "luzbelito.com",
      ref: "origin/main",
      repo: "git@github.com:riberojuanca/luzbelito.git",
      path: "/var/www/nextjs/luzbelito",
      "pre-deploy-local": "npm run build",
      "post-deploy":
        "npm install && pm2 reload luzbelito.com ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
