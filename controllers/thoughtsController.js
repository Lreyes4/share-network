const {
    User,
    Thought
} = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // Get a thought
    getSingleThought(req, res) {
        Thought.findOne({
                _id: req.params.thoughtsId
            })
            .then((thought) =>
                !thought ?
                res.status(404).json({
                    message: 'Could not find thought with that ID'
                }) :
                res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                User.findOneAndUpdate({
                        userName: req.body.userName
                    }, {
                        $addToSet: {
                            thoughts: thought._id
                        }
                    }, {
                        new: true
                    })
                    .then((user) => {
                        if (!user) {
                            res.status(404).send("Could not find user")
                        }
                        res.json(user)
                    })
            })

            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Delete a course
    deleteThoughts(req, res) {
        Thought.findOneAndDelete({
                _id: req.params.thoughtsId
            })
            .then((thought) =>{
                if(!thought){
                res.status(404).json({
                    message: 'Could not find thought with that ID'
                })}
                User.findOneAndUpdate({
                    userName: thought.userName
                }, {
                    $pull: {
                        thoughts: thought._id
                    }
                }, {
                    new: true
                })
                .then((user) => {
                    if (!user) {
                        res.status(404).send("Could not find user")
                    }
                    
                })
                res.json({message: 'Thought deleted!'})
    })
        
            .catch((err) => res.status(500).json(err));
    },
    // Update a course
    updateThoughts(req, res) {
        Thought.findOneAndUpdate({
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

    addReaction(req, res) {
        Thought.findOneAndUpdate({
                _id: req.params.thoughtsId
            }, {
                $addToSet: {
                    reactions: req.body
                }
            }, {

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

    deleteReaction(req, res) {
        Thought.findOneAndUpdate({
                _id: req.params.thoughtsId
            }, {
                $pull: {
                    reactions: {
                        reactionId: req.params.reactionId
                    }
                }
            }, {

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
    }
};