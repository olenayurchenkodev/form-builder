const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const jwt = require('jsonwebtoken');
import { Request, Response } from 'express';
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

server.post('/login', (req: Request, res: Response) => {
  try{
    const users = readUsers();
    const {username, password} = req.body;
    const user = users.filter(
      (u: { username: any; password: any; }) => u.username === username && u.password === password)[0];
    if (user) {
      const token = jwt.sign(
        {userId: user.id},
        "some secret string",
        {expiresIn: '30d'}
      )
      res.json({token, userId: user.id})
    } else {
      res.status(401).send('Incorrect username or password');
    }
  }
  catch (e) {
    console.log('smth wrong');
    res.status(500).send('Incorrect username or password');
  }
});

server.post('/register', (req: Request, res: Response) => {
  console.log('on back');
  try{
    const users = readUsers();
    const user = users.filter((u: { username: any; }) => u.username === req.body.username)[0];
    if (user === undefined || user === null) {
      const id = users.length + 1
      const token = jwt.sign(
        {userId: id},
        "some secret string",
        {expiresIn: '30d'}
      )
      res.json({token, userId: id})
      db.users.push(id, req.body);
    } else {
      res.status(400).send('User already exists');
    }
  }
  catch (e) {
    console.log('smth wrong');
    res.status(500).send('Incorrect username or password');
  }
});

function readUsers() {
  const dbRaw = fs.readFileSync('./db.json');
  const users = JSON.parse(dbRaw).users
  return users;
}
