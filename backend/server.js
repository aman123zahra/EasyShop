const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Main backend page
app.get("/", (req, res) => {
    res.send("Welcome to EasyShop Backend");
});

// Admin dashboard
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log("EasyShop server running on http://localhost:3000");
});