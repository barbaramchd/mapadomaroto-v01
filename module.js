const {Pool, Client} = require('pg');

const pool = new Pool({
  user:'hphdjnnxtvtyij',
  host:'ec2-54-221-225-114.compute-1.amazonaws.com',
  database: 'ddhtf723h40oqu',
  password: '39e3308327a27da5a6fa3022791c5f2bb6494025ea921748d98c90049f5a2543',
  port:'5432',
  ssl:true
});

async function databaseConnection(){
  const x = await pool.query('select * from criterias');
  console.log(x.rows);
}

databaseConnection();