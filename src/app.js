import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/userRoute.js"

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (_, res) =>{
    res.json({message: "This is a simple CRUD API"})
})

app.use("/api/v1/users", userRouter);

app.listen(port, () => {
    console.log(`App listening on port: http://localhost:${port}`);
});
