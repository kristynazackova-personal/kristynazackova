import VersionA from "@/components/version-a";
import VersionB from "@/components/version-b";
import VersionC from "@/components/version-c";
import VersionD from "@/components/version-d";

type Props = {
  searchParams: Promise<{ version?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const { version } = await searchParams;

  switch (version) {
    case "a":
      return <VersionA />;
    case "b":
      return <VersionB />;
    case "c":
      return <VersionC />;
    case "d":
    default:
      return <VersionD />;
  }
}
