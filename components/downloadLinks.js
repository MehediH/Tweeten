export default function DownloadLinks(updateLinks){
    return (
        <div className="block" id="download">
            <div className="inner container">
                <img src="./images/download.png" alt="Tweeten on a Microsoft Surface Studio"/>
                <div className="meta">
                    <h2>Get it today on Windows and Mac</h2>
                    <p className="dark">A better and powerful tweeting experience is just a click away. Get Tweeten on Windows 10, macOS, Windows 8 or Windows 7 today.</p>

                    <ul>
                        <li><a href={updateLinks.windows} target="_blank" title="Download Tweeten for your Windows 7, 8, or 10 PC, today.">Windows (64-bit)</a></li>
                        <li><a href="https://www.microsoft.com/store/p/tweeten/9nblggh52xbx" title="Download Tweeten for your Windows 10 device, today.">Microsoft Store</a></li>
                        <li><a href={updateLinks.mac} target="_blank" title="Download Tweeten for your Mac, today.">macOS</a></li>
                        <li><a href="https://chrome.google.com/webstore/detail/tweeten/ffoimglpkabojpaknlpodligjndnedji" target="_blank" title="Download Tweeten for Google Chrome">Chrome</a></li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}