import styles from "./SkillsField.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export default function Skill({ skill }: { skill: string }) {
  return (
    <button disabled={true} className={cn("skill-tag")}>
      {skill}
    </button>
  );
}
