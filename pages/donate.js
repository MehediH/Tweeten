import Link from "next/link"
import { useRouter } from "next/router"
import Footer from "../components/footer"

export default function Donate(){
    const router = useRouter();

    return (
        <>
            <header>
                <div class="inner container">
                    <Link href="/">
                        <a title="Tweeten, an intuitive and powerful Twitter experience built for those who get real work done">
                            <img src="./images/logo.png"/>
                        </a>
                    </Link>
                    <div class="main">
                        <h1 class="donthide">Support Tweeten</h1>
                        <p>A lot of work goes into designing and developing Tweeten. I have been developing Tweeten for almost 2 years, spending hours and hours of my time into making a better TweetDeck experience for everyone without charging a single penny. But to keep developing Tweeten in the future, adding new features, and improving existing ones, a small donation from you would be very much appreciated!</p>
                    </div>

                    <div class="donate-container">
                        <a class="donate" href="https://www.paypal.me/MehediHa/15">Donate Using PayPal</a>
                        <a class="donate" href="https://www.patreon.com/tweeten">Donate via Patreon</a>
                    </div>
                </div>
            </header><br/><br/><br/>

            <Footer currentPage={router.pathname}/>
        </>
    )
}