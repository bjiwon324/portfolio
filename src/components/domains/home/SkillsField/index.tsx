import Skill from "./Skill";
import styles from "./SkillsField.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SKILLS = [
  "Typescript",
  "Next.js",
  "Sass(SCSS)",
  "TanStack Query",
  "axios",
  "React Hook Form",
  "React-calendar",
  "Nice Modal",
  "react datepicker",
  "Javascript",
  "React",
  "React Router",
  "emoji-picker-react",
  "styled-components",
  "Tailwind",
];
const SkillsField = () => {
  return (
    <section id="skills" className={cx("skills-field")}>
      <h2 className={cx("title")}>Skills</h2>
      <ul className={cx("skill-list")}>
        {SKILLS.map((skill, index) => (
          <li key={index}>
            <Skill skill={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsField;
