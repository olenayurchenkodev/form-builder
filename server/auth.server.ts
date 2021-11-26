const express = require('express');
const cors = require('cors');
const db = require('./db.json');
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`)
const fs = require('fs').promises;
const v4 = require('uuid');

const server = express()
const corsOptions ={
  origin:'http://localhost:4200',
  credentials:true,
  optionSuccessStatus:200
}

server.use(cors(corsOptions));
server.use(express.json())

server.listen(3000, () => {
  console.log('Server is running on 3000 port');
});


server.post('/register',[],
  async (req: typeof express.Request, res: typeof express.Response) => {
  try{
    const {username, password} = req.body

    const rawData = await fs.readFile('./db.json')
    const data = JSON.parse(rawData)

    const user = findUser(data, username)
    if (user){
      res.status(400).send({message: "Already have this user"})
    }
    const hashPass = await bcrypt.hash(password, 12);
    data.users.push({username,  password: hashPass});

    const writeData = JSON.stringify(data)
    await fs.writeFile('./db.json', writeData)

    const token = jwt.sign(
      {username: username},
      "some secret string",
      {expiresIn: '30d'}
    )
    res.json({token})
  }
  catch (e){
    res.status(500).send('Something wrong');
  }
});

server.post('/login',[],
  async (req: typeof express.Request, res: typeof express.Response) => {
    try{
      const {username, password} = req.body
      const rawData = await fs.readFile('./db.json')
      const data = JSON.parse(rawData)
      const user = findUser(data, username)
      if(!user){
        return res.status(400).json({message: "User not defined"})
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch){
        res.status(500).json({message: "incorrect password, try again"})
      }

      const token = jwt.sign(
        {username: user.username},
        "some secret string",
        {expiresIn: '30d'}
      )
      res.json({token})

    } catch (e){
      res.status(500).json("smth wrong")
    }
  });

function findUser(data: any, username: string){
  if (data.users.length > 0){
    for ( let item of data.users ){
      if (item.username === username) {
        return item
      }
    }
  }
}
