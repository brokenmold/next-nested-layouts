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


TeamPage.getLayout = TeamPageLayout;

export default TeamPage;
