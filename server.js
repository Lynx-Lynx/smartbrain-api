const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'postgres',
  connection: {
  host : '127.0.0.1',
  user : 'postgres',
  password : '$!lj78rg$zcfl*=',
  database : 'smart-brain'
  }
});


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send(database.users);
})

app.post('/signin', signin.handleSignIn(db, bcrypt))

app.post('/register', register.handleRegister(db, bcrypt))

app.get('/profile/:id', profile.handleProfileGet(db))

app.put('/image', image.handleImage(db))

app.post('/imageurl', image.handleApiCall)

app.listen(3001, () => {
	console.log('app is running on port 3001');
})
