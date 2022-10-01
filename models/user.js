const {
    Schema,
    model
} = require('mongoose');


// Schema to create Student model
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: [isEmail, "Email is invalid"]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
userSchema.virtual("friendCount").get(function(){
    const arrayLength = this.friends.length
    return arrayLength
})

const User = model('User', userSchema);

module.exports = User;