const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

//Địa chỉ mặc định khi lấy file
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //=> xữ lý dữ liệu nhận dc dạng form
app.use(express.json()); //=> xữ lý dữ liệu nhận dc dạng XMLHttpRequest, fetch, axios.

// HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Action -> Dispatcher -> Function handler

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
