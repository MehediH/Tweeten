export default function FeatureHighlight({ sizeBig, img, imgPosition, contClass, imgClass, imgAlt, title, text }){
    return (
        <div class={`feature ${imgPosition === "left" ? "a-left" : ""}`}>
            <div class="inner container">
                <div class={`img-cont ${sizeBig ? "big" : ""} ${contClass ? contClass : ""}`}><img class={`shadow ${imgClass ? imgClass : ""}`} src={`./images/${img}`} alt={imgAlt}/></div>
                <div class="meta">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}