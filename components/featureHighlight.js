export default function FeatureHighlight({ sizeBig, img, imgPosition, contClass, imgClass, imgAlt, title, text }){
    return (
        <div className={`feature ${imgPosition === "left" ? "a-left" : ""}`}>
            <div className="inner container">
                <div className={`img-cont ${sizeBig ? "big" : ""} ${contClass ? contClass : ""}`}><img className={`shadow ${imgClass ? imgClass : ""}`} src={`./images/${img}`} alt={imgAlt}/></div>
                <div className="meta">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}