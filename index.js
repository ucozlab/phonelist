process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION!!! shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const dotenv = require('dotenv');
dotenv.config({
  path: './.env'
});

const app = require('./server/app');
const mongoClient = require('./server/db');
const PORT = process.env.PORT || 5000;

mongoClient.connectToServer(() => {
  app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
  });
})
