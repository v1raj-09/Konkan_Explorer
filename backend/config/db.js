const mongoose = require("mongoose");

const connDB = async () => {
    try {
        console.log("hii")
        await mongoose.connect(process.env.MONGO_URI)

        console.log("mongodb connected Successfully");
    }
    catch (error) {
        console.log("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }

};

module.exports = connDB; 


