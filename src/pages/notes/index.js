import react from "react";
import Link from "next/link";

const Page = () => {
  const allNotes = [
    {
      id: 1,
      name: "Kadet",
    },
    {
      id: 2,
      name: "Exam",
    },
    {
      id: 3,
      name: "Grocery",
    },
    {
      id: 4,
      name: "Tutorial",
    },
    {
      id: 5,
      name: "Reminder",
    },
  ];

  return (
    <div>
      <h3>Hello! </h3>
      <p>This is the notes index page. It displays all notes</p>

      <ul>
        {allNotes.map((note) => (
          <li>
            <Link key={note.id} href='/notes/[id]' as={`/notes/${note.name}`}>
              <a>{note.name} Note</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
