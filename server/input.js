const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

const openDb = () => {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'comments',
    password: '251423',
    port: 5432
  })
  return pool;
}

app.get("/",(req,res) => {
  const pool = openDb()

  pool.query('Select a.username,p.title,p.rate,p.photo_data,p.description from post p join account a on a.account_id = p.account_id',(error,result) => {
    if (error) {
      res.status(500).json({error:error.message})
    }
    res.status(200).json(result.rows)
  })
})

// app.get("/search/:keyword",async(req,res)=>{
//   const pool = openDb();
//   const keyword = req.params.keyword;

//   try{
//     const result = await pool.query('SELECT * FROM post WHERE description like $1',['%' + keyword + '%']);
//     const searchResults = result.rows;

//     res.status(200).json(searchResults);
//   } catch (error){
//     res.status(500).json({error: error.message})
//   }
// })


app.get("/search",async(req,res)=>{
  const pool = openDb();
  
  try{
    //const keyword = '3'
    const keyword = req.query.keyword;
    console.log(req.query.keyword)
    const result = await pool.query('Select a.username,p.title,p.rate,p.photo_data,p.description from ( SELECT * FROM post WHERE description ilike $1) p join account a on a.account_id = p.account_id',['%' + keyword + '%']);
    //const searchResults = result.rows;
    //console.log(result.rows)
    res.status(200).json(result.rows);
  } catch (error){
    res.status(500).json({error: error.message})
  }
})

app.get('/veg', async (req, res) => {
  const pool = openDb();

  try {
    const result = await pool.query('Select a.username,p.title,p.rate,p.photo_data,p.description from (SELECT * FROM post WHERE category = $1) p join account a on a.account_id = p.account_id', ['veg']);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 处理牛肉分类请求
app.get('/beef', async (req, res) => {
  const pool = openDb();

  try {
    const result = await pool.query('Select a.username,p.title,p.rate,p.photo_data,p.description from (SELECT * FROM post WHERE category = $1) p join account a on a.account_id = p.account_id', ['beef']);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 处理甜品分类请求
app.get('/dairy', async (req, res) => {
  const pool = openDb();

  try {
    const result = await pool.query('Select a.username,p.title,p.rate,p.photo_data,p.description from (SELECT * FROM post WHERE category = $1) p join account a on a.account_id = p.account_id', ['dairy']);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port);