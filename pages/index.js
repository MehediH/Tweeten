import Head from 'next/head'
import { useEffect, useState } from 'react'
import Typed from 'typed.js'

export default function Home() {
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
                <a href="http://tweetenapp.com" title="Tweeten, an intuitive and powerful Twitter experience built for those who get real work done"><img src="./icons/logo.png"/></a>
                <div className="main">
                    <h1>An intuitive and powerful Twitter experience built for <span className="slog"></span></h1>
                    <h1 className="alt">An intuitive and powerful Twitter experience built for those who get real work done</h1>
                    <p>Get the most powerful TweetDeck experience without worrying about the limits. Ever.</p>
                </div>
                <a className="download" href="#download">Download Now</a>
            </div>
        </header>

        <div className="main-features">
            <div className="feature">
                <div className="inner container">
                    <div className="img-cont big"><img className="shadow" src="./icons/interface.jpeg" alt="Tweeten columns"/></div>
                    <div className="meta">
                        <h2>A powerful, yet simple interface</h2>
                        <p>Tweeten is based on TweetDeck which means it offers a powerful, column-based interface that helps you keep track of everything that's happening on Twitter without needing to hit the refresh button. Tweeten enhances the TweetDeck design to offer a much cleaner and intutive experience.</p>
                    </div>
                </div>
            </div>

            <div className="feature alt-feature">
                <div className="inner container">
                    <h2>It's TweetDeck, but with all the important features</h2>
                    <ul>
                        <li className="mini">
                            <div className="icon">
                            </div>
                            <h2>Customization</h2>
                            <p>Tweeten is full of customization options. Want to change the column size? Sure. Want square profile pictures? Sure. Want a larger font? Sure.</p>
                        </li>
                        <li className="mini">
                            <div className="icon">
                    
                            </div>
                            <h2>Emoji Picker</h2>
                            <p className="em">Our 🔥 emoji picker lets you tweet the perfect emoji at the right time. From the 🤷 emoji to the 💯 emoji, all the emojis you 😍 are right here.</p>
                            <p className="emr">Our emoji picker lets you tweet the perfect emoji at the right time. From the shrug emoji to the poop emoji, all the emojis you love are right here.</p>
                        </li>
                        <li className="mini">
                            <div className="icon">
                              
                            </div>
                            <h2>Download Videos</h2>
                            <p>Tweeten lets you download any Twitter Video from your timelines, so that you don't have to open up a third-party service to download it.</p>
                        </li>
                        <li className="mini">
                            <div className="icon">
                               
                            </div>
                            <h2>Filters</h2>
                            <p>Don't like politics? Or sports? Thanks to TweetDeck's advanced muting system, you can mute any hashtag, account, or an entire app on Tweeten</p>
                        </li>
                    </ul>
                    <ul>
                        <li className="mini">
                            <div className="icon">
                                
                            </div>
                            <h2>The Classic @replies</h2>
                            <p>Twitter's new reply system isn't very productive. Tweeten lets you bring back the good old @replies and say adiós to the confusing new reply system on Twitter.</p>
                        </li>
                        <li className="mini">
                            <div className="icon">
                               
                            </div>
                            <h2>Seamless Updates</h2>
                            <p>Tweeten gets updated quite a lot, and the built-in system installs the latest updates without disrupting your <em>valuable</em> tweeting experience. It's instantaneous.</p>
                        </li>

                        <li>
                            <div className="icon">
                               
                            </div>
                            <h2>Custom CSS</h2>
                            <p>Tweeten's interface is absolutely beautiful, but it isn't flawless. If you know CSS, you can customize Tweeten to match your exact needs.</p>
                        </li>
                        <li className="mini">
                            <div className="icon">
                            </div>
                            <h2>Touch Bar</h2>
                            <p>Tweeten integrates into the macOS' Touch Bar, letting you access the most important shortcuts right from the touch bar of your MacBook whenever you need them.</p>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <div className="feature">
                <div className="inner container">
                    <div className="img-cont gif"><img className="shadow" src="./icons/gif.jpeg?v=1.1" alt="GIF features for TWeeten"/></div>
                    <div className="meta">
                        <h2>Powerful features for GIF lovers</h2> 
                        <p>Tweeten is built for GIF lovers. Its built-in GIF Search feature lets you search for GIFs via Giphy, and automatically add them to your tweets and replies! You can download literally any GIF that you see on tweets with a single click of a button. Tweeten also lets you zoom into GIFs, letting you view all the details in a GIF without hurting your eye balls. </p>
                    </div>
                </div>
            </div>

            <div className="feature a-left">
                <div className="inner container">
                    <div className="img-cont"><img src="./icons/extension.png" alt="Tweeten on a Microsoft Surface Laptop"/></div>
                    <div className="meta">
                        <h2>Available on your browser</h2>
                        <p>If you don't want a desktop app, Tweeten is available as an extension for Google Chrome as well. Our browser extension gives you the exact same experience with real-time customization abilities, custom CSS, GIF Search, and more!</p>
                    </div>
                </div>
            </div>

            <div className="feature">
                <div className="inner container">
                    <div className="img-cont"><img className="column shadow" src="./icons/do-more.png" alt="Tweeten columns"/></div>
                    <div className="meta">
                        <h2>Do more than just "more"</h2>
                        <p>Tweeten's is stupendously fast. All the built-in features enables you to do a lot more than just "more", and the nifty keyboard shortcuts from TweetDeck lets you get to things instantly. TweetDeck's advanced search and filtering system lets you track the exact query you want, and our beautiful interface removes the unnecessary noise and keeps you updated in real-time.</p>
                    </div>
                </div>
            </div>


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
     

            <div className="block" id="download">
                <div className="inner container">
                    <img src="./icons/download.png" alt="Tweeten on a Microsoft Surface Studio"/>
                    <div className="meta">
                        <h2>Get it today on Windows and Mac</h2>
                        <p className="dark">A better and powerful tweeting experience is just a click away. Get Tweeten on Windows 10, macOS, Windows 8 or Windows 7 today.</p>

                        <ul>
                            <li><a href="" target="_blank" title="Download Tweeten for your Windows 7, 8, or 10 PC, today.">Windows (64-bit)</a></li>
                            <li><a href="https://www.microsoft.com/store/p/tweeten/9nblggh52xbx" title="Download Tweeten for your Windows 10 device, today.">Microsoft Store</a></li>
                            <li><a href="" target="_blank" title="Download Tweeten for your Mac, today.">macOS</a></li>
                            <li><a href="https://chrome.google.com/webstore/detail/tweeten/ffoimglpkabojpaknlpodligjndnedji" target="_blank" title="Download Tweeten for Google Chrome">Chrome</a></li>
                        </ul>
                    </div>
                </div>
            </div> 
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
