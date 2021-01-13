import react from "react";
import { useRouter } from "next/router";

const Page = ({ note }) => {
  const router = useRouter();

  // const { id } = router.query;

  return (
    <div>
      <h3>Hello! This is {note.title} </h3>
      <button onClick={(e) => router.push("/")}>Go home</button>
      <button onClick={(e) => router.push("/notes/[...params]", "/notes/kadet/special/note")}>
        Open secret notes
      </button>
    </div>
  );
};

export default Page;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/notes/${params.id}`);

  if (!response.ok) {
    res.writeHeader(302, {
      Location: "/notes",
    });

    res.end();

    return {
      props: {},
    };
  }

  const { data } = await response.json();

  return {
    props: { note: data},
  };
}
