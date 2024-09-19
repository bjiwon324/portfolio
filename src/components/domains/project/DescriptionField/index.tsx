import useTyping from "@/hooks/useTyping";
import styles from "./DescriptionField.module.scss";
import classNames from "classnames/bind";
import Skill from "../../home/SkillsField/Skill";
import { Project } from "@/contexts/projects";
import Image from "next/image";

const cn = classNames.bind(styles);

interface Props {
  project?: Project;
}

export default function DescriptionField({ project }: Props) {
  const { text } = useTyping(project?.description!);
  return (
    <>
      <section className={cn("wrapper", "-info")}>
        <div>
          <h2 className={cn("title")}>{project?.name}</h2>
          <p className={cn("description")}>{text}</p>
          <p className={cn("period")}>{project?.period}</p>
          <article className={cn("team")}>
            <h3 className={cn("little-title")}>team</h3>
            {project?.team}
          </article>
          <article className={cn("skills")}>
            <h3 className={cn("little-title")}>skills</h3>
            {project?.skills.map((skill) => (
              <Skill key={skill} skill={skill} />
            ))}
          </article>
          <article>
            <a className={cn("address")} href={project?.address}>
              사이트 주소 : <span>{project?.address}</span>
            </a>
            <a className={cn("address")} href={project?.gitrepo}>
              GitHub 주소 : <span>{project?.gitrepo}</span>
            </a>
          </article>
        </div>
        {project?.logo && <Image alt="logo" className={cn("bg-logo")} src={project.logo} width={400} height={600} />}
      </section>
      {project?.name !== "Rolling" && (
        <section className={cn("wrapper-trouble")}>
          <h3 className={cn("little-title", "trouble")}>Trouble Shooting</h3>
          {project?.troubleshooting.map((item) => (
            <article key={item.title} className={cn("trouble-content")}>
              <h4 className={cn("trouble-title")}>{item.title}</h4>
              {item.problemSituation !== "" && (
                <>
                  <h5 className={cn("trouble-section")}>문제 상황</h5>
                  <p className={cn("trouble-text")}>{item.problemSituation}</p>
                  <h5 className={cn("trouble-section")}>해결 과정</h5>
                  <ul>
                    {item.process.map((pro, index) => (
                      <li key={index}>
                        <h6 className={cn("trouble-article")}>{pro.littleTitle}</h6>
                        <p className={cn("trouble-text")}>{pro.text}</p>
                        {pro.more && <p className={cn("trouble-text-more")}>{pro.more}</p>}
                      </li>
                    ))}
                  </ul>
                  <h5 className={cn("trouble-section")}>결과</h5>
                  {item.result.map((res, index) => (
                    <p className={cn("trouble-text")} key={index}>
                      {res}
                    </p>
                  ))}
                </>
              )}
            </article>
          ))}
        </section>
      )}
    </>
  );
}
