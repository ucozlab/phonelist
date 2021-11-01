process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION!!! shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./server/app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
