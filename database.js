const { Client } = require('pg');


const client = new Client ({
   host : "localhost",
   port : 3001,
   user : "postgres",
   password : "@m@n$#@!k#",
   database : "Learning" 
})

client.connect();

const userData = {
    Id: 3,
    username: 'eren_jeager',
    name: 'EREN',
    email: 'eren_jeager@gmail.com',
    isActive: true,
    createdOn: new Date('2023-09-03'),
  }

// insert command

// SQL insert query
const insertQuery = `INSERT INTO public."realUser" ("Id", "username", "name", "email", "isActive", "createdOn")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;`;

client.query(insertQuery,[
  userData.Id,
  userData.username,
  userData.name,
  userData.email,
  userData.isActive,
  userData.createdOn,
],(err,result) => {

  if (err) {
    console.error(err);
  }

})



// query command
client.query(`SELECT * FROM public."realUser"
ORDER BY "Id" ASC`,(err, result) => {
    if (err) {
        console.error(err);
      } else {
        console.log(result.rows);
      }

    client.end();
})