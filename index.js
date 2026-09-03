import express from 'express';
import pkg from 'pg';
import 'dotenv/config';

const { Pool } = pkg;
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', {
    cssName: '/css/index.css',
    jsName: '/js/main.js'

  });

});


app.get('/admin', (req, res) => {
  res.render('admin', {
    cssName: '/css/admin.css',
    jsName: '/js/admin.js'


  });

});


app.get('/dishes', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM menu_items');
  

    res.render('dishes', {
      cssName: '/css/dishes.css',
      jsName: '/js/dishes.js',
      dishes: result.rows
    });

  }
  catch (error) {
    console.error('Chyba při získávání dat z databáze:', error);
    next(error);
  }
  

});



app.get('/error', (req, res) => {
  res.render('error', {
    cssName: '/css/error.css',
    jsName: '/js/error.js'

  });
});




app.listen(port, () => {
  console.log(`Server běží na adrese: http://localhost:${port}`);

});
