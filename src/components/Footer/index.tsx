import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer id="contact" className={cx("footer")}>
      <section className={cx("footer__section")}>
        <p className={cx("footer__title")}>Contact</p>
        <div className={cx("footer__contact")}>
          <h4>mail.</h4>
          <a href="mailto:bjiwon0324@gmail.com">bjiwon0324@gmail.com</a>
        </div>
        <div className={cx("footer__contact")}>
          <h4>phone.</h4>
          <p>010-3905-1779</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
