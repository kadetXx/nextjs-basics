import react from "react";
import Link from "next/link";

const Page = ({ notes }) => {

  const noteUrl = (title) => {
    const lc = title.toLowerCase()
    const lcArray = lc.split(' ')
    const url = lcArray.join('-')

    return url;
  } 


  return (
    <div>
      <h3>Hello! </h3>
      <p>This is the notes index page. It displays all notes</p>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href='/notes/[id]' as={`/notes/${note.id}`}>
              <a>{note.title} Note</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/notes`);
  const { data } = await res.json();

  return {
    props: { notes: data },
  };
}
