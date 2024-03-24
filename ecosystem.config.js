module.exports = {
  apps: [
    {
      script: "_app.js",
      watch: "false",
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "luzbelito.com",
      ref: "origin/main",
      repo: "git@github.com:riberojuanca/luzbelito.git",
      path: "/var/www/nextjs/luzbelito",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && npm run build pm2 reload luzbelito.com ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
