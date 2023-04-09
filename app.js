const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./connctionToMongdb");
const postModel = require("./postModel");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

// CRUD applications
app.post("/", async (req, res) => {
	const { title, content } = req.body;

	try {
		const newPost = await postModel.create({ title, content });
		res.json(newPost);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/", async (req, res) => {
	try {
		const posts = await postModel.find();
		res.json(posts);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.listen(3001, () => {
	console.log("db conncted to poort 3001");
});
