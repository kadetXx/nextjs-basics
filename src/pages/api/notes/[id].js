import nc from 'next-connect'
import notes from '../../../data/data'

const getNote = id => notes.find(note => note.id == parseInt(id))

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id)

    if(!note) {
      res.statusCode(404);
      res.end()
    }

    res.json({data: note})
  })
  .patch((req, res) => {
    const note = getNote(req.query.id)

    if(!note) {
      res.statusCode(404);
      res.end()
    }

  
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.query.id));
    const updated = {...note, ...req.body}

    notes[noteIndex] = updated;
    res.json({data: updated})
  })
  .delete((req, res) => {
    const note = getNote(req.query.id);

    if(!note) {
      res.statusCode(404);
      res.end()
    }

    const noteIndex = notes.findIndex(n => n.id === parseInt(req.query.id));

    notes.splice(noteIndex, 1);

    res.json({data: req.query.id})
  })

export default handler