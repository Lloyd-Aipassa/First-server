const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./connctionToMongdb");
const postModel = require("./postModel");
const postModelScheduled = require("./postModelScheduled");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

// CRUD applications Inspection

//POST
app.post("/schade", async (req, res) => {
	const {
		Locatie,
		Datum,
		NieuweSchade,
		AcuteActieVereist,
		SoortSchade,
		Omschrijving,
		AcuteActieVereistMaintenance,
		TypeOfMaintenance,
		CostOfMaintenance,
		modificationLocatie,
		ModificationDescription,
		PerformedBy,
		ModificationComment,
		requiredAction,
		TypeInstallation,
		Aproved,
		ReportedMalfunction,
		Comments,
	} = req.body;

	try {
		const newPost = await postModel.create({
			Locatie,
			Datum,
			NieuweSchade,
			AcuteActieVereist,
			SoortSchade,
			Omschrijving,
			AcuteActieVereistMaintenance,
			TypeOfMaintenance,
			CostOfMaintenance,
			modificationLocatie,
			ModificationDescription,
			PerformedBy,
			ModificationComment,
			requiredAction,
			TypeInstallation,
			Aproved,
			ReportedMalfunction,
			Comments,
		});
		res.json(newPost);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Get all posts
app.get("/schade", async (req, res) => {
	try {
		const schades = await postModel.find();
		res.json(schades);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Get single
app.get("/schade:id", async (req, res) => {
	const { id } = req.params;
	try {
		const schade = await postModel.findById(id);
		res.json(schade);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Update single
app.put("/schade:id", async (req, res) => {
	const { id } = req.params;
	const {
		Locatie,
		Datum,
		NieuweSchade,
		AcuteActieVereist,
		SoortSchade,
		Omschrijving,
		AcuteActieVereistMaintenance,
		TypeOfMaintenance,
		CostOfMaintenance,
		modificationLocatie,
		ModificationDescription,
		PerformedBy,
		ModificationComment,
		requiredAction,
		TypeInstallation,
		Aproved,
		ReportedMalfunction,
		Comments,
	} = req.body;
	try {
		const schade = await postModel.findByIdAndUpdate(id, {
			Locatie,
			Datum,
			NieuweSchade,
			AcuteActieVereist,
			SoortSchade,
			Omschrijving,
			AcuteActieVereistMaintenance,
			TypeOfMaintenance,
			CostOfMaintenance,
			modificationLocatie,
			ModificationDescription,
			PerformedBy,
			ModificationComment,
			requiredAction,
			TypeInstallation,
			Aproved,
			ReportedMalfunction,
			Comments,
		});
		res.json(schade);
	} catch (error) {
		res.status(500).send(error);
	}
});

//delete single
app.delete("/schade:id", async (req, res) => {
	const { id } = req.params;
	const {
		Locatie,
		Datum,
		NieuweSchade,
		AcuteActieVereist,
		SoortSchade,
		Omschrijving,
		AcuteActieVereistMaintenance,
		TypeOfMaintenance,
		CostOfMaintenance,
		modificationLocatie,
		ModificationDescription,
		PerformedBy,
		ModificationComment,
		requiredAction,
		TypeInstallation,
		Aproved,
		ReportedMalfunction,
		Comments,
	} = req.body;
	try {
		const schade = await postModel.findByIdAndDelete(id, {
			Locatie,
			Datum,
			NieuweSchade,
			AcuteActieVereist,
			SoortSchade,
			Omschrijving,
			AcuteActieVereistMaintenance,
			TypeOfMaintenance,
			CostOfMaintenance,
			modificationLocatie,
			ModificationDescription,
			PerformedBy,
			ModificationComment,
			requiredAction,
			TypeInstallation,
			Aproved,
			ReportedMalfunction,
			Comments,
		});
		res.json(schade);
	} catch (error) {
		res.status(500).send(error);
	}
});

// CRUD applications scheduled

//POST Scheduled
app.post("/scheduled", async (req, res) => {
	const {
		Locatie,
		Datum,
		Adress,
		typeOfInspection,
		pathForm,
	} = req.body;

	try {
		const newPost = await postModelScheduled.create({
			Locatie,
			Datum,
			Adress,
			typeOfInspection,
			pathForm,
		});
		res.json(newPost);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Get all posts
app.get("/scheduled", async (req, res) => {
	try {
		const schedules = await postModelScheduled.find();
		res.json(schedules);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Get single
app.get("/scheduled:id", async (req, res) => {
	const { id } = req.params;
	try {
		const schade = await postModelScheduled.findById(id);
		res.json(schade);
	} catch (error) {
		res.status(500).send(error);
	}
});

//delete single
app.delete("/scheduled:id", async (req, res) => {
	const { id } = req.params;
	const {
		Locatie,
		Datum,
		Adress,
		typeOfInspection,
		pathForm,
	} = req.body;
	try {
		const schedule = await postModelScheduled.findByIdAndDelete(id, {
			Locatie,
		Datum,
		Adress,
		typeOfInspection,
		pathForm,
		});
		res.json(schedule);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.listen(3001, () => {
	console.log("db conncted to poort 3001");
});
