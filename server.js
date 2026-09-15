const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req,res) => {
    res.send("Hello from Weather API");
});

app.get("/weather", (req,res) => {
    const city = req.query.city;
    res.send(`Weather requested for ${city}`);
});