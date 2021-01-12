import react from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <p>Hello! This is a note {id} </p>
      <button onClick={e => router.push("/")}>Go home</button>
      <button onClick={e => router.push('/notes/[id]', '/notes/kadet')}>Open Kadet notes</button>
    </div>
  )
};

export default Page;
