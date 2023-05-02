import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


import { TeamsPageLayout } from "../index";
import nestLayout from "../../../layouts/team-layout";

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;
export const TeamPageLayout = nestLayout(TeamsPageLayout, getLayout);


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


TeamPage.getLayout = TeamPageLayout;

export default TeamPage;
