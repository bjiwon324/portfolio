import Footer from "@/components/commons/Footer";
import Nav from "@/components/commons/Nav";
import DescriptionField from "@/components/domains/project/DescriptionField";
import { projects } from "@/contexts/projects";
import { useRouter } from "next/router";

export default function Project() {
  const { query } = useRouter();
  const id = query.id;
  const thisProject = projects.find((item) => item.name === id);
  return (
    <>
      <Nav isHome={false} />
      <DescriptionField project={thisProject} />
      <Footer />
    </>
  );
}
