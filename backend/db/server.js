const moongose=require("mongoose");

const connectToDatabase = async()=>{
    try{
        await moongose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    }catch(error){
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
}

const Schema = moongose.Schema;

const ObjectId=mongoose.ObjectId;

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


const User=moongose.model("User",userSchema);

module.exports = {
    connectToDatabase,
    User
};