const crypto = require("crypto");
global.crypto = crypto;

const express = require ("express");
const dotenv = require("dotenv");   
const cors = require("cors");


const connDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")

dotenv.config();

const app = express();

connDB();

//middleware 
app.use(cors());
app.use(express.json());   

// route 
app.get("/",(req,res)=>{   
    res.json({
        success:true,
        message : "Konkan Explorer Backend Running"
    });
});


app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})


