//starter file


const express = require('express');
const app = express();

const port = 3009;
app.use(express.static('public'));

app.set('view engine', 'ejs');

//body parser to scrape info from header
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use(require('./routes/about1'));
app.use(require('./routes/404'));
app.use(require('./routes/cart'));
app.use(require('./routes/menu2'));
app.use(require('./routes/product-listing'));
app.use(require('./routes/product'));
app.use(require('./routes/single-product'));
app.use(require('./routes/checkout'));
app.use(require('./routes/contact-w-sidebar'));



app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})