import Link from "next/link";

export default function Footer({ currentPage }){
    return (
        <footer className="container">
            <div className="inner">
                
                <ul>
                    { currentPage !== "/" ? <li><Link href="/"><a>Home</a></Link></li> : ""}
                    { currentPage !== "/donate" ? <li><Link href="/donate"><a>Donate</a></Link></li> : ""}
                    { currentPage !== "/releases" ? <li><Link href="/releases"><a>Releases</a></Link></li> : ""}
                    { currentPage !== "/blog" ? <li><Link href="/blog"><a>Blog</a></Link></li> : ""}

                    <li><a href="https://twitter.com/tweetenapp">Follow us</a></li>
                </ul>

                <p>Tweeten is built with <span className="heart">❤</span> in London by <a href="https://builtbymeh.com">Mehedi Hassan.</a></p>
            </div>
        </footer>
    )
}