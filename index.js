const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname,'./Public', 'index.html'));
});

app.get("/Omar", (req, res) => {
	res.sendFile(path.join(__dirname,'./Public', 'Omar.html'));
});

app.post("/comment", (req, res) => {
    	res.send(req.body); 
});

app.listen(3000, () => console.log("listening on port 3000"));
