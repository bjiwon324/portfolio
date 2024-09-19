import Image from "next/image";
import styles from "./ProfileField.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const cx = classNames.bind(styles);

const myInfo = {
  name: "박지원",
  birth: "2000.03.24",
  education: "2019년 인성여자 고등학교 졸업",
};

const myLink = {
  github: "https://github.com/bjiwon324",
  mail: "bjiwon0324@gmail.com",
};

const infoKeys = Object.keys(myInfo);
const infoValues = Object.values(myInfo);

const ProfileField = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  return (
    <section ref={titleRef} id="profile" className={cx("profile")}>
      <div className={cx("img")}>
        <Image
          src={`/profile.jpg`}
          className={""}
          width={400}
          height={450}
          style={{ objectFit: "cover" }}
          alt="프로필 사진"
        />
      </div>
      <article className={cx("text-field")}>
        <h3 className={cx("smallTitle")}>Info</h3>
        {infoKeys.map((key, index) => (
          <div key={key}>
            <h4 className={cx("key")}>{key}.</h4>
            <p className={cx("text")}>{infoValues[index]}</p>
          </div>
        ))}
        <button className={cx("link", "github")}>
          <Link href={"https://github.com/bjiwon324"}>github</Link>
        </button>
        <button className={cx("link")}>
          <h4 className={cx("key")}>mail.</h4>

          <a href="mailto:bjiwon0324@gmail.com">bjiwon0324@gmail.com</a>
        </button>
      </article>

      <h2 className={cx("title")}>Profile</h2>
    </section>
  );
};

export default ProfileField;
