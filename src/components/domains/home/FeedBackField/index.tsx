import Image from "next/image";
import styles from "./FeedBackField.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function FeedbackField() {
  return (
    <section className={cx("wrapper")} id="feedback">
      <h3>Feedback</h3>
      <article className={cx("img-list")}>
        <Image src={"/part1-review.png"} alt="팀원 피드백" width={1000} height={400} objectFit="fill" />
        <Image src={"/part2-review.png"} alt="팀원 피드백" width={1000} height={350} objectFit="fill" />
        <Image src={"/part3-review.png"} alt="팀원 피드백" width={1000} height={150} objectFit="fill" />
        <Image src={"/part4-review.png"} alt="팀원 피드백" width={1000} height={150} objectFit="fill" />
      </article>
    </section>
  );
}
