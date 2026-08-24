import express from 'express';
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

app.get('/dishes', (req, res) => {
  res.render('dishes', {
    cssName: '/css/dishes.css',
     jsName: '/js/dishes.js'
     
  });

});

app.listen(port, () => {
  console.log(`Server běží na adrese: http://localhost:${port}`);

});
