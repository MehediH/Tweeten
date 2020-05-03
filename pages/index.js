import Head from 'next/head'
import FeatureCard from "../components/featureCard";
import FeatureHighlight from "../components/featureHighlight";

import { getLatestRelease } from "../lib/releases";
import DownloadLinks from "../components/DownloadLinks";

import { useEffect, useState } from 'react'
import Typed from 'typed.js'

export default function Home({latestReleaseLinks}) {
  const [isCompMounted, setCompMonuted] = useState(false)
  
  useEffect(() => setCompMonuted(true), [])

  if(isCompMounted){
    let options = {
      strings: ["those who are on Twitter 24/7.", "those who simply want more.", "those who live for the dank memes.", "those who want a better TweetDeck.", "those who get real work done."],
      typeSpeed: 20,
      backSpeed: 15,
      onComplete: () => {
        document.querySelector(".typed-cursor").style.display = "none";
      }
    };
    
    new Typed('.slog', options);
  }


  return (
    <>
        <header>
            <div className="inner container">
                <a href="http://tweetenapp.com" title="Tweeten, an intuitive and powerful Twitter experience built for those who get real work done"><img src="./images/logo.png"/></a>
                <div className="main">
                    <h1>An intuitive and powerful Twitter experience built for <span className="slog"></span></h1>
                    <h1 className="alt">An intuitive and powerful Twitter experience built for those who get real work done</h1>
                    <p>Get the most powerful TweetDeck experience without worrying about the limits. Ever.</p>
                </div>
                <a className="download" href="#download">Download Now</a>
            </div>
        </header>

        <div className="main-features">

            <FeatureHighlight
                sizeBig={true}
                img="interface.jpeg"
                imgAlt="Tweeten columns interface"
                title="A powerful, yet simple interface"
                text="Tweeten is based on TweetDeck which means it offers a powerful, column-based interface that helps you keep track of everything that's happening on Twitter without needing to hit the refresh button. Tweeten enhances the TweetDeck design to offer a much cleaner and intutive experience."
            />

            <div className="feature alt-feature">
                <div className="inner container">
                    <h2>It's TweetDeck, but with all the important features</h2>
                    <ul>
                        <FeatureCard
                          icon="customization"
                          title="Customization"
                          text="Tweeten is full of customization options. Want to change the column size? Sure. Want square profile pictures? Sure. Want a larger font? Sure."
                        />

                        <FeatureCard
                          icon="emoji"
                          title="Emoji Picker"
                          text="Our 🔥 emoji picker lets you tweet the perfect emoji at the right time. From the 🤷 emoji to the 💯 emoji, all the emojis you 😍 are right here."
                        />

                        <FeatureCard
                          icon="videos"
                          title="Download Videos"
                          text="Tweeten lets you download any Twitter Video from your timelines, so that you don't have to open up a third-party service to download it."
                        />

                        <FeatureCard
                          icon="filters"
                          title="Filters"
                          text="Don't like politics? Or sports? Thanks to TweetDeck's advanced muting system, you can mute any hashtag, account, or an entire app on Tweeten."
                        />

                    </ul>
                    <ul>
                        <FeatureCard
                          icon="replies"
                          title="The Classic @replies"
                          text="Twitter's new reply system isn't very productive. Tweeten lets you bring back the good old @replies and say adiós to the confusing new reply system on Twitter."
                        />

                        <FeatureCard
                          icon="updates"
                          title="Seamless Updates"
                          text="Tweeten gets updated quite a lot, and the built-in system installs the latest updates without disrupting your valuable tweeting experience. It's instantaneous."
                        />

                        <FeatureCard
                          icon="css"
                          title="Custom CSS"
                          text="Tweeten's interface is absolutely beautiful, but it isn't flawless. If you know CSS, you can customize Tweeten to match your exact needs."
                        />

                        <FeatureCard
                          icon="touchbar"
                          title="Touch Bar"
                          text="Tweeten integrates into the macOS' Touch Bar, letting you access the most important shortcuts right from the touch bar of your MacBook whenever you need them."
                        />
                    </ul>
                    
                </div>
            </div>

            <FeatureHighlight
                img="gif.jpeg"
                imgAlt="GIF features for Tweeten"
                contClass="gif"
                title="Powerful features for GIF lovers"
                text="Tweeten is built for GIF lovers. Its built-in GIF Search feature lets you search for GIFs via Giphy, and automatically add them to your tweets and replies! You can download literally any GIF that you see on tweets with a single click of a button. Tweeten also lets you zoom into GIFs, letting you view all the details in a GIF without hurting your eye balls."
            />
            
            <FeatureHighlight
                img="extension.png"
                imgPosition="left"
                imgAlt="Tweeten on a Google Chrome browser"
                title="Available on your browser"
                text="If you don't want a desktop app, Tweeten is available as an extension for Google Chrome as well. Our browser extension gives you the exact same experience with real-time customization abilities, custom CSS, GIF Search, and more!"
            />

            <FeatureHighlight
                img="do-more.png"
                imgAlt="Tweeten Options UI"
                imgClass="column"
                title='Do more than just "more"'
                text={"Tweeten's is stupendously fast. All the built-in features enables you to do a lot more than just \"more\", and the nifty keyboard shortcuts from TweetDeck lets you get to things instantly. TweetDeck's advanced search and filtering system lets you track the exact query you want, and our beautiful interface removes the unnecessary noise and keeps you updated in real-time."}
            />
    

            <div className="block block-alt">
                <div className="inner container">
                    <h2>And everything else from TweetDeck</h2>
                    <ul className="feature-switcher">
                        <li>
                            <div className="meta">
                                <h2>Multiple Accounts</h2>
                                <span>Being able to manage multiple accounts at the same time is essential, and TweetDeck is built specifically for that.</span>
                            </div>
                        </li>
                        <li>
                            <div className="meta">
                                <h2>Scheduled Tweets</h2>
                                <span>TweetDeck lets you schedule tweets, so that you can schedule your tweets to be posted at the perfect time for your followers.</span>
                            </div>
                        </li>
                        <li>
                            <div className="meta">
                                <h2>Advanced Search</h2>
                                <span>Search for GIFs, memes, hashtags, trends, breaking news, or anything else on Tweeten in real-time with advanced filters from TweetDeck.</span>
                            </div>
                        </li>
                        <li>
                            <div className="meta">
                                <h2>Activity Tracking</h2>
                                <span>You can keep an eye on all the tweets that are being liked by the people you are following, or whenever someone starts to follow a new account on TweetDeck.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
     

            <DownloadLinks {...latestReleaseLinks}/>
        </div>

        <footer className="container">
            <div className="inner">
                
                <ul>
                    <li><a href="http://tweetenapp.com/donate">Donate</a></li>
                    <li><a href="http://tweetenapp.com/releases">Release Notes</a></li>
                    <li><a href="https://blog.tweetenapp.com/">Blog</a></li>
                    <li><a href="https://twitter.com/tweetenapp">Follow us</a></li>
                </ul>

                <p>Tweeten is built with <span className="heart">❤</span> in London by <a href="https://builtbymeh.com">Mehedi Hassan.</a></p>
            </div>
        </footer>
    </>
  )
}

export async function getStaticProps(){
    let latestReleaseLinks = await getLatestRelease();

    return {
        props: {
            latestReleaseLinks
        }
    }
}