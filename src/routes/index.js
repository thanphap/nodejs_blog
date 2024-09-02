const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    //Ex
    // app.get('/', (req, res) => {
    //     // var a = 1;
    //     // var b = 2;
    //     // var c = a + b;
    //     //   res.send('Hello World!')
    //     // res.send(`
    //     //     <h1 style="color:red;">Hello World!</h1>
    //     // `)
    //     res.render('home');
    // });

    // app.get('/news', (req, res) => {
    //   // console.log(req.query.q);
    //   res.render('news');
    // });

    // app.get('/search', (req, res) => {
    //   // console.log(req.query.q);
    //   res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //   console.log(req.body)
    //   res.send('');
    // });
}

module.exports = route;
