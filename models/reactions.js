const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
       default: function(){
        return new Types.ObjectId()
       }
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
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    }
}, {
    toJSON: {
        getters: true
    },
    id: false,
});

module.exports = reactionSchema;