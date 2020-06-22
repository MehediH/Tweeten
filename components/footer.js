import Link from "next/link";

export default function Footer(){
    return (
        <footer>
            <p>Tweeten is built with <span className="heart">❤</span> in London by <a href="https://builtbymeh.com">Mehedi Hassan.</a></p>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li> 
                <li><Link href="/donate"><a>Donate</a></Link></li>
                <li><Link href="/releases"><a>Releases</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>

                <li><a href="https://twitter.com/tweetenapp">Follow us</a></li>
            </ul>
        </footer>
    )
}