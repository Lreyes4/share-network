const { users, thoughts} = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thpught.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // Get a thought
    getSingleThought(req, res) {
        Course.findOne({
                _id: req.params.thoughtId
            })
            .select('-__v')
            .then((thoughts) =>
                !thoughts ?
                res.status(404).json({
                    message: 'No thought with that ID'
                }) :
                res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a thought
    createThought(req, res) {
        thoughts.create(req.body)
            .then((thoughts) => res.json())
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Delete a course
    deleteThoughts(req, res) {
        Thoughts.findOneAndDelete({
                _id: req.params.thoughtsId
            })
            .then((thoughts) =>
                !thoughts ?
                res.status(404).json({
                    message: 'No thoughts with that ID'
                }) :
                users.deleteMany({
                    _id: {
                        $in: thoughts.users
                    }
                })
            )
            .then(() => res.json({
                message: 'Thoughts and users deleted!'
            }))
            .catch((err) => res.status(500).json(err));
    },
    // Update a course
    updateThoughts(req, res) {
        Thoughts.findOneAndUpdate({
                _id: req.params.thoughtsId
            }, {
                $set: req.body
            }, {
                runValidators: true,
                new: true
            })
            .then((thoughts) =>
                !thoughts ?
                res.status(404).json({
                    message: 'No thoughts with this id!'
                }) :
                res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },
};