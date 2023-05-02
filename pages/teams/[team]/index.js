import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


import { TeamsPageLayout } from "../index";
import nestLayout from "../../../utils/nestLayout";

const TeamPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return (
    <section>
      <h3>{team}</h3>
    </section>
  );
};

const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log("TeamPageLayout mounted");
    return () => console.log("TeamPageLayout unmounted");
  }, []);

  const router = useRouter();
  const { team } = router.query;

  return (
    <div>
      <h1>Anything, anything.</h1>
      <p>
        But this time it's <strong>{team}</strong><br/>
        Because that's what you typed.
      </p>
    </div>
  );
};

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const TeamPageLayout = nestLayout(TeamsPageLayout, getLayout);

TeamPage.getLayout = TeamPageLayout;

export default TeamPage;
