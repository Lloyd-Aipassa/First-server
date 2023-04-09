const mongoose = require("mongoose");
const schema = mongoose.Schema(
	{
		title: "string",
		content: "String",
	},

	{
		timestamps: true,
	}
);

const post = mongoose.model("Post", schema);
module.exports = post;
