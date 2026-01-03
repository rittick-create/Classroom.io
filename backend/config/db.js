import  mongoose from "mongoose";
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String,
        uppercase: true,
        required: true
    },
    lastName: {
        type: String,
        uppercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    email: {
        type: String,
       //add validator later
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        minlength: 10,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },    
});

const User= mongoose.model("User",userSchema);
export default User;