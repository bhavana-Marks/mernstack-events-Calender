const router = require('express').Router();
let eventsModel = require('../models/events.model');

router.route('/').get((req, res) => {
    eventsModel.collection.find({}).toArray((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

// router.route('/login').post((req, res) => {
//     let obj = req.body;
//     users.collection.findOne({userName:obj.userName}, function(err, user) {
//         if (err) {
//             console.log(err)
//         }
//     })
// });

// router.route('/users').post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// })
module.exports = router;