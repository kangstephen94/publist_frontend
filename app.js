const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = 8000;
const request = require('request');
const keys = require('./config/keys');

app.use(express.static('public'))

let options = {
  url: 'https://publist.ai/api/v2/jobs.frontend',
  headers: {
    'X-Authorization': keys.publistKey,
  },
  json: true,
  body: { 'query': 'tech' }
};

let callback = (err, response, body) => {
}

app.get('/articles', (req, response) => {
  request.post(options, callback).pipe(response);
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
