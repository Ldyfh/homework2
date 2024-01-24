require('dotenv').config();
const express = require("express");
const connect = require("./schemas"); // MongoDB에 접속을 해야 하므로 가지고 옴

const app = express();
app.use(express.json());

connect(); // 실제로 MongoDB에 접속

const router = require("./routes/products.router");
app.use("/api", router);

app.listen(3000, () => {
    console.log("서버가 새로 띄워졌네요!");
});