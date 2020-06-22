import Link from "next/link";
import Router from "next/router";
import Footer from "../components/footer";
import styles from "../styles/pageWrap.module.scss";

import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function PageWrap({ children }) {

  return (
    <div className="container">
      <header className={styles.min}>
        <Link href="/">
          <a title="Tweeten, an intuitive and powerful Twitter experience built for those who get real work done">
            <img src="./images/logo-b.png" alt="Tweeten logo"/>
          </a>
        </Link>

        <ul className={styles.nav}>
            <li><NavLink href="/" label="Home"/></li>
            <li><NavLink href="/blog" label="Blog"/></li>
            <li><a href="https://twitter.com/tweetenapp" target="_blank" rel="noreferrer noopener">Follow us</a></li>
            <li><NavLink href="/releases" label="Releases"/></li>
            <li><NavLink href="/donate" label="Donate"/></li>
        </ul>
      </header>

      <div className="tweeten-content">{children}</div>

      <Footer/>
    </div>
  );
}

const NavLink = ({ href, label }) => {
    return (
        <Link href={href}><a>{label}</a></Link>
    )
}
