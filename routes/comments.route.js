const {Router} = require('express')
const router = Router();
const Comment = require('../models/Comment')

// /api/comments/read
router.get('/read', (req, res) => {
    Comment.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

// /api/comments/add
// router.post('/add', async (req, res) => {
//     const newItem = new Comment({
//         name: req.body.name,
//         text: req.body.text
//     });

//     newItem.save().then(item => res.json(item));

//     // try {
//     //     const newComment = new Comment({
//     //         author: req.body.name,
//     //         text: req.body.text
//     //     })

//     //     newComment.save()
//     //               .then(c => res.json(c))
//     // } catch(e) {
//     //     res.status(500).json({ message: 'There is some erros. Try to add the comment again'})
//     // }
// })

router.post('/add', (req, res) => {
    // console.log(req)
    console.log(req.body)
    console.log(req.body.name)

    const newItem = new Comment({
        name: req.body.name,
        text: req.body.text
    });

    console.log(req.body)

    newItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
     .then(item => item.remove()
     .then(() => res.json({success: true})))
     .catch(err => res.status(404).json({success: false}));
 })


module.exports = router