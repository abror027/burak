import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from "./app";

mongoose
.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function() {
        console.log(`The server is running successfully on port: ${PORT}`);
        console.log(`http://localhost:3003`); // shunchaki hozircha qo'ydim browuserga kirishga erinib
    });
})
.catch(err => console.log("ERROR on connection MongoDB", err));
