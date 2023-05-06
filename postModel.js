const mongoose = require("mongoose");
const schema = mongoose.Schema(
		  {
			"Locatie": "string",
			"Datum": "string",
			"NieuweSchade": "string",
			"AcuteActieVereist": "string",
			"SoortSchade": "string",
			"Omschrijving": "string",
			"AcuteActieVereistMaintenance": "string",
			"TypeOfMaintenance": "string",
			"CostOfMaintenance": "string",
			"modificationLocatie": "string",
			"ModificationDescription": "string",
			"PerformedBy": "string",
			"ModificationComment": "string",
			"requiredAction": "string",
			"TypeInstallation": "string",
			"Aproved": "string",
			"ReportedMalfunction": "string",
			"Comments": "string",
		  }	
);

const test2 = mongoose.model("Schade", schema);
module.exports = test2;





