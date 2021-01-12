import react from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  const { params } = router.query;

  console.log(params);

  return <div>Hello! This is a catch all rotes component </div>;
};
export default Page;
