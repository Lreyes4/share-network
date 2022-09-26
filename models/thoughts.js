const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./reactions')


// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1, 
        maxlength: 280
    },
    createdAt: {
        type: Date,
       default: Date.now(),
       get: dateTime => moment(dateTime).format("MMM DD, YYYY [@] hh:mm a"),

    },
    userName: {
        type: String,
        required: true

    },
    reactions: [reactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
});
userSchema.virtual("reactionCount").get(function(){
    const arrayLength = this.reactions.length
    return arrayLength
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;