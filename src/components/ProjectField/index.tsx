import { link } from "fs";
import styles from "./ProjectField.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import SkillsField from "../SkillsField";

const cx = classNames.bind(styles);

interface Project {
  name: string;
  period: string;
  address: string;
  gitrepo: string;
  skills: string;
  description: string;
  logo: string;
}

type CardProps = Project & { id: string; isSelected: string | null; onClick: (id: string) => void };

const projects: Project[] = [
  {
    name: "Global-Nomad",
    period: "2024.03 - 2024.04",
    address: "https://global-nomad.vercel.app/",
    gitrepo: "https://github.com/Codeit-sprint2-4-5/global-nomad",
    skills: "",
    description: "다양한 체험 상품을 보고 간단하게 예약 할 수 있는 서비스 플랫폼",
    logo: "/icon-global-nomad-logo.svg",
  },
  {
    name: "Taskify",
    period: "2024.01 - 2024.02",
    address: "https://taskify-three-xi.vercel.app/",
    gitrepo: "https://github.com/bjiwon324/taskify",
    skills: "",
    description: "동료들과 함께, 혹은 나만의 일정을 관리 가능한 일정 관리 플랫폼",
    logo: "/icon-taskify-logo.svg",
  },
  {
    name: "Rolling",
    period: "2023.12 - 2023.12",
    address: "https://fluffy-shortbread-07838a.netlify.app/",
    gitrepo: " https://github.com/codeit-sprint2-team-12/team-12-rolling",
    skills: "",
    description: "추억의 롤링 페이퍼를 웹 상에서도 간편하게 즐길 수 있는 플랫폼",
    logo: "/icon-rolling-logo.svg",
  },
];

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
    console.log(id);

    if (isSelected === id) {
      return setIsSelected(null);
    }
  };

  return (
    <ul className={cx("card-list")}>
      {projects.map((project, index) => (
        <li key={index}>
          <Card id={String(index)} onClick={handleOnClickCard} isSelected={isSelected} {...project} />
        </li>
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
          <p className={cx("card-period")}>{period}</p>
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
