const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');
const router = express.Router();

var server = require('http').createServer(app);

const PORT = 4000;
// let users = require('./models/users.model');

app.use(cors({ origin :'http://localhost:3000'}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://root:Passw0rd@cluster0-q1r0y.mongodb.net/eventsDB', { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.use('/api', router);
const eventsRouter = require('./routes/events');

app.use(express.static('client/build'));

app.use('/events', eventsRouter);
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});