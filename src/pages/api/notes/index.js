import nc from "next-connect";
import notes from "../../../data/data";

const handler = nc()
  .get((req, res) => {
    res.json({ data: notes });
  })
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    };

    notes.push(note);

    res.json(note);
  });

export default handler


// curl -d '{"title": "Edit notes using the edit button"}' -X POST http://localhost:3000/api/notes