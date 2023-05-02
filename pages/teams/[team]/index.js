import { useRouter } from "next/router";
import Link from "next/link";
import { TeamsPageLayout } from "../index";
import teamLayoutComponent from "../../../layouts/team-layout";

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;
export const TeamPageLayout = teamLayoutComponent(TeamsPageLayout, getLayout);

const TeamPage = () => {
  const router = useRouter();
  const { team } = router.query;
  return (
    <section>
      <h3>{team} yo</h3>
    </section>
  );
};

TeamPage.getLayout = TeamPageLayout;

const NestedLayout = ({ children }) => {
  const router = useRouter();
  const { team } = router.query;

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={`/teams/${team}`}>About</Link>
            </li>
            <li>
              <Link href={`/teams/${team}/players`}>Players</Link>
            </li>
            <li>
              <Link href={`/teams/${team}/fixtures`}>Fixtures</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>{children}</section>
    </div>
  );
};

export default TeamPage;
