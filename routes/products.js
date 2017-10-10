//jshint esversion: 6

const app = express();

app.use('/', router);

app.use('/db:id',function (req, res, next) {
  //if the product ID is 0, skip to the next route.
  if (req.params.id === '0') next('route');
    else next();
},function (req, res, next) {
  //render main page
  res.render('main');
});




//error-handling
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Something Broke!');
});