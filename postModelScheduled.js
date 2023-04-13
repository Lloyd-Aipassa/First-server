const mongoose = require("mongoose");
const schema2 = mongoose.Schema(
		  {
			"Locatie": "string",
			"Datum": "string",
			"Adress": "string",
			"typeOfInspection": "string",
			"pathForm": "string",
		  }	
);

const test1 = mongoose.model("Scheduled", schema2);
module.exports = test1;
