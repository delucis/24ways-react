import express from 'express';
import http from 'http';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

import AppComponent from './components/app';
import IndexComponent from './components/index';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    }
  ]
}

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index');
});

const server = http.createServer(app);

server.listen(3003);
server.on('listening', () => {
  console.log('Listening on 3003');
});
