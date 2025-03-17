import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  console.log('This is the entry point for Next Post');
});

app.listen(5000, () => {
  console.log('App is running on port 5000');
});
