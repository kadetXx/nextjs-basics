// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ message: 'hello' }))
// }


import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({message: 'Ok'})
  })
  .post((req, res) => {
    res.json({message: 'posted'})
  })

export default handler

// routes needed for basic crud operations on this app

// create note => POST /api/note
// update note => PATCH /api/note/:id
// delete note => DELETE /api/note/:id
// get one note => DELETE /api/note/:id
// get all notes => DELETE /api/note/



