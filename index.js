const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));
//here is the json file of user data
var data = require('./data/test.json');

// Define routes
app.get('/', (req, res) => {
  var title = "Home page";
  res.render('pages/index', { title: title });
});
//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

app.get('/about', (req, res) => {
  var title = "About page";
  res.render('pages/about', { title: title });
});

app.get('/projects', (req, res) => {
  var title = "Projects page";
  res.render('pages/projects', { title: title });
});
app.get('/contacts', (req, res) => {
  var title = "Contacts page";
  res.render('pages/contacts', { title: title });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  console.log(data);
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});
