import app from './app.js';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js'
import cloudinary from 'cloudinary';
const cors = require('cors')

dotenv.config({ path: "./config/config.env" });

connectDatabase();

app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app", "http://localhost:3000"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.get("/", (req,res) => {
    res.send("test done");
})

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on updated port : ${process.env.PORT}`);
});

