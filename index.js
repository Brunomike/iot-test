const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    console.log("API is on");
});

app.post('/', (req, res) => {
    console.log(req.body);
})


app.listen(PORT, () => {
    console.log("Server Listening on localhost: " + PORT);
})
