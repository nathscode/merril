import { table, getMinifiedItem } from "../../utils/airtable-comp";

export default async (req, res) => {
	const { email, password } = req.body;

	try {
		const newRecords = await table.create([
			{
				fields: {
					email,
					password,
				},
			},
		]);
		res.status(200).json(getMinifiedItem(newRecords[0]));
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Something went wrong! 😕" });
	}
};
