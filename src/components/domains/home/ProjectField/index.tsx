import styles from "./ProjectField.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { useState } from "react";
import { Project, projects } from "@/contexts/projects";
import Skill from "../SkillsField/Skill";

const cx = classNames.bind(styles);

type CardProps = Project & { id: string; isSelected: string | null; onClick: (id: string) => void };

const ProjectField = () => {
  return (
    <section id="project" className={cx("container")}>
      <h2 className={cx("title")}>Project</h2>
      <CardList />
    </section>
  );
};

const CardList = () => {
  const [isSelected, setIsSelected] = useState<string | null>(null);

  const handleOnClickCard = (id: string) => {
    setIsSelected(id);
  };

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.name === isSelected) return -1;
    if (b.name === isSelected) return 1;
    return 0;
  });
  return (
    <ul className={cx("card-list")}>
      {sortedProjects.map((project) => (
        <>
          <li key={project.name}>
            <Card id={String(project.name)} onClick={handleOnClickCard} isSelected={isSelected} {...project} />
          </li>
          {isSelected === project.name && (
            <article>
              <h4 className={cx("skills")}>skills</h4>
              {project.skills.map((skill) => (
                <Skill key={skill} skill={skill} />
              ))}
              <Link className={cx("more-info")} href={`project/${project.name}`}>
                자세히 보러가기
              </Link>
            </article>
          )}
        </>
      ))}
    </ul>
  );
};

const Card = ({ id, name, period, address, gitrepo, skills, description, logo, isSelected, onClick }: CardProps) => {
  return (
    <>
      <article
        id={id}
        className={cx("card", isSelected === id ? "selected" : "")}
        onClick={() => onClick(id)}
        style={{
          background: `${isSelected === id ? "#fff" : "#373737"} center 55% / 80% no-repeat url(${logo})`,
        }}
      >
        <div className={cx("card-text-box")}>
          <h6 className={cx("card-title", isSelected === id ? "selected" : "")}>{name}</h6>
          <p className={cx("card-period", isSelected === id ? "selected" : "")}>{period}</p>
          <p className={cx("card-description", isSelected === id ? "selected" : "")}>{description}</p>
        </div>
        <div className={cx("card-link-btn-box")}>
          <button className={cx("card-link-btn")}>
            <Link href={address}>Site Link</Link>
          </button>
          <button className={cx("card-link-btn")}>
            <Link href={gitrepo}>Git Repository</Link>
          </button>
        </div>
      </article>
    </>
  );
};

export default ProjectField;
