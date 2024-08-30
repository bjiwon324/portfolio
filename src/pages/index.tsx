import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProfileField from "@/components/ProfileField";
import ProjectField from "@/components/ProjectField";
import SkillsField from "@/components/SkillsField";
import Title from "@/components/Title";
import styles from "@/styles/Home.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const devRef = useRef(null);

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

    if (devRef.current) {
      observer.observe(devRef.current);
    }

    return () => {
      if (devRef.current) {
        observer.unobserve(devRef.current);
      }
    };
  }, []);
  return (
    <>
      <Nav />
      <section className={cx("title")}>
        <Title />
        <div ref={devRef}></div>
        <span className={cx("dev", { visible: isVisible })}>developer</span>

        <p className={cx("title__name")}>
          박지원 <span>입니다.</span>
        </p>
      </section>
      <ProfileField />
      <SkillsField />
      <ProjectField />
      <Footer />
    </>
  );
}
