
const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');
const db = require('./db.json');
const fs = require('fs');

const corsOptions ={
  origin:'http://localhost:4200',
  credentials:true,
  optionSuccessStatus:200
}

server.use(middlewares);
server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

server.post('/login', (req: typeof express.Request, res: typeof express.Response) => {
  const users = readUsers();
  const user = users.filter(
      (u: { username: any; password: any; }) => u.username === req.body.username && u.password === req.body.password
  )[0];
  if (user) {
    res.send({ ...formatUser(user), token: checkIfAdmin(user) });
  } else {
    res.status(401).send('Incorrect username or password');
  }
});
server.post('/register', (req: typeof express.Request, res: typeof express.Response) => {
  console.log('start registered');
  try{
    const users = readUsers();
    const user = users.filter((u: { username: any; }) => u.username === req.body.username)[0];
    if (user === undefined || user === null) {
      res.send({
        ...formatUser(req.body),
        token: checkIfAdmin(req.body)
      });
      db.users.push(req.body);
    } else {
      res.status(401).send('User already exists');
    }
  }
  catch (e){
    res.status(500).send('Something wrong');
  }
});
server.use('/users', (req: typeof express.Request, res: typeof express.Response, next: typeof express.NextFunction) => {
  if (isAuthorized(req) || req.query.bypassAuth === 'true') {
    next();
  } else {
    res.sendStatus(401);
  }
});
function formatUser(user: { password: any; role: string; username: string; }) {
  delete user.password;
  user.role = user.username === 'admin'
    ? 'admin'
    : 'user';
  return user;
}
function checkIfAdmin(user: { username: string; }, bypassToken = false) {
  return user.username === 'admin' || bypassToken
    ? 'admin-token'
    : 'user-token';
}
function isAuthorized(req: typeof express.Request) {
  return req.headers.authorization === 'admin-token';
}
function readUsers() {
  const dbRaw = fs.readFileSync('./server/db.json');
  const users = JSON.parse(dbRaw).users
  return users;
}
