import Link from "next/link"
import PageWrap from "../components/pageWrap";
import styles from "../styles/donate.module.scss";

import { FaPatreon, FaPaypal, FaGithub, FaCoffee } from "react-icons/fa";

export default function Donate(){

    return (
      <PageWrap>
        <img src="./images/donate.png" className={styles.hero} draggable={false}/>
        <div className={styles.content}>
          <h1>Support Tweeten's Development</h1>
          <p>
            A lot of work goes into designing and developing Tweeten. Designing, developing, and maintaing
            the project takes hours of work. Tweeten has been a free product since the beginning, and I tend to
            keep it that way for many more years to come.
        </p>
          <p>If you love using Tweeten and want to support the app's development, a small donation would be much appreciated.
          Tweeten is used by thousands of people, and a small donation for even 50% of the users will help me out financially.
          As a student, I rely heavily on student loans and your donation would mean a lot!
        </p>

          <p>You can donate using any of the different services below:</p>

          <div className={styles.donationLinks}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.me/MehediHa/15">
              <FaPaypal/>
              PayPal
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/tweeten">
              <FaPatreon/>
              Patreon
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/tweeten">
              <FaGithub/>
              GitHub Sponsors
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/mehedi">
              <FaCoffee/>
              Ko-fi
            </a>
          </div>

          <p>Thank you so much for using Tweeten.</p>
          <p>Mehedi Hassan<br />Creator of Tweeten</p>
        </div>
      </PageWrap>
    );
}