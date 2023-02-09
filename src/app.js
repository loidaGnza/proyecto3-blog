const express = require('express')
const app = express()

app.use(express.json());
const postRouter = require("./posts/posts.router");

const db = require("./utils/database");



db.authenticate()
    .then(() => {
        console.log("las credenciales son correctas");
    })
    .catch((error) => {
        console.log(error);
    });
db.sync()
    .then(() => {
        console.log("la base de datos se sincronizo");
    })
    .catch((error) => {
        console.log(error);
    });

app.get("/", (req, res) => {
    res.json({
        message: "server ok",
    });
});

app.use("/api/v1", postRouter);

app.listen("9000", () => {
    console.log("star server at port 9000");
});
module.exports = app
