import mongoose from "mongoose";


const Connection = async () => {
    const URL = "mongodb+srv://user01:password01@messanger-edith.gdzitkl.mongodb.net/?retryWrites=true&w=majority&appName=messanger-edith"
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error.message);
    }
}

export default Connection;